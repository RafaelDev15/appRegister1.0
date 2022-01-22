import 'react-native-gesture-handler';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';
import Navigation from '../components/Navigation';

import Perfil from '../pages/Perfil';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
 return (
    <Drawer.Navigator drawerContent={CustomDrawer} 
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: '#000019'
      },

      drawerActiveBackgroundColor: '#191A30',
      drawerActiveTintColor: '#FFF',
      drawerInactiveBackgroundColor: '#000019',
      drawerInactiveTintColor: '#575868'
    }}
    >
    <Drawer.Screen name="Home" component={Navigation} />
    <Drawer.Screen name="Perfil" component={Perfil}/>
    </Drawer.Navigator>
  );
}

