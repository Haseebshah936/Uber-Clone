import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../Redux/Actions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import NavFavorite from "./NavFavorite";
import { Ionicons } from "@expo/vector-icons";

const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Good Morning, Haseeb</Text>
      <View style={styles.toContainer}>
        <GooglePlacesAutocomplete
          placeholder={"Where to?"}
          nearbyPlacesAPI={"GooglePlacesSearch"}
          fetchDetails={true}
          debounce={400}
          styles={toInputStyle}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("RideOptionCard");
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavFavorite />
        <View
          style={{
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 15,
          }}
        >
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={0.3}
            onPress={() => navigation.navigate("RideOptionCard")}
          >
            <Ionicons name="car-sport" size={22} color="white" />
            <Text style={{ color: "white", marginLeft: 8, margin: 5 }}>
              Rides
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} activeOpacity={0.3}>
            <Ionicons name="fast-food" size={22} color="white" />
            <Text style={{ color: "white", marginLeft: 8, margin: 5 }}>
              Eats
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  greeting: {
    fontSize: 18,
    alignSelf: "center",
    padding: 8,
  },
  toContainer: {
    backgroundColor: "#fcfcfc",
    flex: 1,
    flexShrink: 1,
  },
  icon: {
    flexDirection: "row",
    backgroundColor: "black",
    color: "white",
    padding: 5,
    paddingHorizontal: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 25,
  },
});

const toInputStyle = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 20,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#f0f0ef",
    borderRadius: 0,
    color: "gray",
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
