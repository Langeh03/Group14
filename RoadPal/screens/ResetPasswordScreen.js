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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.show}>
        <View style={styles.root}>
         <Text style={styles.title}>Reset your password</Text>
  
         <Text style={styles.input_text}>Enter confirmation code</Text>
         <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />
         <Text style={styles.input_text_2}>Enter new Password</Text>
         <CustomInput  placeholder="Enter your new Password" value={newpassword} setValue={setNewPassword} secureTextEntry={true} />
       
      
         <View style={styles.button}>
         <CustomButton  text="Submit" onPress={onSubmitPress} />
         <CustomButton  text="Back to Log in" onPress={onLogInPress} type="Secondary"/>
        </View>
          

        </View>
        </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    show:{
      backgroundColor: '#AAF0E5',
      height: '100%',
    },
    root: {
        alignItems: 'center',
        padding: 20,

    },
    title:{
         fontSize: 35,
         fontWeight: 'bold',
         color: 'black',
         marginTop: 100,
         marginBottom: 30,
    },
    input_text:{
      fontSize: 19,
      fontWeight: '300',
      color: 'black',
      marginTop: 10,
      marginLeft: '-41%',
    },
    input_text_2:{
      fontSize: 19,
      fontWeight: '300',
      color: 'black',
      marginTop: 10,
      marginLeft: '-51%',
    },
    button:{
      marginTop: 30,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });

export default ResetPasswordScreen
