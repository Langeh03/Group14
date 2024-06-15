import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress, style, textStyle }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
    <Text style={[styles.buttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      width: 240,
    backgroundColor: "#18776F",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
        justifyContent: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
