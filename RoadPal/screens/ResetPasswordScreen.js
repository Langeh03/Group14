import React, {useState} from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, StatusBar } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';

const {width, height} = Dimensions.get('screen')

const ResetPasswordScreen = () => {

  const [comfirmpassword, setComfirmPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  
  const navigation = useNavigation();


  const onSubmitPress = () => {
    navigation.navigate('ComfirmPassword');
  }

  const onBackPress = () => {
    navigation.navigate('Validation');
  };

  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.show}>
        <View>
          <TouchableOpacity style={{marginTop: 40, alignItems: 'center', flexDirection: 'row'}}>
            <Icon name='arrow-back' type='ionicon' color='#000' size={30} onPress={onBackPress} />
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{"   "}Reset Password</Text>
          </TouchableOpacity>

          <Text style={{fontSize: 16, width: '100%', marginTop: 20, fontWeight: 'black', color: '#4D4C4C'}}>At least 8 characters, with uppercase and lowercase letters</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black', marginTop: 30, marginBottom: 20}}>Enter your new password</Text>
          <Text style={styles.input_text}>New Password</Text>
          <CustomInput placeholder="************" value={newpassword} setValue={setNewPassword} secureTextEntry={true} />
          <Text style={styles.input_text}>Comfirm Password</Text>
          <CustomInput  placeholder="************" value={comfirmpassword} setValue={setComfirmPassword} secureTextEntry={true} />
        
      
          <View style={styles.button}>
            <CustomButton  text="Reset Password" onPress={onSubmitPress} />
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
    height: '100%',
    marginHorizontal: 30
  },
    input_text:{
    fontSize: 16,
    fontWeight: 'black',
    color: 'black',
    marginTop: 10,
  },
  button:{
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ResetPasswordScreen
