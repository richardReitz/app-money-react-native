import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { Container, BtnMenu } from './styles';

export default function Header() {
    const navigation = useNavigation();

    return (
    <Container>
        <BtnMenu onPress={() => navigation.toggleDrawer()}>
            <Icon name="menu" color="#FFF" size={30}/>
        </BtnMenu>
    </Container>
    );
}