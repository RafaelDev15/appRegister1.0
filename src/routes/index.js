import React, {useContext} from 'react';
import { View, ActivityIndicator } from 'react-native';

import {AuthContext} from '../contexts/auth';

import AuthRoutes from './app.auth';
import AppRoutes from './app.routes';

export default function Routes() {

  const {signed, loading} = useContext(AuthContext);

  if(loading){
    return(
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000119'
      }}
      >
        <ActivityIndicator size={50} color="#4C85F0" />
      </View>
    );
  }

 return (
    signed ? <AppRoutes /> : <AuthRoutes />
  );
}