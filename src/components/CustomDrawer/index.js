import React from 'react';
import { View, Text } from 'react-native';

import {DrawerItemList, DrawerContentScrollView} from '@react-navigation/drawer';

export default function CustomDrawer(props) {
 return (
    <DrawerContentScrollView  {...props}>

       <View
        style={{
            width: '100%',
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center'
        }}
       >

           <Text style={{color: '#FFF'}}>Nome: <Text style={{fontSize: 17, fontWeight: 'bold'}}>Rafael Santana</Text></Text>

       </View>

       <DrawerItemList {...props} />

   </DrawerContentScrollView>
  );
}