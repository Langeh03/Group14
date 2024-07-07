import { Dimensions, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import CustomButton from './CustomButton';

const {width, height} = Dimensions.get('screen')

const Valid = () => {

    const navigation = useNavigation();

    const onSendPress = () => {
      navigation.navigate('LogIn');
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.show}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: "#27A28E", borderRadius: 50, width: 100, height: 100, paddingVertical: 20}}>
          <Icon name='checkmark' type='ionicon' color='#fff' size={60}/>
        </View>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#35989D', marginTop: 40, marginBottom: 20 }}>Verified</Text>
  
        <Text style={{fontSize: 16, fontWeight: 'black', color: '#4D4C4C', marginTop: 10}} >Your password has been</Text>
        <Text style={{fontSize: 16, fontWeight: 'black', color: '#4D4C4C', marginBottom: 10}}>changed successfully!</Text>
      
        <View style={styles.button}>
          <CustomButton  text="Done" onPress={onSendPress} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Valid

const styles = StyleSheet.create({
    home: {
      height: height,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    show:{
      marginHorizontal: 30,
      height: '100%',
    },
    button:{
      marginTop: 30,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
})