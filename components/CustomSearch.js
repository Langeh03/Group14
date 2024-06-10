import React, { useRef } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const CustomSearch = ({ onPress }) => {
  const textInputRef = useRef(null);

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      textInputRef.current.focus();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="black" style={styles.icon} />
        <TextInput
          ref={textInputRef}
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#A9A9A9"
        />
      </View>
    </TouchableOpacity>
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

export default CustomSearch;
