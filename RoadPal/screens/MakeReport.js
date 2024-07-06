import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import CustomDropdown from "../components/CustomDropdown";
import { LinearGradient } from "expo-linear-gradient";
import CustomAppbar from "../components/CustomAppbar";

const MakeReport = ({ navigation }) => {
  // Simulated initial values
  const initialRegion = "South West";
  const initialTown = "Buea";
  const initialLocation = "Default Location";

  const [region, setRegion] = useState(initialRegion);
  const [town, setTown] = useState(initialTown);
  const [location, setLocation] = useState(initialLocation);
  const [feedback, setFeedback] = useState("");
  const [roadConditions, setRoadConditions] = useState([]);
  const [roadSigns, setRoadSigns] = useState([]);
  const [selectedReportType, setSelectedReportType] =
    useState("Select report type");
  const [selectedRoadCondition, setSelectedRoadCondition] =
    useState("Select an option");
  const [selectedRoadSign, setSelectedRoadSign] =
    useState("Select a road sign");

  // Simulate fetching road conditions and signs from an API
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        // Simulate API call
        const simulatedRoadConditions = [
          "Pothole",
          "Construction",
          "Flooded",
          "Debris",
          "Ice",
        ];
        const simulatedRoadSigns = [
          "Stop",
          "Yield",
          "Speed Limit",
          "No Entry",
          "One Way",
        ];
        setRoadConditions(simulatedRoadConditions);
        setRoadSigns(simulatedRoadSigns);
      } catch (error) {
        Alert.alert("Error fetching options:", error.message);
      }
    };

    fetchOptions();
  }, []);

  // Simulate form submission
  const handleSubmit = () => {
    if (
      !region ||
      !town ||
      !location ||
      !feedback ||
      selectedReportType === "Select report type" ||
      (selectedReportType === "Road Condition" &&
        (selectedRoadCondition === "Select an option" ||
          !selectedRoadCondition)) ||
      (selectedReportType === "Road Sign" &&
        (selectedRoadSign === "Select a road sign" || !selectedRoadSign))
    ) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      // Simulate form submission
      Alert.alert(
        "Submitted",
        `Region: ${region}\nTown: ${town}\nLocation: ${location}\nReport Type: ${selectedReportType}\nRoad Condition: ${selectedRoadCondition}\nRoad Sign: ${selectedRoadSign}\nFeedback: ${feedback}`
      );
      navigation.navigate("Reports");
    } catch (error) {
      Alert.alert("Error submitting report:", error.message);
    }
  };

  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <View style={styles.root}>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.title}>Report A Road Condition</Text>
            <TextInput
              style={styles.input}
              placeholder="Region"
              value={region}
              onChangeText={setRegion}
            />
            <TextInput
              style={styles.input}
              placeholder="Town"
              value={town}
              onChangeText={setTown}
            />
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
            />
            <CustomDropdown
              style={styles.dropdown}
              options={["Road Condition", "Road Sign"]}
              onSelect={(option) => setSelectedReportType(option)}
              selectedOption={selectedReportType}
            />
            {selectedReportType === "Road Condition" ? (
              <CustomDropdown
                style={styles.dropdown}
                options={roadConditions}
                onSelect={(option) => setSelectedRoadCondition(option)}
                selectedOption={selectedRoadCondition}
              />
            ) : selectedReportType === "Road Sign" ? (
              <CustomDropdown
                style={styles.dropdown}
                options={roadSigns}
                onSelect={(option) => setSelectedRoadSign(option)}
                selectedOption={selectedRoadSign}
              />
            ) : null}
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
    height: "100%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginRight: 40,
    marginTop: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  dropdown: {
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
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
