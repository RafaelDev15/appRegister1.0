import React from 'react';

import {Container, IconButton} from '../../Styles/header';

import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

export default function Header() {

    const navigation = useNavigation();

 return (
   <Container>
       <IconButton onPress={ () => navigation.openDrawer()}>
            <Icon name='menu' size={35} color='#FFF'  />
       </IconButton>
   </Container> 
  );
}