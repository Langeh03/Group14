import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const PlacesList = ({places}) => {
   
    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack();
    };

    if (!places || places.length === 0) {
        return (
            <View style={{height: '100%'}}>
                <TouchableOpacity style={{marginTop: 30, alignItems: 'flex-start', flexDirection: 'row'}}>
                    <Icon name='arrow-back' type='ionicon' color='#000' size={30} onPress={onBackPress} />
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>{"   "}Saved Destinations</Text>
                </TouchableOpacity>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: 700}}>No places added yet - start adding some!</Text>
                    <TouchableOpacity style={[{flexDirection: 'row', marginTop: 30}, styles.container]} onPress={() => navigation.navigate('AddDestinations')}>
                        <Icon style={styles.icon} name='add' type='ionicon' color='#fff' size={18}/>
                        <View>
                            <Text style={{paddingVertical: 10, fontWeight: '700', color: '#fff', marginLeft: -16}}>Add Destinations</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

  return (
    <FlatList 
        data={places} 
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PlaceItem place={item} />}
        ListHeaderComponent={() => (
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <View style={{marginBottom: 50}} >
                  <Text style={{paddingVertical: 10, fontWeight: '700'}}>Add Destinations</Text>
              </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default PlacesList

const styles = StyleSheet.create({
    icon: {
        marginRight: 15,
        borderRadius: 50,
        backgroundColor: '#18776F',
        paddingVertical: 10,
        height: 40,
        width: 40
    },
    container: {
        backgroundColor: '#18776F',
        borderRadius: 50,
        paddingVertical: 5,
        paddingRight: 15
    }
})