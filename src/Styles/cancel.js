import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #000119;
    align-items: center;
`;

export const Title = styled.Text`
    margin-top: 30px;
    margin-left: 10px;
    color: #575868;
    font-size: 22px;
    font-weight: 500;
    width: 95%;
`;

export const Span = styled.Text`
    font-weight: bold;
    font-style: italic;
`;

export const AreaInfos = styled.View`
    margin-top: 22px;
    
    background: #191A30;
    width: 95%;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
`;

export const TextTitle = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
   
`;

export const ButtonModal = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;

