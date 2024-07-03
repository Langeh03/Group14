import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const data = [
    {
        id: 1,
        icon: "home",
        location: "Home",
        destination: "Malingo, Buea, Cameroon"
    },
    {
        id: 2,
        icon: "briefcase",
        location: "Work",
        destination: "Clarks, Buea, Cameroon"
    }
]

const NavFavourites = () => {
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View style={{height: 15, width: 15}} />
        )}
        style={{marginVertical: 15}}
        renderItem={({ item: {icon, location, destination} }) => (
            <TouchableOpacity style={{flexDirection: 'row', height: 'fit'}}>
                <Icon style={styles.icon} name={icon} type='ionicon' color='#fff' size={18}/>
                <View>
                    <Text style={{fontWeight: '700'}}>{location}</Text>
                    <Text style={{color: 'gray'}}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavourites

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