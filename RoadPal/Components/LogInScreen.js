import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import { useNavigation } from '@react-navigation/native';
// import Logo from '../assets/frame.svg'



const LogInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onLogInPress = () => {
       //validate user

       navigation.navigate('HomeScreen');
    };

    const onForgotPasswordPress = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
      navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* <Image source={} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> */}

      

        <CustomInput placeholder="UserName" value={username} setValue={setUsername} />
        <CustomInput  placeholder="Password" value={password} setValue={setPassword}secureTextEntry={true} />
    

        <CustomButton  text="Log In" onPress={onLogInPress} />
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

