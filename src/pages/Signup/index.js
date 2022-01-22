import React, {useState, useContext} from 'react';
import {Keyboard} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Container, Title, Input, ButtonLogin, BtnText, BtnLink, LinkSignup, KeyBord} from '../../Styles/auth';
import { AuthContext } from '../../contexts/auth';

export default function Signup() {

  const navigation = useNavigation();
  const {signUp} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleGoBack(){
    navigation.goBack();
  }

  function handleSignUp(){
    Keyboard.dismiss();
    signUp(name, email, password);
  }

 return (
   <Container>

    
      <Title>
        Sign Up
      </Title>

      <Input 
        placeholder="Nome"
        value={name}
        onChangeText={ text => setName(text) }
        autoCapitalize='words'
      />

      <Input 
        placeholder="Email"
        value={email}
        onChangeText={ text => setEmail(text) }
      />

      <Input 
        placeholder="Password"
        value={password}
        onChangeText={ text => setPassword(text) }
        secureTextEntry={true}
      />

      <ButtonLogin onPress={handleSignUp}>
        <BtnText>Cadastrar</BtnText>
      </ButtonLogin>

      <LinkSignup onPress={handleGoBack}>
        <BtnLink>Voltar</BtnLink>
      </LinkSignup>
    
   </Container>
  );
}