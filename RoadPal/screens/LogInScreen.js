import React, {useContext, useState} from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Platform, StatusBar, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native'; 
import Logo from '../assets/Logo.png'
import { LinearGradient } from 'expo-linear-gradient';
import { loginUser } from '../util/auth';
import LoadingOverlay from '../components/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

const LogInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const authCtx = useContext(AuthContext);

    function updateInputValueHandler(inputType, enteredValue) {
      switch (inputType) {
        case 'email':
          setEmail(enteredValue);
        break;
        case 'password':
          setPassword(enteredValue);
        break;
      }
    }

    const [isAuthenticating, setIsAuthenticating] = useState(false);
  
    async function signInHandler() {
      setIsAuthenticating(true)
      try {
        const  token = await loginUser(email, password)
        authCtx.authenticate(token)
      } catch (error){
        Alert.alert(
          'Authentication failed!',
          'Could not log you in. Please check your credentials or try again later!'
        )
        setIsAuthenticating(false)
      }
  
      if (isAuthenticating) {
        return <LoadingOverlay />
      }

      setEmail('')
      setPassword('')
    }
  
    function submitHandler(){
      const emailIsValid = email.includes('@gmail.com');
      const passwordIsValid = password.length > 7;
  
      if ( !emailIsValid || !passwordIsValid ) {
        Alert.alert('Invalid input', 'Please check your entered credentials.');
        return;
      }
      signInHandler()
    }

    const onForgotPasswordPress = () => { 
      navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
      navigation.navigate('SignUp');
    }

    return (
      <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.show}>
          <View style={styles.root}>

            <View style={{flex: 1, alignItems: "center", marginTop: 50}}>
              <Image source={Logo} style={styles.logo} resizeMode='contain' />
              <Text style={styles.title}>RoadPal</Text>
            </View>

            <View style={styles.container}>
              <Text style={styles.title_2}>Login</Text>
              <Text style={styles.text}>Please login to continue.</Text>
            </View>

            <View style={styles.container_2}>
              <Text style={styles.input_text}>Email Address</Text>
              <CustomInput placeholder="email@gmail.com" value={email} setValue={updateInputValueHandler.bind(this, 'email')} />
              <Text style={styles.input_text}>Password</Text>
              <CustomInput  placeholder="*********" value={password} setValue={updateInputValueHandler.bind(this, 'password')}secureTextEntry={true} />
            </View>
        
            <View style={styles.container_3}>
              <CustomButton text="Log In" onPress={submitHandler} />
              <CustomButton text="Forgot password?" onPress={onForgotPasswordPress} type="Tertiary"/>
              <View style={styles.special}>
                <Text style={styles.special_2}>Don't have an account?</Text>
                <CustomButton  text="SignUp" onPress={onSignUpPress} type="Tertiary"/>
              </View>  
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    )
  }


  const styles = StyleSheet.create({
    home: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    show:{
      marginHorizontal: 30,
      height: '100%',
    },
    logo:{
      width: 130, 
      height: 130, 
      resizeMode: 'contain'
    },
    title:{
      fontSize: 30,
      fontWeight: '900',
    },
    container:{
      marginTop: 10,
    },  
    title_2:{
      fontSize: 35,
      fontWeight: '900',
    },
    text:{
      fontSize: 16,
      fontWeight: '300',
    },
    container_2:{
      marginTop: 30,  
    },
    input_text:{
      fontSize: 16,
      fontWeight: 'black',
    },
    container_3:{
      marginTop: 20,
      flex: 1,
      alignItems: 'center'
    },
    special:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: -15
    },
    special_2:{
      fontSize: 17,
    },
  });

  export default LogInScreen

