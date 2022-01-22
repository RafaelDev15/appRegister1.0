import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../pages/Home';
import New from '../../pages/New';
import Cancel from '../../pages/Cancel';

const Stack = createStackNavigator();

export default function Navigation() {
 return (
    <Stack.Navigator
    >
       <Stack.Screen name="HomeStack" component={Home} options={{headerShown: false}} />
       <Stack.Group screenOptions={{ presentation: 'modal' }}>
       <Stack.Group>
          <Stack.Screen name="New" component={New} options={{
            title: 'Novo registro',
            headerStyle: {
              backgroundColor: '#191A30'
            },
            headerTintColor: '#575868'
          }} />

          <Stack.Screen name="Cancel" component={Cancel} options={{
            title: 'Cancelar pedido',
            headerStyle: {
              backgroundColor: '#191A30'
            },
            headerTintColor: '#575868'
          }} />
       </Stack.Group>
       </Stack.Group>
      
   </Stack.Navigator>

  );
}