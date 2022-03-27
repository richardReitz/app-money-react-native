import React, {useState, useContext}  from 'react';
import {Platform, ActivityIndicator} from 'react-native';
import {Background, Container, AreaInput, Input, SubmitButton, SubmitText} from '../SignIn/styles';
import {AuthContext} from '../../contexts/auth';

export default function SignIn() {
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');

const {signUp, loadingAuth} =  useContext(AuthContext);

function handleSignUp(){
  signUp(email, password, name);
}

 return (
   <Background>
       <Container
       behavior={Platform.OS === 'ios' ? 'padding' : ''}
       enabled
       >
         <AreaInput>
          <Input
          placeholder="Nome"
          autocorrect={false}
          autoCapitalize="none"
          value={name}
          onChangeText={ (text) => setName(text)}
          />
          </AreaInput>
         <AreaInput>
          <Input
          placeholder="Email"
          autocorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={ (text) => setEmail(text)}
          />
          </AreaInput>
          <AreaInput>
          <Input
          placeholder="Password"
          autocorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={ (text) => setPassword(text)}
          secureTextEntry={true}
          />
         </AreaInput>
         <SubmitButton onPress={handleSignUp}>
            {
              loadingAuth ? (<ActivityIndicator size={20} color="#FFF"/>)
              : (
                <SubmitText>Cadastrar</SubmitText>
              )
            }          
         </SubmitButton>

       </Container>
   </Background>
  );
}