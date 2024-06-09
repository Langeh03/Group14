import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const Maps = () => {
  return (
    <MapView
    style={{flex: 1}}
    mapType="mutedStandard"
    initialRegion={{
        latitude: 4.159302,
        longitude: 9.243536,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    }}
    />
  )
}

export default Maps

const styles = StyleSheet.create({})