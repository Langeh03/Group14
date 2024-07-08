import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Maps from '../components/Maps'
import { Icon } from 'react-native-elements'
import { reset, setDestination } from '../slices/navSlice'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('screen')

const MainMapScreen = () => {
    const  navigation = useNavigation();

    const dispatch = useDispatch();

    function onCancleTrip() {
        dispatch(reset())
        navigation.navigate('Map')
    }

  return (
    <View style={{ height: '100%' }}>
      <Maps />
      <TouchableOpacity style={styles.btn} onPress={onCancleTrip}>
        <Icon style={styles.icon} name='close' type='ionicon' color='#fff' size={20}/>
        <Text style={{fontWeight: '700', color: "#FFFFFF", fontSize: 16}}>Cancle Trip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainMapScreen

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: '#27A28E',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 140,
        borderRadius: 50,
        position: 'absolute',
        bottom: height*0.05,
        left: width*0.3
    }
})