import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import * as ImagePicker from "expo-image-picker";

const EditUserProfile = ({ route, navigation }) => {
  const { user, imageUrl } = route.params;

  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const handleSubmit = () => {
    Alert.alert(
      "Profile Updated",
      `Name: ${name}\nUsername: ${username}\nEmail: ${email}`
    );
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleChooseImage}
        style={styles.imageContainer}
      >
        <Image
          source={{ uri: selectedImage || imageUrl }}
          style={styles.avatar}
        />
        <Text style={styles.editImage}>Edit profile image</Text>
      </TouchableOpacity>
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
  imageContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  editImage: {
    fontSize: 18,
    fontWeight: "medium",
    color: "#35989D",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    width: 90,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});

export default EditUserProfile;
