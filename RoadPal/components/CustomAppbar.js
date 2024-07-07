import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomAppbar = ({ leadingIcon, onLeadingPress, title, endElements }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeadingPress} style={styles.leadingIcon}>
        <Ionicons name={leadingIcon} size={24} color="#000" />
      </TouchableOpacity>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.endElements}>{endElements}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
        paddingTop: 40,
    paddingBottom:15,
    // backgroundColor: "#fff",
    // elevation: 4,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
  },
  leadingIcon: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
    endElements: {
      width: 24,
      paddingHorizontal:25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default CustomAppbar;
