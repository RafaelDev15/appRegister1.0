import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Signup from '../pages/Signup';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
 return (
   <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={Login} options={{headerShown: false}} />
      <AuthStack.Screen name='Signup' component={Signup} options={{headerShown: false}} />
   </AuthStack.Navigator>
  );
}