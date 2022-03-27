import styled from 'styled-components/native';

export const Background = styled.View`
background-color: #131313;
flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
margin-bottom: 20px;
`;
 
export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,.2)'
})`
background-color: rgba(0,0,0,.2);
width: 90%;
color: #fff;
font-size: 17px;
margin-bottom: 15px;
padding: 10px;
border-radius: 5px;
`;

export const SubmitButton = styled.TouchableOpacity`
background-color: #00b94a;
border-radius: 5px;
width: 90%;
height: 45px;
justify-content: center;
align-items: center;
margin-top: 15px;
`;
 
export const SubmitText = styled.Text`
color: #131313;
font-size: 18px;
`;
 
export const Link = styled.TouchableOpacity`
margin-top: 7px;
margin-bottom: 8px;
`;

export const LinkText = styled.Text`
color: #fff;
`;
 