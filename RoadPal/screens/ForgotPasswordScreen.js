import React, {useState} from 'react'
import { Text, View, StyleSheet, ScrollView, Platform, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements'

const {width, height} = Dimensions.get('screen')

const ForgotPasswordScreen = () => {

    const [email, setEmail] = useState('');
   
    const navigation = useNavigation();

    const onSendPress = () => {
      navigation.navigate('Validation');
    };

    const onBackPress = () => {
      navigation.navigate('LogIn');
    };

    return (
      <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.show}>
          <View>
            <TouchableOpacity style={{marginTop: 40, alignItems: 'flex-start', flexDirection: 'row'}}>
              <Icon name='arrow-back' type='ionicon' color='#000' size={30} onPress={onBackPress} />
              <Text style={{fontSize: 22, fontWeight: 'bold'}}>{"   "}Forgot Password</Text>
            </TouchableOpacity>

            <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
              <View style={{flex: 1, alignItems: 'center', backgroundColor: "#27A28E", borderRadius: 50, width: 100, height: 100, paddingVertical: 15}}>
                <Icon name='lock-closed' type='ionicon' color='#071619' size={60}/>
              </View>
            </View>
      
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black', marginTop: 40, marginBottom: 20}}>Input your email address</Text>
            <Text style={styles.input_text}>Email Address</Text>
            <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          
            <View style={styles.button}>
              <CustomButton  text="Send" onPress={onSendPress} />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    )
  }

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
      fontSize: 16,
      fontWeight: 'black',
      color: 'black',
      marginTop: 15,
    },
    button:{
      marginTop: 30,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

export default ForgotPasswordScreen
