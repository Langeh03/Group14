import React from 'react'
import { Dimensions, ImageBackground, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../custom/CustomButton';
import { useNavigation } from '@react-navigation/native';


const {height} = Dimensions.get("window");

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
      <SafeAreaView>
        <View style={styles.root}>
       
        <ImageBackground style={{height: height/2.5,}} resizeMode='contain'
        source={require("../assets/welcomescreen_image.jpg")}/>
       </View>

       <View  style={styles.root}>
       <Text style={styles.text_1}>Welcome to RoadPal</Text>
       <Text style={styles.text_2}>Where your safety is our primary concern</Text>
       </View>

      <View style={styles.root_2}>
      <CustomButton  text="Log In" onPress={onLogInPress} type="W"/>
      <CustomButton  text="Sign Up" onPress={onSignUpPress} type='W'/>
      </View>
      </SafeAreaView>
    
    )
  }

  const styles = StyleSheet.create({
    root: {
      paddingHorizontal: 14,
      paddingTop: 54,

    },
    root_2:{
      paddingHorizontal: 14,
      paddingTop: 34,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
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
