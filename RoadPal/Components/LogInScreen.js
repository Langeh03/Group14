import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import { useNavigation } from '@react-navigation/native'; 
import Logo from '../assets/Logo.png'



const LogInScreen = () => {
    const [email, setEmail] = useState('');
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
         <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' /> 

       <Text style={styles.title}>RoadPal</Text>

       <View style={styles.container}>
        <Text style={styles.title_2}>Login</Text>
        <Text style={styles.text}>Please login to continue</Text>
       </View>

        <View style={styles.container_2}>
        <Text style={styles.input_text}>Email</Text>
        <CustomInput placeholder="email@gmail.com" value={email} setValue={setEmail} />
        <Text style={styles.input_text}>Password</Text>
        <CustomInput  placeholder="Password" value={password} setValue={setPassword}secureTextEntry={true} />
        </View>
    
        <View style={styles.container_3}>
        <CustomButton  text="Log In" onPress={onLogInPress} />

        <CustomButton  text="Forgot password" onPress={onForgotPasswordPress} type="Tertiary"/>
        
           <View style={styles.special}>
              <Text style={styles.special_2}>Don't have an account?</Text>
              <CustomButton  text="Create one" onPress={onSignUpPress} type="Tertiary"/>
            </View>  
        </View>
       
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
      fontSize: 28,
      fontWeight: '900',
      marginTop: -40,
    },
    logo:{
      width: 174,
      height: 174,
    },
    container:{
      marginTop: 20,
      marginLeft: -160,
    }, 
    container_2:{
      marginTop: 40,  
    }, 
    container_3:{
      marginTop: 30,  
      marginLeft: 110,
    }, 
    title_2:{
      fontSize: 34,
      fontWeight: '900',
    },
    text:{
      fontSize: 16,
      fontWeight: '300',
    },
    input_text:{
      fontSize: 19,
      fontWeight: '300',
      color: 'black', 
    },
    special:{
      marginTop: 18,
      flexDirection: 'row',
      justifyContent:'space-around',
    },
    special_2:{
      marginTop: 17.5,
      marginLeft: -75,
      marginRight: -30,
      fontSize: 19,
    },
  });

  export default LogInScreen

