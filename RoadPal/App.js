import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, ImageBackground } from 'react-native';

const {height} = Dimensions.get("window")

export default function App() {
  return (
    <SafeAreaView>
       <View>
        <ImageBackground style ={{
          height: height/2.5,
        }}
         resizeMode = "contain"
         source = {require("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oEWVnE6j7lgv1oIlCrRrfm-eknOFcf4D1A&usqp=CAU")}/>
      <Text></Text>
     
    </View>
    </SafeAreaView>
   
  );
}

const styles = styleSheet.create{{}};



