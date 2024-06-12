// screens/UserProfile.js

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomAppbar from "../components/CustomAppbar";

const UserProfile = ({ navigation }) => {
  const user = {
    name: "Jonny",
    username: "john Austin Doe",
    email: "johnadoe@example.com",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/06/23/11/23/ai-generated-8083323_1280.jpg",
    // imageUrl: "", // Uncomment this line to test the fallback image
  };

  const defaultImage = "https://via.placeholder.com/100"; // Replace with your default image URL

  return (
      
          <View style={styles.root}>
        <CustomAppbar
          leadingIcon="arrow-back"
          onLeadingPress={() => navigation.goBack()}
          title="User profile"
          endElements={<></>}
        />
        <View style={styles.container}>
          <Image
            source={{
              uri: user.imageUrl ? user.imageUrl : defaultImage,
            }}
            style={styles.avatar}
            onError={() => (user.imageUrl = defaultImage)} // Fallback to default image if there's an error
          />
          <View style={styles.infoContainer}>
            <View style={styles.row}>
              <Text style={styles.title}>Name</Text>
              <Text style={styles.content}>{user.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Username</Text>
              <Text style={styles.content}>{user.username}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Email</Text>
              <Text style={styles.content}>{user.email}</Text>
            </View>
          </View>
          {/* <CustomButton
            title="Edit Profile"
                  onPress={() => navigation.navigate("EditUserProfile", { user, uri })}
          /> */}
        
          <CustomButton
            title="Edit Profile"
            onPress={() =>
              navigation.navigate("EditUserProfile", {
                user,
                imageUrl: user.imageUrl,
              })
            }
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,backgroundColor: "#f5f5f5",
    },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    padding: 20,
  }, 
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 40,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    width: 100,
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
  },
});

export default UserProfile;
