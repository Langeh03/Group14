import React, {useState} from 'react'
import { Text, View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onSignUpPress = () => {
        navigation.navigate('ConfirmEmail');
    };


    const onLogInPress = () => {
        navigation.navigate('LogIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.show} >
        <View style={styles.root}>
         <Text style={styles.title}>Create an Account</Text>
         <Text style={styles.mini}>Please enter your information below</Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.input_text}>Full Name</Text>
          <CustomInput placeholder="UserName" value={username} setValue={setUsername} />
          <Text style={styles.input_text}>Email</Text>
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <Text style={styles.input_text}>Password</Text>
          <CustomInput  placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
          <Text style={styles.input_text}>Confirm Password</Text>
          <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />
      </View>
  
          <View style={styles.button}>
              <CustomButton  text="Sign Up" onPress={onSignUpPress} />  
              <View style={styles.special}>
              <Text style={styles.special_2}>Already have an account?</Text>
              <CustomButton  text="Login" onPress={onLogInPress} type="Tertiary"/>
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
         fontWeight: '900',
         color: 'black',
         margin: 10,
         paddingTop: 90,
    },
    mini:{
      fontSize: 16,
      fontWeight: '300',
      color: 'black',
      alignItems: 'flex-start'
    },
    input:{
      marginTop: 20,
      marginLeft: '8%',

    },  
    input_text:{
      fontSize: 19,
      fontWeight: '300',
      color: 'black',
      
    },
    button:{
      marginTop: 40,
      alignItems: 'center',
    },
    special:{
      flexDirection: 'row',
      justifyContent:'space-around',
      marginTop: 35,
      position: 'relative',
      left: '24%',
    },
    special_2:{
      marginTop: 18,
      marginLeft: '10%',
      marginRight: '2%',
      fontSize: 19,
    },
  });

export default SignUpScreen
