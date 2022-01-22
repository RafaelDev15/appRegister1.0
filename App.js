import React from 'react';
import {StatusBar} from 'react-native';
//import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';


export default function App() {
 return (
   <AuthProvider>
     <NavigationContainer>
        <StatusBar />
          <Routes />
     </NavigationContainer>
   </AuthProvider>
  );
}