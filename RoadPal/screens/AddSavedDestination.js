import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PlaceFrom from '../components/Places/PlaceFrom'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const AddSavedDestination = () => {
   
    const navigation = useNavigation();

    const onBackPress = () => {
        navigation.goBack();
    };
    
  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
        <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
            <TouchableOpacity style={{marginTop: 30, alignItems: 'flex-start', flexDirection: 'row'}}>
                <Icon name='arrow-back' type='ionicon' color='#000' size={30} onPress={onBackPress} />
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>{"   "}Add Destinations</Text>
            </TouchableOpacity>
            <PlaceFrom />
        </ScrollView>
    </LinearGradient>
  )
}

export default AddSavedDestination

const styles = StyleSheet.create({
    home: {
      height: '100%',
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      paddingHorizontal: 15,
    },
})