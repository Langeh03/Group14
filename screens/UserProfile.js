import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const UserProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual image URL or local asset
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.content}>John Doe</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Username</Text>
          <Text style={styles.content}>johndoe</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Email</Text>
          <Text style={styles.content}>john.doe@example.com</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => navigation.navigate("EditUserProfile")} // Navigate to EditUserProfile screen
      >
        <Text style={styles.editButtonText}>Edit Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32, // Fully rounded
    marginBottom: 20,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
  },
  editButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default UserProfile;
