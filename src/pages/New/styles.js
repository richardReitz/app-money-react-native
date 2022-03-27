import styled from 'styled-components/native';

export const Background = styled.View`
    background-color: #131313;
    flex: 1;
`;

export const Input = styled.TextInput`
    height: 50px;
    width: 90%;
    background-color: rgba(255,255,255, .9);
    padding-left: 15px;
    border-radius: 6px;
    margin-bottom: 10px;
    font-size: 17px;
`;

export const SubmitBtn = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    background-color: #00b94a;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`;

export const SubmitText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

