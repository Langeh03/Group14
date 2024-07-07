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
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { firebase } from "../config";

const MakeReport = ({ navigation }) => {
  const initialRegion = {
    latitude: 4.1597,
    longitude: 9.2566,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [region, setRegion] = useState(initialRegion);
  const [town, setTown] = useState("");
  const [locality, setLocality] = useState("");
  const [feedback, setFeedback] = useState("");
  const [selectedReportType, setSelectedReportType] =
    useState("Select report type");
  const [selectedRoadCondition, setSelectedRoadCondition] =
    useState("Select an option");
  const [selectedRoadSign, setSelectedRoadSign] =
    useState("Select a road sign");
  const [useCurrentLocation, setUseCurrentLocation] = useState(true);
  const [roadstates, setRoadStates] = useState([]);
  const [roadsigns, setRoadSigns] = useState([]);
  const [marker, setMarker] = useState(null);

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
        Alert.alert(error.message);
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
        alert(error.message);
      }
    };

    const fetchLocation = async () => {
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
      } catch (error) {
        Alert.alert("Error fetching your location:", error.message);
      }
    };

    fetchRoadStates();
    fetchRoadSigns();
    fetchLocation();
  }, []);

  const handleMapPress = (event) => {
    if (!useCurrentLocation) {
      setMarker(event.nativeEvent.coordinate);
    }
  };

  const handleUseCurrentLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setMarker({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setUseCurrentLocation(true);
      Alert.alert(
        "Current Location",
        `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`
      );
    } catch (error) {
      Alert.alert("Error getting current location:", error.message);
    }
  };

  const handleUseCustomLocation = () => {
    setUseCurrentLocation(false);
  };

  const confirmCustomLocation = () => {
    if (marker) {
      setRegion({
        latitude: marker.latitude,
        longitude: marker.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      Alert.alert(
        "Custom Location Set",
        `Latitude: ${marker.latitude}, Longitude: ${marker.longitude}`
      );
    } else {
      Alert.alert("Error", "Please set a marker on the map.");
    }
  };

  const handleSubmit = () => {
    if (
      !region ||
      !town ||
      !locality ||
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

    // Prepare data to be submitted to Firestore
    const reportData = {
      region: {
        latitude: region.latitude,
        longitude: region.longitude,
      },
      town,
      locality,
      feedback,
      roadCondition:
        selectedReportType === "Road Condition" ? selectedRoadCondition : null,
      roadSign: selectedReportType === "Road Sign" ? selectedRoadSign : null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };

    // Display confirmation alert to the user
    Alert.alert(
      "Confirm Submission",
      `Region: ${region.latitude}, ${
        region.longitude
      }\nTown: ${town}\nLocality: ${locality}\nReport Type: ${selectedReportType}\nRoad Condition: ${
        selectedReportType === "Road Condition" ? selectedRoadCondition : "N/A"
      }\nRoad Sign: ${
        selectedReportType === "Road Sign" ? selectedRoadSign : "N/A"
      }\nFeedback: ${feedback}`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            try {
              // Submit report data to Firestore
              await firebase.firestore().collection("reports").add(reportData);
              Alert.alert("Success", "Report submitted successfully.");
              navigation.navigate("Reports");
            } catch (error) {
              Alert.alert("Error submitting report:", error.message);
            }
          },
        },
      ],
      { cancelable: false }
    );
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
              placeholder="Town, example Buea"
              value={town}
              onChangeText={setTown}
            />
            <TextInput
              style={styles.input}
              placeholder="Locality, example Molyko"
              value={locality}
              onChangeText={setLocality}
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
            {!useCurrentLocation && (
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={confirmCustomLocation}
              >
                <Text style={styles.confirmButtonText}>
                  Confirm Marker Location
                </Text>
              </TouchableOpacity>
            )}
            <CustomDropdown
              style={styles.dropdown}
              options={["Road Condition", "Road Sign"]}
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
              style={[styles.input, { height: 100 }]}
              placeholder="Additional Feedback"
              value={feedback}
              onChangeText={setFeedback}
              multiline
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    width: "90%",
  },
  contentContainer: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#18776F",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  locationButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  locationButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
  },
  activeLocationButton: {
    backgroundColor: "#18776F",
  },
  locationButtonText: {
    color: "#000",
  },
  activeLocationButtonText: {
    color: "#FFF",
  },
  map: {
    height: 300,
    width: "100%",
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: "#18776F",
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  dropdown: {
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: "#18776F",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MakeReport;

// import React, { useState } from "react";
// import CustomDropdown from "../components/CustomDropdown";
// import { LinearGradient } from 'expo-linear-gradient'
// import CustomAppbar from "../components/CustomAppbar";
// import firestore from "@react-native-firebase/firestore";

// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
//   Platform,
//   StatusBar
// } from "react-native";

// const MakeReport = ({ navigation }) => {

// //   /// firestore

// // useEffect(() => {
// //   const subscriber = firestore()
// //     .collection("roadsigns")
// //     .onSnapshot((querySnapshot) => {
// //       const fetchRoadsigns = [];

// //       querySnapshot.forEach((documentSnapshot) => {
// //         fetchRoadsigns.push({
// //           ...documentSnapshot.data(),
// //           key: documentSnapshot.id, name
// //         });
// //       });

// //       setUsers(fetchRoadsigns);
// //       setLoading(false);
// //     });

// //   // Unsubscribe from events when no longer in use
// //   return () => subscriber();
// // }, []);

// //   /// end

//   const [field1, setField1] = useState("");
//   const [field2, setField2] = useState("");
//   const [field3, setField3] = useState("");
//   const [feedback, setFeedback] = useState("");

//   // Options for road conditions
//   const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
//   const [selectedOption, setSelectedOption] = useState("Select an option");

//   const handleSubmit = () => {
//     Alert.alert(
//       "Submitted",
//       `Field 1: ${field1}\nField 2: ${field2}\nField 3: ${field3}\nRoad Condition: ${selectedOption}\nFeedback: ${feedback}`
//     );
//     navigation.navigate("Reports");
//   };

//     return (
//       <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
//         <View style={styles.root}>
//           <View style={styles.container}>
//             <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false} >
//               <Text style={styles.title}>Report A Road Condition</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Region"
//                 value={field1}
//                 onChangeText={setField1}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Town"
//                 value={field2}
//                 onChangeText={setField2}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Location"
//                 value={field3}
//                 onChangeText={setField3}
//               />
//               <CustomDropdown
//                 style={[styles.input, {backgroundColor: "#000"}]}
//                 options={options}
//                 onSelect={(option) => setSelectedOption(option)}
//                 selectedOption={selectedOption}
//               />
//               <TextInput
//                 style={[styles.input, styles.messageBox]}
//                 placeholder="Add details"
//                 value={feedback}
//                 onChangeText={setFeedback}
//                 multiline
//                 numberOfLines={4}
//               />
//               <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                 <Text style={styles.buttonText}>Submit</Text>
//               </TouchableOpacity>
//             </ScrollView>
//           </View>
//         </View>
//       </LinearGradient>
//     );
// };

// const styles = StyleSheet.create({
//   home: {
//     height: '100%',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     paddingHorizontal: 15,
//   },
//   container: {
//     flex: 1,
//   },
//   root: {
//     flex: 1,
//   },
//   contentContainer: {
//     paddingBottom: 20,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     marginBottom: 20,marginRight: 40, marginTop: 30,
//   },
//   input: {
//     height: 48,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: "#fff"
//   },
//   messageBox: {
//     height: 120,
//     padding: 10,
//     textAlignVertical: "top",
//   },
//   button: {
//     backgroundColor: "#18776F",
//     paddingVertical: 15,
//     marginTop: 20,
//     paddingHorizontal: 20,
//     borderRadius: 50,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default MakeReport;
