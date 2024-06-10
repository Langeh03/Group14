import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CustomSearchButton = () => {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#A9A9A9"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    shadowColor: "#828282",
  },
  icon: {
    marginRight: 10,
    color: "#828282",
  },
  input: {
    flex: 1,
    color: "black",
    fontSize: 16,
  },
});

export default CustomSearchButton;
