import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #000119;
    width: 100%;
    align-items: center;
`;

export const TextModal = styled.Text`
    color: #575868;
    font-size: 18px;
    margin-top: 15px
    font-weight: 500;
`;

export const Span = styled.Text`
    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.9px;
`;

export const AreaInfos = styled.View`
    width: 90%;
    margin-top: 20px;
`;

export const ButtonDelete = styled.TouchableOpacity`
    width: 200px;
    padding: 7px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: #FF1212;
    margin-top: 15px;

`;

export const BtnDelete = styled.Text`
    font-size: 17px;
    color: #FFF;
    font-weight: bold;
    text-transform: uppercase;
`;

export const ButtonClose = styled.TouchableOpacity`
    width: 50px;
    padding: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
`;

/* Modal Detalhes */

export const AreaStatus = styled.View`
    flex-direction: row;
    margin-top: 25px;
    justify-content: center;
    align-items: center;

`;

export const Status = styled.Text`
    color: #575868;
    font-size: 19px;
    font-weight: 500;
    margin-right: 20px;
`;

export const Label = styled.Text``;

export const ButtonStatus = styled.TouchableOpacity`
    width: 100px;
    padding: 3px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid ${props => (props.status ? '#0EA501' : '#FAFF00')};
`;

export const BtnStatus = styled.Text`
    color: ${props => (props.text ? '#0EA501' : '#FAFF00')};
    text-transform: uppercase;
    font-weight: bold;
`;