import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Button,
  Text,
  StatusBar,
  Platform,
  ActivityIndicator,
  Modal,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { firebase } from "../config";
import CustomSearch from "../components/CustomSearch";
import ReportCard from "../components/ReportCard";

function Reports({ navigation }) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  useEffect(() => {
    const unsubscribe = fetchReports();
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);

  const fetchReports = async () => {
    try {
      const reportRef = firebase.firestore().collection("reports");
      return reportRef.onSnapshot(async (querySnapshot) => {
        const fetchReports = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const {
              createdAt,
              feedback,
              locality,
              region,
              roadCondition,
              roadSign,
              town,
            } = doc.data();
            const imageUrl = await fetchImageFromCollection(
              roadCondition ? "roadstates" : "roadsigns",
              roadCondition || roadSign
            );
            return {
              id: doc.id,
              createdAt,
              feedback,
              locality,
              region,
              roadCondition,
              roadSign,
              town,
              imageUrl,
            };
          })
        );
        setReports(fetchReports);
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Error fetching reports:", error);
      alert("Failed to fetch reports. Please try again later.");
      setIsLoading(false);
    }
  };

  const handleSearchPress = () => {
    setIsSearching(!isSearching);
    setSearchQuery("");
    setSuggestions([]);
  };

  const handleSearchCancel = () => {
    setIsSearching(false);
    setSearchQuery("");
    setSuggestions([]);
  };

  const handleSearchSubmit = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  const handleInputChange = (text) => {
    setSearchQuery(text);
    const newSuggestions = ["suggestion1", "suggestion2", "suggestion3"];
    setSuggestions(newSuggestions);
  };

  const formatDate = (timestamp) => {
    const now = new Date();
    const date = timestamp.toDate();
    const diffTime = now - date;
    const diffSeconds = Math.floor(diffTime / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSeconds < 60) {
      return `${diffSeconds} second${diffSeconds !== 1 ? "s" : ""} ago`;
    } else if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    } else if (diffDays < 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      return `${diffWeeks} week${diffWeeks !== 1 ? "s" : ""} ago`;
    } else {
      const diffMonths = Math.floor(diffDays / 30);
      return `${diffMonths} month${diffMonths !== 1 ? "s" : ""} ago`;
    }
  };

  const fetchImageFromCollection = async (collectionName, itemName) => {
    try {
      const collectionRef = firebase.firestore().collection(collectionName);
      const querySnapshot = await collectionRef
        .where("name", "==", itemName)
        .get();

      if (querySnapshot.empty) {
        console.warn(
          `No matching documents found in ${collectionName} for ${itemName}`
        );
        return null;
      }

      const doc = querySnapshot.docs[0];
      const imageUrl = doc.data().image;

      return imageUrl || null;
    } catch (error) {
      console.error(`Error fetching image from ${collectionName}:`, error);
      return null;
    }
  };

  const openModal = (report) => {
    setSelectedReport(report);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedReport(null);
  };

  const renderReportCard = ({ item }) => {
    const {
      roadCondition,
      roadSign,
      town,
      locality,
      createdAt,
      imageUrl,
      feedback,
    } = item;
    const formattedTimestamp = formatDate(createdAt);

    return (
      <TouchableHighlight
        underlayColor="#DDDDDD"
        onPress={() => openModal(item)}
        style={styles.reportCardButton}
      >
        <View style={styles.reportCard}>
          <ReportCard
            imageSource={imageUrl}
            title={roadSign || roadCondition || "Unknown"}
            subtitle={roadCondition || roadSign || "Unknown"}
            timestamp={formattedTimestamp}
            location={`${town}, ${locality}`}
          />
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <View style={styles.container}>
        {isSearching ? (
          <View style={styles.searchContainer}>
            <CustomSearch
              placeholder="Search..."
              value={searchQuery}
              onChangeText={handleInputChange}
            />
            <FlatList
              style={styles.suggestionsContainer}
              data={suggestions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Text>{item}</Text>}
            />
            <View style={styles.searchButtons}>
              <Button title="Cancel" onPress={handleSearchCancel} />
              <Button title="Search" onPress={handleSearchSubmit} />
            </View>
          </View>
        ) : isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          <>
            <CustomSearch onPress={handleSearchPress} />
            <FlatList
              contentContainerStyle={styles.contentContainer}
              data={reports}
              keyExtractor={(item) => item.id}
              renderItem={renderReportCard}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
            <TouchableHighlight
              style={styles.overlay}
              underlayColor="#0000001A"
              onPress={closeModal}
            >
              <View style={styles.overlay} />
            </TouchableHighlight>
            <View style={styles.modalView}>
              {selectedReport && (
                <>
                  <Text style={styles.modalTitle}>Report Details</Text>
                  <ReportCard
                    imageSource={selectedReport.imageUrl}
                    title={
                      selectedReport.roadSign ||
                      selectedReport.roadCondition ||
                      "Unknown"
                    }
                    subtitle={
                      selectedReport.roadCondition ||
                      selectedReport.roadSign ||
                      "Unknown"
                    }
                    timestamp={formatDate(selectedReport.createdAt)}
                    location={`${selectedReport.town}, ${selectedReport.locality}`}
                  />
                  <Text style={styles.modalFeedbackTitle}>User Feedback</Text>
                  <Text style={styles.modalFeedback}>
                    {selectedReport.feedback}
                  </Text>
                  <TouchableHighlight
                    style={styles.closeButton}
                    underlayColor="#DDDDDD"
                    onPress={closeModal}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableHighlight>
                </>
              )}
            </View>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
    paddingTop: 30,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: "column",
    width: "100%",
  },
  suggestionsContainer: {
    maxHeight: 100,
    marginBottom: 10,
  },
  searchButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  reportCardButton: {
    marginBottom: 5,
    borderRadius: 10,
  },
  reportCard: {
    backgroundColor: "#FFFFFF00",
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // dark semi-transparent overlay
  },
  modalView: {
    width: 350,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#0000000E", // dark semi-transparent overlay
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalFeedbackTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  modalFeedback: {
    fontSize: 16,
    textAlign: "start",
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#18776F",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Reports;
