import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Maps from '../components/Maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import NavFavourites from '../components/NavFavourites';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

const MapScreen = () => {

  const  navigation = useNavigation();
    
  const dispatch = useDispatch();

  return (
    <View style={{ height: '100%'}}>
      <View style={{height: '50%'}}>
        <Maps />
      </View>
      
      <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
        <View style={styles.wrapper}>
          <Text style={styles.message}>Hello There!</Text>
          <View style={styles.inputWrapper}>
              <GooglePlacesAutocomplete 
                placeholder='Where to?'
                styles={styles}
                onPress={(data, details = null) => {
                  dispatch(setDestination({
                    location: details.geometry.location,
                    description: data.description
                  }))
                  navigation.navigate('Map')
                }}
                fetchDetails={true}
                returnKeyType={'search'}
                minLength={2}
                enablePoweredByContainer={false}
                query={{
                  key: GOOGLE_MAPS_APIKEY,
                  language: 'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
              />
          </View>
          <View style={{paddingHorizontal: 20}}>
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
        </View>
      </LinearGradient>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  home: {
    height: '100%',
  },
  wrapper: {
    height: '50%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    //backgroundColor: "#fff",
    overflow: 'scroll'
  },
  icon: {
    marginRight: 15,
    borderRadius: 50,
    backgroundColor: '#18776F',
    paddingVertical: 10,
    height: 40,
    width: 40
  },
  message: {
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    fontWeight: 'black',
    fontSize: 17
  },
  textInputContainer: {
    paddingHorizontal: 20,
    marginVertical: 13,
  },
  textInput: {
    backgroundColor: "#E5F7F4",
    borderRadius: 8,
  }
})