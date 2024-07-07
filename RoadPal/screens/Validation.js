import { Dimensions, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from 'react-native-elements'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import OTPTextInput from 'react-native-otp-textinput'

const {width, height} = Dimensions.get('screen')

const Validation = () => {
   
    const navigation = useNavigation();

    const onSendPress = () => {
      navigation.navigate('ResetPassword');
    };

    const onBackPress = () => {
      navigation.navigate('ForgotPassword');
    };

  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.show}>
            <View>
                <TouchableOpacity style={{marginTop: 40, alignItems: 'center', flexDirection: 'row'}}>
                    <Icon name='arrow-back' type='ionicon' color='#000' size={30} onPress={onBackPress} />
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>{"   "}Verification</Text>
                </TouchableOpacity>
        
                <Text style={{fontSize: 16, width: '100%', marginTop: 20, fontWeight: 'black', color: '#4D4C4C'}}>We sent you a code to verify your</Text>
                <Text style={{fontSize: 16, width: '100%', fontWeight: 'black', color: '#4D4C4C'}}>email.</Text>
                <Text style={styles.input_text}>Enter your OTP code here</Text>
                <OTPTextInput
                    textInputStyle={{
                        borderWidth: 1,
                        borderBottomWidth: 1,
                        borderRadius: 10,
                        backgroundColor: '#F9F9F9'
                    }} 
                    offTintColor={'transparent'}
                />
            
                <View style={styles.button}>
                    <CustomButton  text="Continue" onPress={onSendPress} />
                    <Text style={{fontSize: 16, marginTop: 20, fontWeight: 'black', color: '#4D4C4C'}}>Didn't receive a code?</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize: 18, marginTop: 5, fontWeight: 'bold', color: '#35989D'}}>Resend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </LinearGradient>
  )
}

export default Validation

const styles = StyleSheet.create({
    home: {
        height: height,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    show:{
        marginHorizontal: 30,
        height: '100%',
    },
    input_text:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 30,
        marginBottom: 20
    },
    button:{
        marginTop: 30,
        alignItems: 'center',
    },
})