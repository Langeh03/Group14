// import React from "react";
// import { View, Text, Image,  } from "react-native";
// import CustomButton from "../components/CustomButton";

// import {
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from "react-native";

// const UserProfile = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={{
//           uri: "https://images.pexels.com/photos/1599930/pexels-photo-1599930.jpeg?cs=srgb&dl=man-profile-1599930.jpg&fm=jpg",
//         }} // Replace with actual image URL or local asset
//         style={styles.avatar}
//       />
//       <View style={styles.infoContainer}>
//         <View style={styles.row}>
//           <Text style={styles.title}>Name</Text>
//           <Text style={styles.content}>Jonny</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.title}>Username</Text>
//           <Text style={styles.content}>john Austin Doe</Text>
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.title}>Email</Text>
//           <Text style={styles.content}>johnadoe@example.com</Text>
//         </View>
//       </View>
      
//         <CustomButton
//           title="User profile"
//           onPress={() => navigation.navigate("EditUserProfile")}
//         />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5f5f5",
//     padding: 20,
//   },
//   avatar: {
//     // width: 64,
//     // height: 64,
//       // borderRadius: 32, // Fully rounded
//       width: 100, 
//       height: 100, 
//       borderRadius: 50,
//     marginBottom: 40,
//   },
//   infoContainer: {
//     width: "100%",
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: "row",
//       // justifyContent: "space-between",
//       justifyContent: "flex-start",
//     paddingVertical: 10,
//     // borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//     marginBottom: 10,
//   },
//     title: {
//         width: 100,
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//     content: {
      
//     fontSize: 16,
//   },
// });

// export default UserProfile;






import React from "react";
import { View, Text, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import { StyleSheet } from "react-native";

const UserProfile = ({ navigation }) => {
  const user = {
    name: "Jonny",
    username: "john Austin Doe",
    email: "johnadoe@example.com",
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/1599930/pexels-photo-1599930.jpeg?cs=srgb&dl=man-profile-1599930.jpg&fm=jpg",
        }} // Replace with actual image URL or local asset
        style={styles.avatar}
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

      <CustomButton
        title="Edit Profile"
        onPress={() => navigation.navigate("EditUserProfile", { user })}
      />
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
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 40,
  },
  infoContainer: {
    width: "100%",
    marginBottom: 20,
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
