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
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { firebase } from "../firebaseConfig";

const MakeReport = ({ navigation }) => {
  const initialRegion = {
    latitude: 4.1597,
    longitude: 9.2566,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [region, setRegion] = useState(initialRegion);
  const [town, setTown] = useState("Buea");
  const [location, setLocation] = useState("");
  const [marker, setMarker] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [selectedReportType, setSelectedReportType] = useState("Select report type");
  const [selectedRoadCondition, setSelectedRoadCondition] = useState("Select an option");
  const [selectedRoadSign, setSelectedRoadSign] = useState("Select a road sign");
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);
  const [roadstates, setRoadStates] = useState([]);
  const [roadsigns, setRoadSigns] = useState([]);

  useEffect(() => {
    const roadstateRef = firebase.firestore().collection("roadstates");
    const roadsignRef = firebase.firestore().collection("roadsigns");

    const fetchRoadStates = async () => {
      try {
        roadstateRef.onSnapshot((querySnapshot) => {
          const fetchedRoadStates = [];
          querySnapshot.forEach((doc) => {
            const { name } = doc.data();
            fetchedRoadStates.push({ id: doc.id, name });
          });
          setRoadStates(fetchedRoadStates);
        });
      } catch (error) {
        Alert.alert(error);
      }
    };

    const fetchRoadSigns = async () => {
      try {
        roadsignRef.onSnapshot((querySnapshot) => {
          const fetchedRoadSigns = [];
          querySnapshot.forEach((doc) => {
            const { name } = doc.data();
            fetchedRoadSigns.push({ id: doc.id, name });
          });
          setRoadSigns(fetchedRoadSigns);
        });
      } catch (error) {
        alert(error);
      }
    };

    const fetchOptions = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setMarker({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setLocation(`${location.coords.latitude}, ${location.coords.longitude}`);
      } catch (error) {
        Alert.alert("Error fetching options or location:", error.message);
      }
    };

    fetchRoadStates();
    fetchRoadSigns();
    fetchOptions();
  }, []);

  const handleMapPress = (event) => {
    if (!useCurrentLocation) {
      setMarker(event.nativeEvent.coordinate);
      setLocation(
        `${event.nativeEvent.coordinate.latitude}, ${event.nativeEvent.coordinate.longitude}`
      );
    }
  };

  const handleUseCurrentLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setMarker({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation(`${location.coords.latitude}, ${location.coords.longitude}`);
      setUseCurrentLocation(true);
    } catch (error) {
      Alert.alert("Error getting current location:", error.message);
    }
  };

  const handleUseCustomLocation = () => {
    setUseCurrentLocation(false);
  };

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
      Alert.alert(
        "Submitted",
        `Region: ${region.latitude}, ${region.longitude}\nTown: ${town}\nLocation: ${location}\nReport Type: ${selectedReportType}\nRoad Condition: ${selectedRoadCondition}\nRoad Sign: ${selectedRoadSign}\nFeedback: ${feedback}`
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
              placeholder="Town"
              value={town}
              onChangeText={setTown}
            />
            <View style={styles.locationButtonsContainer}>
              <TouchableOpacity
                style={[
                  styles.locationButton,
                  useCurrentLocation && styles.activeLocationButton,
                ]}
                onPress={handleUseCurrentLocation}
              >
                <Text
                  style={[
                    styles.locationButtonText,
                    useCurrentLocation && styles.activeLocationButtonText,
                  ]}
                >
                  Use Current Location
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.locationButton,
                  !useCurrentLocation && styles.activeLocationButton,
                ]}
                onPress={handleUseCustomLocation}
              >
                <Text
                  style={[
                    styles.locationButtonText,
                    !useCurrentLocation && styles.activeLocationButtonText,
                  ]}
                >
                  Choose Custom Location
                </Text>
              </TouchableOpacity>
            </View>
            <MapView
              style={styles.map}
              region={region}
              onPress={handleMapPress}
            >
              {marker && <Marker coordinate={marker} />}
            </MapView>
            <CustomDropdown
              style={styles.dropdown}
              options={["Road State", "Road Sign"]}
              onSelect={(option) => setSelectedReportType(option)}
              selectedOption={selectedReportType}
            />
            {selectedReportType === "Road Condition" ? (
              <CustomDropdown
                style={styles.dropdown}
                options={roadstates.map((state) => state.name)}
                onSelect={(option) => setSelectedRoadCondition(option)}
                selectedOption={selectedRoadCondition}
              />
            ) : selectedReportType === "Road Sign" ? (
              <CustomDropdown
                style={styles.dropdown}
                options={roadsigns.map((sign) => sign.name)}
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
  map: {
    height: 300,
    marginBottom: 15,
    borderRadius: 10,
  },
  locationButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  locationButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  locationButtonText: {
    color: "#333",
  },
  activeLocationButton: {
    backgroundColor: "#18776F",
  },
  activeLocationButtonText: {
    color: "#fff",
  },
});

export default MakeReport;
