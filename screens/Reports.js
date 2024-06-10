import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Text,
} from "react-native";

import CustomSearch from "../components/CustomSearch";
import ReportCard from "../components/ReportCard";

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
    <View style={styles.container}>
      {isSearching ? (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={handleInputChange}
          />
          <ScrollView style={styles.suggestionsContainer}>
            {suggestions.map((suggestion, index) => (
              <Text key={index}>{suggestion}</Text>
            ))}
          </ScrollView>
          <View style={styles.searchButtons}>
            <Button title="Cancel" onPress={handleSearchCancel} />
            <Button title="Search" onPress={handleSearchSubmit} />
          </View>
        </View>
      ) : (
        <>
          <CustomSearch onPress={handleSearchPress} />
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            bounces={true}
            showsVerticalScrollIndicator={false}
          >
            <ReportCard
              imageSource="https://cdn.pixabay.com/photo/2016/04/05/01/49/crash-1308575_1280.jpg"
              title={"Road accident"}
              timestamp={"5 minutes ago"}
              location={"Buea, mayor street"}
            />
            <ReportCard
              imageSource="https://cdn.pixabay.com/photo/2014/01/03/17/06/roll-238142_960_720.jpg"
              title={"Road work"}
              timestamp={"15 days ago"}
              location={"Yaounde, Mokolo"}
            />
            <ReportCard
              imageSource="https://cdn.pixabay.com/photo/2019/09/13/14/22/road-sign-4474011_640.jpg"
              title={"Road work"}
              timestamp={"1 month ago"}
              location={"Buea, Sandpit"}
            />
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  searchContainer: {
    flexDirection: "column",
    width: "100%",
    padding: 20,
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
