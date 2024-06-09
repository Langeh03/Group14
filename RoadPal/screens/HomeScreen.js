import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import NavOptions from '../components/NavOptions'
import NavFavourites from '../components/NavFavourites'
import { Icon } from 'react-native-elements'

const HomeScreen = () => {
  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <View>
        <Text style={styles.logo}>RoadPal</Text>
        <NavOptions />
        <NavFavourites />
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Icon style={styles.icon} name='add' type='ionicon' color='#fff' size={18}/>
          <View>
              <Text style={{paddingVertical: 10}}>Add Location</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  home: {
    height: '100%',
    paddingTop: 30,
    paddingHorizontal: 15,
    marginTop: 20
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
}
})