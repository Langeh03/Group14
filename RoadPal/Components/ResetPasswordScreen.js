import React, {useState} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ResetPasswordScreen = () => {

    const [code, setCode] = useState('');
    const [newpassword, setNewPassword] = useState('');
   
    const navigation = useNavigation();


    const onSubmitPress = () => {
        navigation.navigate('HomeScreen');
    }

    
    const onLogInPress = () => {
        navigation.navigate('LogIn');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
         <Text style={styles.title}>Reset your password</Text>
  
         <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />
         <CustomInput  placeholder="Enter your new Password" value={newpassword} setValue={setNewPassword} secureTextEntry={true} />
       

      
  
          <CustomButton  text="Submit" onPress={onSubmitPress} />
         
          
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

export default ResetPasswordScreen
