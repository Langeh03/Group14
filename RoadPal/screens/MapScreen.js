import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Maps from '../components/Maps'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavFavourites from '../components/NavFavourites';
import { LinearGradient } from 'expo-linear-gradient';

const MapScreen = () => {

    const Stack = createNativeStackNavigator()
    

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
    borderBottomColor: "#E0E0E0"
  },
  textInputContainer: {
    paddingHorizontal: 20,
    marginVertical: 13,
  },
  textInput: {
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
  }
})