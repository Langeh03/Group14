import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LogInScreen from '../screens/LogInScreen'
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import BottomNavigation from '../BottomNavigation';
import Welcomescreen from '../screens/Welcomescreen';
import Validation from '../screens/Validation';
import ComfirmPasswordReset from '../screens/ComfirmPasswordReset';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcomescreen" component={Welcomescreen} />  
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name="Validation" component={Validation} />
          <Stack.Screen name="ComfirmPassword" component={ComfirmPasswordReset} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }; 


export default Navigation
