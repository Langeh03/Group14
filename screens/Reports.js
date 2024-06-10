// screens/Reports.js

import React from "react";
import { View, Text, Button } from "react-native";
import CustomButton from "../components/CustomButton";

import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import CustomSearchButton from "../components/CustomSearchButton";
import ReportCard from "../components/ReportCard";

function Reports({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomSearchButton></CustomSearchButton>
      <ScrollView contentContainerStyle={styles.contentContainer} bounces={true}>
        <ReportCard
          imageSource="https://cdn.pixabay.com/photo/2020/01/20/02/25/nature-4779321_1280.jpg"
          title={"Road accident"}
          timestamp={"5 minutes ago"}
          location={"Buea, mayor street"}
        ></ReportCard>
        <ReportCard
          imageSource="https://cdn.pixabay.com/photo/2020/01/20/02/25/nature-4779321_1280.jpg"
          title={"Road work"}
          timestamp={"15 days ago"}
          location={"Yaounde, Mokolo"}
        ></ReportCard>
        <CustomButton
          title="Make route"
          onPress={() => navigation.navigate("MakeReport")}
        />
        <CustomButton
          title="User profile"
          onPress={() => navigation.navigate("UserProfile")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
        paddingTop: 60,
    // paddingBottom:20,
  },
  contentContainer: {
      paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginRight: 40,
  },
  input: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  messageBox: {
    height: 100,
    padding: 10,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#18776F",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: "center",
      justifyContent: "center",
   
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Reports;
