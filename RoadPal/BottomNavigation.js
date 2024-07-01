import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen'
import MakeReport from './screens/MakeReport'
import Reports from './screens/Reports'

const BottomNavigation = () => {

    const homeScreen = 'Home';
    const travelScreen = "Map";
    const notificationScreen = "Notifications"
    const viewReportScreen = "Updates"
    const makeReportScreen = "Report"

    const Tab = createBottomTabNavigator();

  return (
        <Tab.Navigator
            initialRouteName={homeScreen}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name

                    if (rn == homeScreen) {
                        iconName = focused ? 'home' : 'home-outline';
                    }  else if (rn == notificationScreen) {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    } else if (rn == travelScreen) {
                        iconName = focused ? 'map' : 'map-outline';
                    } else if (rn == makeReportScreen) {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    } else if (rn == viewReportScreen) {
                        iconName = focused ? 'albums' : 'albums-outline';
                    }

                    return <Icon name={iconName} type='ionicon' size={24}/>
                },
            })}
        >
            <Tab.Screen name={homeScreen} component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name={notificationScreen} component={NotificationScreen} options={{headerShown: false}}/>
            <Tab.Screen name={travelScreen} component={MapScreen} options={{headerShown: false}}/>
            <Tab.Screen name={makeReportScreen} component={MakeReport} options={{headerShown: false}}/>
            <Tab.Screen name={viewReportScreen} component={Reports} options={{headerShown: false}}/>
        </Tab.Navigator>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})