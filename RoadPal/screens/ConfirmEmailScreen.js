import React, {useState} from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    const [code, setCode] = useState('');
   
    const navigation = useNavigation();


    const onConfirmPress = () => {
        navigation.navigate('HomeScreen');
    };

    const onResendPress = () => {
        console.warn("Check your email");
    }
    
    const onLogInPress = () => {
        navigation.navigate('LogIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.show}>
        <View style={styles.root}>
         <Text style={styles.title}>Confirm your email</Text>
  
          <Text style={styles.input_text}>Enter confirmation code</Text>
          <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />
       

      
            <View style={styles.special}>
            <CustomButton  text="Confirm" onPress={onConfirmPress} />
            </View>
          
         
         <View style={styles.root_2}>
         <CustomButton  text="Resend Code" onPress={onResendPress} type="Secondary"/>
         <CustomButton  text="Back to Log in" onPress={onLogInPress} type="Secondary"/>
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
         fontWeight: 'bold',
         color: 'black',
         marginTop: 100,
    },
    input_text:{
        fontSize: 19,
        fontWeight: '300',
        color: 'black',
        marginTop: 30,
        marginLeft: '-40%',
      },
    root_2:{
        paddingHorizontal: 14,
        paddingTop: 34,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: -23,
      },
      special:{
        marginTop: 25,
      }
  });

export default ConfirmEmailScreen
