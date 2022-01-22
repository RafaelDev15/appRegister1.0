import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import {Container, Header, TextHeader, TitleDados, AreaDados, Label, Span, Logout, OffText} from '../../Styles/profile';

import Icon from 'react-native-vector-icons/Feather';
import SignOut from 'react-native-vector-icons/FontAwesome';

export default function Perfil() {

    const {logOut, user} = useContext(AuthContext);

 return (
   <Container>

       <Header>
           <TextHeader>Perfil</TextHeader>
           <Icon name='user' size={27} color='#575868' />
       </Header>

       <TitleDados>Dados da conta</TitleDados>

       <AreaDados>
            <Label>Nome: <Span> {user && user.name} </Span> </Label>

            <Label>Email: <Span> {user && user.email} </Span> </Label>

            <Label>ID: <Span> {user && user._id} </Span> </Label>
       </AreaDados>

       <Logout onPress={ () => logOut() }>
           <OffText>LogOut</OffText>
           <SignOut name='sign-out' size={20} color='#575868' />
       </Logout>

   </Container>
  );
}