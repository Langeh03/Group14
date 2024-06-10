import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, StyleSheet, Alert } from "react-native";
import CustomButton from "../components/CustomButton";

const EditUserProfile = ({ route, navigation }) => {
  const { user } = route.params;

  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = () => {
    Alert.alert(
      "Profile Updated",
      `Name: ${name}\nUsername: ${username}\nEmail: ${email}`
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1599930/pexels-photo-1599930.jpeg?cs=srgb&dl=man-profile-1599930.jpg&fm=jpg",
        }} // Replace with actual image URL or local asset
        style={styles.avatar}
      />
      <Text style={styles.editImage}>Edit profile image</Text>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
      </View>
      <CustomButton title="Done" onPress={handleSubmit} />
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
  editImage: {
    fontSize: 18,
    fontWeight: "medium",
    color: "#35989D",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    width: 90,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});

export default EditUserProfile;
