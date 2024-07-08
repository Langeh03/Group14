// components/SplashScreen.js
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import Logo from "../assets/Logo.png"; // Assuming Logo.png is in the assets folder

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 5000); // Change the timeout to 5000 milliseconds (5 seconds)

    // Clear the timer when the component unmounts or navigation changes
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="bounceIn"
        duration={1500}
        source={Logo}
        style={styles.icon}
      />
      <Animatable.Text animation="fadeInUp" duration={1500} style={styles.text}>
        RoadPal
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
  },
});

export default SplashScreen;
