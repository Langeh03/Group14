import { StyleSheet, FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: "1",
        title: "Travel",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
]

const NavOptions = () => {

  const navigation = useNavigation();
    
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            style={styles.container}>
                <View>
                    <Image 
                        style={{width: 120, height: 120, resizeMode: 'contain'}}
                        source={{uri: item.image}}
                    />
                    <Text style={styles.heading}>{item.title}</Text>
                    <Icon style={styles.icon} name='arrowright' color='white' type='antdesign'/>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
    container: {
        padding: 2,
        paddingLeft: 20,
        paddingBottom: 40,
        paddingTop: 4,
        width: 150,
        marginRight: 20,
        marginVertical: 30,
        backgroundColor: '#27A28E',
        borderRadius: 20
    },
    heading: {
        fontSize: 18,
        color: '#fff'
    },
    icon: {
        marginTop: 10,
        padding: 7,
        backgroundColor: '#18776F',
        width: 50,
        borderRadius: 50,
    }
  })


  //1:30:00