import React, {useState} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {

     const [email, setEmail] = useState('');
   
    const navigation = useNavigation();

    const onSendPress = () => {
        navigation.navigate('ResetPassword');
    };

    
    const onLogInPress = () => {
        navigation.navigate('LogIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.show}>
        <View style={styles.root}>
         <Text style={styles.title}>Forgot Password</Text>
  

         <Text style={styles.input_text}>Email</Text>
         <CustomInput placeholder="Email" value={email} setValue={setEmail} />
       

      
        <View style={styles.button}>
        <CustomButton  text="Send" onPress={onSendPress} />
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
    },
    input_text:{
      fontSize: 19,
      fontWeight: '300',
      color: 'black',
      marginTop: 40,
      marginLeft: '-79%',
    },
    button:{
      marginTop: 30,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

export default ForgotPasswordScreen
