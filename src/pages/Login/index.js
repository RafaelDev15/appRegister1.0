import React, {useState, useContext} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import {Container, Title, Input, ButtonLogin, BtnText, BtnLink, LinkSignup} from '../../Styles/auth';

import Icon from 'react-native-vector-icons/Feather';

export default function Login() {

  const navigation = useNavigation();
  const {signIn, loadingAuth} = useContext(AuthContext);

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
       {loadingAuth ? (

         <ActivityIndicator color="#FFF" size={35} />

       ) : (
        <BtnText>Acessar</BtnText>
       )}
     </ButtonLogin>

     <LinkSignup onPress={handleSignUp}>
       <BtnLink>Sign Up</BtnLink>
     </LinkSignup>
       
      
   </Container>
  );
}