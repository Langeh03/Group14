import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Circle } from "react-native-svg";
import CustomAppbar from "../components/CustomAppbar";
import { firebase } from "../config";

const RoadSigns = ({ navigation }) => {
  const [roadSigns, setRoadSigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRoadSigns = async () => {
    try {
      const roadsignRef = firebase.firestore().collection("roadsigns");
      roadsignRef.onSnapshot((querySnapshot) => {
        const fetchedRoadSigns = [];
        querySnapshot.forEach((doc) => {
          const { name, image, description } = doc.data();
          fetchedRoadSigns.push({ id: doc.id, image, name, description });
        });
        setRoadSigns(fetchedRoadSigns);
        setLoading(false);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchRoadSigns();
  }, []);

  return (
    <LinearGradient style={styles.home} colors={["#ffffff", "#AAF0E5"]}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={roadSigns}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ height: 10, width: 10 }} />
          )}
          renderItem={({ item: { image, name, description } }) => {
            return (
              <TouchableOpacity style={styles.wrappernt}>
                <Image style={styles.icon} source={{ uri: image }} />
                <View style={styles.description}>
                  <Text style={{ fontWeight: "700" }}>{name}</Text>
                  <Text style={{ color: "gray" }}>{description}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <CustomAppbar
                leadingIcon="arrow-back"
                onLeadingPress={() => navigation.goBack()}
                title="Road Signs"
                endElements={<></>}
              />
              <View style={styles.headerContent}>
                <Image
                  source={require("../assets/happy-man.png")}
                  style={styles.headerImage}
                />
                <View>
                  <Text style={styles.logo}>Know your Signs</Text>
                </View>
              </View>
              <Text style={styles.explanation}>
                Ready to hit the road with confidence? Buckle up and discover
                the meaning behind the signs that guide your journey!
              </Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={{ marginBottom: 50, marginTop: 50 }}>
              <Text style={styles.reportText}>
                {loading ? "Loading..." : "Hope this was helpful..."}
              </Text>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

export default RoadSigns;

const styles = StyleSheet.create({
  home: {
    height: "100%",
    paddingHorizontal: 15,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  explanation: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  description: {
    marginRight: 10,
    paddingEnd: 10,
  },
  wrappernt: {
    width: 330,
    height: 80,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
  },
  icon: {
    marginRight: 15,
    borderRadius: 50,
    backgroundColor: "#18776F",
    paddingVertical: 10,
    height: 40,
    width: 40,
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  header: {
    paddingTop: 0,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    alignItems: "flex-start",
  },
  reportText: {
    textAlign: "center",
    color: "#18776F",
    fontSize: 18,
    fontWeight: "bold",
  },
});
