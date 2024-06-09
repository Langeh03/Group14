import React, {useState} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');
   
    const navigation = useNavigation();


    const onConfirmPress = () => {
        navigation.navigate('HomeScreen');
    };

    const onResendPress = () => {
        console.warn("Check your email");
    }
    
    const onLogInPress = () => {
        navigation.navigate('LogIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
         <Text style={styles.title}>Confirm your email</Text>
  
          <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />
       

      
  
          <CustomButton  text="Confirm" onPress={onConfirmPress} />
         
          <CustomButton  text="Resend Code" onPress={onResendPress} type="Secondary"/>
          <CustomButton  text="Back to Log in" onPress={onLogInPress} type="Secondary"/>

        </View>
        </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    title:{
         fontSize: 24,
         fontWeight: 'bold',
         color: 'black',
         margin: 10,

    },
  });

export default ConfirmEmailScreen
