import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Maps from '../components/Maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import NavFavourites from '../components/NavFavourites';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

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
            <NavFavourites />
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