import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './Components/LogInScreen';
import SignUpScreen from './Components/SignUpScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LogInScreen/> */}
      <SignUpScreen/>
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
