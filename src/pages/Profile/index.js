import React, {useContext} from 'react';
import { Container, User, NewLink, LinkText, Logout, LogoutText} from './styles';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

export default function New() {
  const {user, signOut} = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <Container>
      <Header/>
      <User>
        {user && user.name}
      </User>
      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <LinkText>Registrar movimentação</LinkText>
      </NewLink>
      <Logout onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}