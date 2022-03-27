import React, {useContext, useState, useEffect} from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import HistoricList from '../../components/HistoricList';
import {Background, Container, Balance, Name, Title, List} from './styles';
import {format} from 'date-fns';

export default function Home() {
  const [historic, setHistoric] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(()=>{
    async function loadList(){
      await firebase.database().ref('users').child(uid).on('value', (snapshot)=> {
        setSaldo(snapshot.val().saldo);
      });
      await firebase.database().ref('historic')
      .child(uid)
      .orderByChild('date').equalTo(format(new Date, 'dd/MM/yy'))
      .limitToLast(10).on('value', (snapshot)=>{
        setHistoric([]);
        
        snapshot.forEach((childItem) =>{
          let list = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor
          };
          setHistoric(oldArray => [...oldArray, list].reverse());
        })
      })
    }
    loadList();
  }, []);

 return (
  <Background>
    <Header/>
    <Container>
      <Name>{user && user.name}</Name>
      <Balance>R${saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Balance>
    </Container>
    <Title>Ultimas movimentações</Title>
    <List 
    showsVerticalIndicator={false}
    data={historic}
    keyExtractor={item => item.key}
    renderItem={({item}) => <HistoricList data={item}/>}
    />
  </Background>
  );
}