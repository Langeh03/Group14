import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import UserProfile from '../screens/UserProfile'

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name='Profile' component={UserProfile}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation