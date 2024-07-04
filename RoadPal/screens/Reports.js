import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Button,
  Text,
  StatusBar,
  Platform,
} from "react-native";

import CustomSearch from "../components/CustomSearch";
import ReportCard from "../components/ReportCard";
import { LinearGradient } from "expo-linear-gradient";

const reportsData = [
  {
    id: "1",
    imageSource:
      "https://cdn.pixabay.com/photo/2016/04/05/01/49/crash-1308575_1280.jpg",
    title: "Road accident",
    timestamp: "5 minutes ago",
    location: "Buea, mayor street",
  },
  {
    id: "2",
    imageSource:
      "https://cdn.pixabay.com/photo/2014/01/03/17/06/roll-238142_960_720.jpg",
    title: "Road work",
    timestamp: "15 days ago",
    location: "Yaounde, Mokolo",
  },
  {
    id: "3",
    imageSource:
      "https://cdn.pixabay.com/photo/2019/09/13/14/22/road-sign-4474011_640.jpg",
    title: "Road work",
    timestamp: "1 month ago",
    location: "Buea, Sandpit",
  },
  // Add more report objects here if needed
];

function Reports({ navigation }) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchPress = () => {
    setIsSearching(!isSearching);
    setSearchQuery("");
    setSuggestions([]); // Clear suggestions when toggling search mode
  };

  const handleSearchCancel = () => {
    setIsSearching(false);
    setSearchQuery("");
    setSuggestions([]);
  };

  const handleSearchSubmit = () => {
    // Perform search logic here
    alert(`Searching for: ${searchQuery}`);
  };

  const handleInputChange = (text) => {
    setSearchQuery(text);
    // Example: Fetch suggestions from an API or local data based on the input
    // Replace this with your actual suggestion logic
    const newSuggestions = ["suggestion1", "suggestion2", "suggestion3"];
    setSuggestions(newSuggestions);
  };

  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <View style={styles.container}>
        {isSearching ? (
          <View style={styles.searchContainer}>
            <CustomSearch
              // style={styles.searchInput}
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
        ) : (
          <>
            <CustomSearch onPress={handleSearchPress} />
            <FlatList
              contentContainerStyle={styles.contentContainer}
              data={reportsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ReportCard
                  imageSource={item.imageSource}
                  title={item.title}
                  timestamp={item.timestamp}
                  location={item.location}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  home: {
    height: "100%",
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
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  suggestionsContainer: {
    maxHeight: 100,
    marginBottom: 10,
  },
  searchButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Reports;
