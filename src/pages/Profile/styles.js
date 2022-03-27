import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #131313;
    align-items: center;
`;

export const User = styled.Text`
    color: #fff;
    font-size: 28px;
    margin-top: 20px;
`;

export const NewLink = styled.TouchableOpacity`
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    margin: 18px 0 10px;
    align-items: center;
    justify-content: center;
`;

export const LinkText = styled.Text`
    font-size: 17px;
    color: #fff;
`;

export const Logout = styled.TouchableOpacity`
    background-color: #c62c36;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
`;

export const LogoutText = styled.Text`
    font-size: 17px;
    color: #fff;
`;
