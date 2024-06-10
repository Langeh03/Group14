import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import Navigation from './Components/Navigation';

import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient 
        style={styles.container} 
        colors={["#FFFFFF", "#AAF0E5"]}
        start={[0.8, 0.1]}>
          <Text>Hello</Text>
        <Navigation/>
        <StatusBar style="auto" />
   </LinearGradient>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffff',
    // alignItems: 'center',
    // elevation: -5,
    
  },

});
