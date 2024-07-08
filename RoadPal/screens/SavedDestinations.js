import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlacesList from '../components/Places/PlacesList'
import { LinearGradient } from 'expo-linear-gradient'

const SavedDestinations = () => {
  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
        <PlacesList />
    </LinearGradient>
  )
}

export default SavedDestinations

const styles = StyleSheet.create({
    home: {
      height: '100%',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      paddingHorizontal: 15,
    },
})