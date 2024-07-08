import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Platform, StatusBar } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location"
import { Alert } from "react-native"
import { useDispatch } from 'react-redux';
import { setOrigin } from '../slices/navSlice';
import * as Notifications from 'expo-notifications'
import { AuthContext } from '../store/auth-context'

const data = [
  {
    id: "1",
    title: "Travel",
    image: "",
    screen: "Map",
  },
  {
    id: "2",
    title: "Updates",
    image: "",
    screen: "Updates",
  },
  {
    id: "3",
    title: "Get Educated",
    image: "",
    screen: "Map",
  },
]

const HomeScreen = () => {

  const  navigation = useNavigation();
    
  const dispatch = useDispatch();

  const authCtx = useContext(AuthContext);

  const [locationPermissionInformation, requestPermission] = useForegroundPermissions()

  async function verifyPermissions() {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant location permissions to use this app.'
      )
      
      return false
    }
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions()
    
    if (hasPermission){
      return
    }

    const location = await getCurrentPositionAsync();
    dispatch(setOrigin({
      location: location.coords,
      description: location.coords
    }))
  }

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Road State",
        body: "This is a notification"
      }
    })
  }

  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <View style={{flex: 1, paddingnavigationBottom: 20, paddingTop: 30}}>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={{gap: 10}}
            contentContainerStyle={{gap: 10}}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{height: 10, width: 10}} />
            )}
            style={{}}
            renderItem={({ item }) => {
                return (
                  <TouchableOpacity 
                    onPress={() => {
                      getLocationHandler()
                      navigation.navigate(item.screen)
                    }}
                    style={styles.container}>
                    <Text style={styles.heading}>{item.title}</Text>
                    <View style={{flex: 1,}}>
                        <Image 
                          style={{width: 100, height: 100, resizeMode: 'contain', marginTop: -30, marginLeft: -20}}
                          source={require('../assets/car.webp')} 
                        />
                    </View>
                  </TouchableOpacity>
                );
            }}
            ListHeaderComponent={() => (
              <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={styles.logo}>RoadPal</Text>
                  <TouchableOpacity onPress={authCtx.logout} >
                    <Image 
                      style={{width: 50, height: 50, resizeMode: 'cover', borderRadius: 50}}
                      source={require('../assets/user.jpg')}
                    />
                  </TouchableOpacity>
                </View>
        
                <Image 
                  style={{width: 326, height: 166, resizeMode: 'cover', borderRadius: 20, marginVertical: 15}}
                  source={require('../assets/car.jpg')} 
                />
              </View>
            )}
            ListFooterComponent={() => (
                <View>
                  <Text style={{fontSize: 25, fontWeight: 'bold'}}>Saved Route</Text>
                  <TouchableOpacity style={{flexDirection: 'row', marginVertical: 15}} onPress={() => navigation.navigate('SavedDestinations')}>
                    <Icon style={styles.icon} name='star' type='ionicon' color='#fff' size={18}/>
                    <View>
                        <Text style={{paddingVertical: 10, fontWeight: '700'}}>View Saved Destinations</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('AddDestinations')}>
                    <Icon style={styles.icon} name='add' type='ionicon' color='#fff' size={18}/>
                    <View style={{marginBottom: 50}} >
                        <Text style={{paddingVertical: 10, fontWeight: '700'}}>Add Saved Destinations</Text>
                    </View>
                  </TouchableOpacity>
                </View>
            )}
        />
      </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  home: {
    height: '100%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  icon: {
    marginRight: 15,
    borderRadius: 50,
    backgroundColor: '#18776F',
    paddingVertical: 10,
    height: 40,
    width: 40
  },
  container: {
    padding: 10,
    paddingRight: 0,
    width: 160,
    height: 100,
    backgroundColor: '#27A28E',
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  heading: {
    fontSize: 18,
    color: '#fff',
    flex: 1,
  }
})
