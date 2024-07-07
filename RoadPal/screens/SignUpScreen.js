import React, {useState} from 'react'
import { Text, View, StyleSheet, ScrollView, Platform, StatusBar, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/LoadingOverlay';


const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEmail(enteredValue);
      break;
      case 'password':
        setPassword(enteredValue);
      break;
      case 'confirmPassword':
        setPasswordRepeat(enteredValue);
      break;
    }
  }

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler() {
    setIsAuthenticating(true)
    try {
      await createUser(email, password)
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not create user, please check your input or try again later!'
      )
      setIsAuthenticating(false)
    }

    if (isAuthenticating) {
      return <LoadingOverlay />
    }

    setUsername('')
    setEmail('')
    setPassword('')
    setPasswordRepeat('')
  }

  function submitHandler() {
    const emailIsValid = email.includes('@gmail.com');
    const passwordIsValid = password.length > 7;
    const passwordsAreEqual = password == passwordRepeat;

    if ( !emailIsValid || !passwordIsValid || !passwordsAreEqual ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      return;
    }
    signUpHandler()
  }

  const onLogInPress = () => {
    navigation.navigate('LogIn');
  };

  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.show} >
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.mini}>Please enter your information below</Text>

        <View style={styles.input}>
          <Text style={styles.input_text}>Full Name</Text>
          <CustomInput placeholder="UserName" value={username} setValue={setUsername} />
          <Text style={styles.input_text}>Email</Text>
          <CustomInput placeholder="email@gmail.com" value={email} setValue={updateInputValueHandler.bind(this, 'email')} />
          <Text style={styles.input_text}>Password</Text>
          <CustomInput  placeholder="***********" value={password} setValue={updateInputValueHandler.bind(this, 'password')} secureTextEntry={true} />
          <Text style={styles.input_text}>Confirm Password</Text>
          <CustomInput placeholder="***********" value={passwordRepeat} setValue={updateInputValueHandler.bind(this, 'confirmPassword')} secureTextEntry={true} />
        </View>

        <View style={styles.button}>
          <CustomButton  text="Sign Up" onPress={submitHandler} />  
          <View style={styles.special}>
            <Text style={styles.special_2}>Already have an account?</Text>
            <CustomButton  text="Login" onPress={onLogInPress} type="Tertiary"/>
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
    height: '100%',
    marginHorizontal: 30
  },
  title:{
    fontSize: 35,
    fontWeight: '900',
    color: 'black',
    marginTop: 70,
  },
  mini:{
    fontSize: 16,
    fontWeight: '300',
    color: 'black',
  },
  input:{
    marginTop: 20,
  },  
  input_text:{
    fontSize: 16,
    fontWeight: 'black',
    color: 'black',
  },
  button:{
    marginVertical: 40,
    alignItems: 'center',
  },
  special:{
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  special_2:{
    fontSize: 19,
  },
});

export default SignUpScreen
