import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Components/Navigation';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View  style={styles.container}>
      <Navigation />     
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    
});
