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
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
         <Text style={styles.title}>Create an Account</Text>
  
          <CustomInput placeholder="UserName" value={username} setValue={setUsername} />
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput  placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
          <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true} />
      
  
          <CustomButton  text="Sign Up" onPress={onSignUpPress} />
         
          <CustomButton  text="Have an account? Log In" onPress={onLogInPress} type="Tertiary"/>
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
