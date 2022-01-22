import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #000019;
`;

export const Header = styled.View`
    width: 100%;
    background: #191A30;
    height: 60px;
    align-items: center;
    flex-direction: row;
`;

export const TextHeader = styled.Text`
    margin-left: 20px;
    color: #575868;
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
`;

export const TitleDados = styled.Text`
    margin: 25px;
    font-size: 18px;
    font-weight: 500;
    font-style: italic;
    color: #575868;
`;

export const AreaDados = styled.View`
    width: 100%;
    align-items: center;
    padding: 10px;
`;

export const Label = styled.Text`
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    color: #575868;
    margin-bottom: 25px;
`;

export const Span = styled.Text`
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    color: #FFF;
    letter-spacing: 0.8px;
`;

export const Logout = styled.TouchableOpacity`
    margin-left: 25px;
    flex-direction: row;
    align-items: center;
`;

export const OffText = styled.Text`
    color: #575868;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
`;

