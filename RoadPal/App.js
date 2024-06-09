import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './Components/LogInScreen';
import SignUpScreen from './Components/SignUpScreen';
import ConfirmEmailScreen from './Components/ConfirmEmailScreen';
import ForgotPasswordScreen from './Components/ForgotPasswordScreen';
import ResetPasswordScreen from './Components/ResetPasswordScreen';
import Navigation from './Components/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LogInScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <ConfirmEmailScreen/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <ResetPasswordScreen/> */}
      <Navigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',

  },
});
