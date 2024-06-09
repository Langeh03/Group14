import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Maps from '../components/Maps'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapScreen = () => {

    const Stack = createNativeStackNavigator()
    

  return (
    <View style={{ height: '100%'}}>
      <View style={{height: '50%'}}>
        <Maps />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.message}>Hello There!</Text>
        <View style={styles.inputWrapper}>
            <GooglePlacesAutocomplete 
                placeholder='Where to?'
                styles={styles}
            />
        </View>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    wrapper: {
        height: '50%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#fff"
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
        marginTop: 13,
    },
    textInput: {
        backgroundColor: "#E0E0E0",
        borderRadius: 8,
    }
})