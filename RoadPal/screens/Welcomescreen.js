import React from 'react'
import { Dimensions, ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const {height} = Dimensions.get("window");
const {width} = Dimensions.get("window");

const Welcomescreen = () => {

      const navigation = useNavigation();
      const onLogInPress = () => {
        //validate user

        navigation.navigate('LogIn');
    };

    const onSignUpPress = () => {
      navigation.navigate('SignUp');
    };

    return (
      <SafeAreaView style={styles.show} >

        <View style={styles.root}>
        <ImageBackground style={styles.image} resizeMode='contain'
        source={require("../assets/welcome3.jpg")}/>
       </View>

       <View  style={styles.root}>
       <Text style={styles.text_1}>Welcome to RoadPal</Text>
       <Text style={styles.text_2}>Get notifications about road signs and conditions in your area</Text>
       </View>

      <View style={styles.root_2}>
      <CustomButton  text="Get Started" onPress={onSignUpPress} type="W"/>
      <View style={{marginLeft:'7%'}}>
      <CustomButton  text="Already have an account? Login" onPress={onLogInPress} type='Tertiary'/>
      </View>
      
      </View>

       </SafeAreaView>
    
    )
  }

  const styles = StyleSheet.create({
    show:{
      backgroundColor: 'white',
      height: '100%',
    },
    root: {
      paddingHorizontal: 14,
      position: 'relative',
      top: -560,
      
    },
    image:{
      width: width,
      height: height,
      position: 'relative',
      top: 235,
      left: -15,
    },
    root_2:{
      paddingHorizontal: 14,
      position: 'relative',
      top: -450,
      left: '25%',
      
    },
    text_1:{
        fontSize: 44,
        color: 'black',
       
        textAlign: 'center',
    },

    text_2:{
      fontSize: 24,
      paddingTop: 14,
      color: 'grey',
     
      textAlign: 'center',
  },
  });

export default Welcomescreen
