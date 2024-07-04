import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon library

const ReportCard = ({ imageSource, title, timestamp, location }) => {
  return (
    <View style={styles.reportCardContainer}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
          <Icon
            name="access-time"
            size={20}
            color="#35989D"
            style={styles.icon}
          />
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="place" size={20} color="#35989D" style={styles.icon} />
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reportCardContainer: {
    height: 230,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#ccc",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    margin: 5,
    // padding: 10, // Add padding to the container
  },

  contentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  image: {
    height: 128,
    width: "100%",
    borderRadius: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  icon: {
    marginRight: 5,
  },
  timestamp: {
    fontSize: 16,
    color: "#333",
  },
  location: {
    fontSize: 14,
    color: "#333",
  },
});

export default ReportCard;
