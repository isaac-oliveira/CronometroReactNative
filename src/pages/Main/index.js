import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, 
         Content,
         Cronometro, 
         CronometroPoints, 
         CronometroText,
         ButtonContainer,
         IconButton } from './styles';

let playing = false
let interval = null
let secondsGlobal = 0
export default function Main() {
    const [secondsTotal, setSecondsTotal] = useState(0)
    const [icon, setIcon] = useState('play')

    function playPause() {
        if(!playing) start()
        else pause()
        playing = !playing
    }

    function start() {
        interval = setInterval(() => {
            secondsGlobal += 1
            setSecondsTotal(secondsGlobal)
        }, 1000)
        setIcon('pause')
    }

    function pause() {
        clearInterval(interval)
        setIcon('play')
    }

    function refresh() {
        secondsGlobal = -1
        if(!playing) setSecondsTotal(secondsGlobal + 1)
    }

    function getSeconds() {
        let seconds = parseInt(secondsTotal % 60)
        return (seconds <= 9 ? '0' : '') + seconds
    }

    function getMinutes() {
        let minutes = parseInt((secondsTotal / 60) % 60)
        return (minutes <= 9 ? '0' : '') + minutes
    }

    function getHours() {
        let hours = parseInt(secondsTotal / 3600) 
        return (hours <= 9 ? '0' : '') + hours
    }

    return (
        <Container>
            <Content>
                <Cronometro>
                    <CronometroText>{getHours()}</CronometroText>
                    <CronometroPoints>:</CronometroPoints>
                    <CronometroText>{getMinutes()}</CronometroText>
                    <CronometroPoints>:</CronometroPoints>
                    <CronometroText>{getSeconds()}</CronometroText>
                </Cronometro>
                <ButtonContainer>
                    <IconButton onPress={() => playPause()}>
                        <Icon name={icon}
                              color='#000'
                              size={25}/>
                    </IconButton>

                     <IconButton onPress={() => refresh()}>
                        <Icon name="refresh"
                              color='#000'
                              size={25}/>
                    </IconButton>

                </ButtonContainer>
            </Content>
        </Container>
    )
}
