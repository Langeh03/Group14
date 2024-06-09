import React, {useState} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {

    const [username, setUsername] = useState('');
   
    const navigation = useNavigation();

    const onSendPress = () => {
        navigation.navigate('ResetPassword');
    };

    
    const onLogInPress = () => {
        navigation.navigate('LogIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
         <Text style={styles.title}>Forgot Password</Text>
  
         <CustomInput placeholder="UserName" value={username} setValue={setUsername} />
       

      
  
          <CustomButton  text="Send" onPress={onSendPress} />
         
          
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

export default ForgotPasswordScreen
