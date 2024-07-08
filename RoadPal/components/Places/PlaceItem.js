import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const PlaceItem = ({place, onSelect}) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row', height: 'fit'}} onPress={onSelect}>
        <Icon style={styles.icon} name='location' type='ionicon' color='#fff' size={18}/>
        <View>
            <Text style={{fontWeight: '700'}}>{place.title}</Text>
            <Text style={{color: 'gray'}}>{place.address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
    icon: {
        marginRight: 15,
        borderRadius: 50,
        backgroundColor: '#18776F',
        paddingVertical: 10,
        height: 40,
        width: 40
    }
})