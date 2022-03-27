import React from 'react';
import { Container, Type, IconView, TypeText, AmountText } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function HistoricList({data}) {
 return (
   <Container>
       <Type>
           <IconView type={data.tipo}>
               <Icon name={data.tipo === 'receita' ? "arrow-up" : "arrow-down"}
               color="#FFF"
               size={20}/>
               <TypeText>{data.tipo}</TypeText>
           </IconView>
       </Type>
       <AmountText>R${data.valor}</AmountText>
   </Container>
  );
}