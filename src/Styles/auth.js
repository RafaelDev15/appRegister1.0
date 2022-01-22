import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #000119;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#575868' 
})`
    background: #191A30;
    width: 90%;
    height: 45px;
    margin-top: 20px;
    border-radius: 50px;
    padding: 5px;
    padding-left: 20px;
    color: #FFF;
    font-size: 18px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    margin-top: 40px;
    background: #4C85F0;
    width: 90%;
    height: 45px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const BtnText = styled.Text`
 color: #FFF;
 font-size: 24px;
 font-weight: 500;
`;

export const LinkSignup = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const BtnLink = styled.Text`
    font-size: 18px;
    color: #575868;
`;

