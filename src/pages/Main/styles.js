import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #00aaaa;
`;

export const Content = styled.View`
    padding: 10px;
`;
export const Cronometro = styled.View`
    flex-direction: row;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`;
export const CronometroPoints = styled.Text`
    font-size: 22;
    font-weight: bold;
    padding: 8px;
`;
export const CronometroText = styled.Text`
    font-size: 24;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    background-color: #ddd;
`;
export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const IconButton = styled.TouchableOpacity`
    padding: 8px;
    margin: 10px;
    background-color: #fff;
    border-radius: 50px;
`;