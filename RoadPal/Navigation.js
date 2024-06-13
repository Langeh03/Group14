import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen'

const Navigation = () => {

    const homeScreen = 'Home';
    const travelScreen = "Map";
    const notificationScreen = "Notifications"

    const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName={homeScreen}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name

                    if (rn == homeScreen) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn == travelScreen) {
                        iconName = focused ? 'map' : 'map-outline';
                    } else if (rn == notificationScreen) {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    }

                    return <Icon name={iconName} type='ionicon' size={24}/>
                },
            })}
        >
            <Tab.Screen name={homeScreen} component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name={travelScreen} component={MapScreen} options={{headerShown: false}}/>
            <Tab.Screen name={notificationScreen} component={NotificationScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})