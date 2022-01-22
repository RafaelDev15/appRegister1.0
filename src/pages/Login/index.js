import React, {useState, useContext} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import {Container, Title, Input, ButtonLogin, BtnText, BtnLink, LinkSignup} from '../../Styles/auth';

export default function Login() {

  const navigation = useNavigation();
  const {signIn} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    navigation.navigate('Signup');
  }

  function handleLogin(){
    Keyboard.dismiss();
    signIn(email, password);
  }

 return (
   <Container>

     <Title>
       Login
     </Title>

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

     <ButtonLogin onPress={handleLogin}>
       <BtnText>Acessar</BtnText>
     </ButtonLogin>

     <LinkSignup onPress={handleSignUp}>
       <BtnLink>Sign Up</BtnLink>
     </LinkSignup>
       
      
   </Container>
  );
}