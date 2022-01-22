import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #000119;
    justify-content: center;
    align-items:  center;
`;

export const Form = styled.View`
   flex: 1;
   margin-top: 50px;
   width: 100%;
   padding-left: 20px;
   padding-right: 20px;
   margin-right: 20px;
`;

export const Label = styled.Text`
    color: #575868;
    font-style: italic;
    font-size: 18px;
    font-weight: 500;
    margin-top: 20px;
`;

export const Input = styled.TextInput`
    background: #191A30;
    width: 100%;
    height: 45px;
    padding: 5px;
    color: #FFF;
    font-size: 18px;
`;

export const InputDescription  = styled.TextInput`
     background: #191A30;
    width: 100%;
    padding: 5px;
    color: #FFF;
    font-size: 18px;
`;

export const ButtonRegister = styled.TouchableOpacity`
    width: 200px;
    height: 40px;
    background: #4C85F0;
    padding: 5px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    margin-left: 20px;
    margin-top: 20px;

`;

export const TextRegister = styled.Text`
    font-size: 19px;
    color: #FFF;
    font-weight: 500;
    text-transform: uppercase;
`;
