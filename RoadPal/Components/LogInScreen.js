import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import logo from '../assets/logo.jpg';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';



const LogInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

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
        <Image source={logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' />

        <CustomInput placeholder="UserName" value={username} setValue={setUsername} />
        <CustomInput  placeholder="Password" value={password} setValue={setPassword}secureTextEntry={true} />
    

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
    logo:{
         width: '100%',
         maxWidth: 500,
         maxHeight: 300,

    },
  });

  export default LogInScreen

