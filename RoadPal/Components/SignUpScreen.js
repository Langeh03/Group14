import React, {useState} from 'react'
import { Text, View, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';

const SignUpScreen = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');


    const onSignInPress = () => {
        console.warn("sign in");
    }

    const onForgotPasswordPress = () => {
        console.warn("sign in");
    }

    const onSignUpPress = () => {
        console.warn("sign in");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
         <Text style={styles.title}>Create an Account</Text>
  
          <CustomInput placeholder="UserName" value={username} setValue={setUsername} />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput  placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
          <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />
      
  
          <CustomButton  text="Sign In" onPress={onSignInPress} />
          <CustomButton  text="Forgot password" onPress={onForgotPasswordPress} type="Tertiary"/>
          <CustomButton  text="Don't have an account? Create one" onPress={onSignUpPress} type="Tertiary"/>
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

export default SignUpScreen
