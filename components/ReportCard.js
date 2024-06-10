import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

// const { width } = Dimensions.get("window");

const ReportCard = ({ imageSource, title, timestamp, location }) => {
  return (
    <View style={styles.ReportCardContainer}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ReportCardContainer: {
    height: 230,
    // width: width - 40, // Full width with some padding
    // backgroundColor: "#fff",
    borderRadius: 20,
    // padding: 10,
    shadowColor: "#000",
    // shadowOpacity: 0.1,
    shadowRadius: 10,
    // elevation: 5,
    margin: 5,
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
    paddingLeft: 10,
  },
  timestamp: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    paddingLeft: 10,
  },
  location: {
    fontSize: 14,
    color: "#333",
    paddingLeft: 10,
  },
});

export default ReportCard;
