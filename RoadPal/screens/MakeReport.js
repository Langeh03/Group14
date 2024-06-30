import React, { useState } from "react";
import CustomDropdown from "../components/CustomDropdown";
import { LinearGradient } from 'expo-linear-gradient'
import CustomAppbar from "../components/CustomAppbar";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const MakeReport = ({ navigation }) => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [feedback, setFeedback] = useState("");

  // Options for road conditions
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const handleSubmit = () => {
    Alert.alert(
      "Submitted",
      `Field 1: ${field1}\nField 2: ${field2}\nField 3: ${field3}\nRoad Condition: ${selectedOption}\nFeedback: ${feedback}`
    );
    navigation.navigate("Reports");
  };

    return (
      <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
        <View style={styles.root}>
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer} >
              <Text style={styles.title}>Report A Road Condition</Text>
              <TextInput
                style={styles.input}
                placeholder="Region"
                value={field1}
                onChangeText={setField1}
              />
              <TextInput
                style={styles.input}
                placeholder="Town"
                value={field2}
                onChangeText={setField2}
              />
              <TextInput
                style={styles.input}
                placeholder="Location"
                value={field3}
                onChangeText={setField3}
              />
              <CustomDropdown
                style={styles.input}
                options={options}
                onSelect={(option) => setSelectedOption(option)}
                selectedOption={selectedOption}
              />
              <TextInput
                style={[styles.input, styles.messageBox]}
                placeholder="Add details"
                value={feedback}
                onChangeText={setFeedback}
                multiline
                numberOfLines={4}
              />
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </LinearGradient>
    );
};

const styles = StyleSheet.create({
  home: {
    height: '100%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    
    paddingHorizontal: 20,
        paddingTop: 20,
    
    },
    root: {
        flex: 1,backgroundColor: "#fff",
    },
  contentContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,marginRight: 40, marginTop: 30,
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
    height: 120,
    padding: 10,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#18776F",
      paddingVertical: 15,
    marginTop: 20,
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

export default MakeReport;
