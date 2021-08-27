import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import "intl";
import "intl/locale-data/jsonp/en";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(
    (state) => state.Reducer.travelTimeInformation
  );
  const surgeRate = 1.5;
  let distance = "";
  let duration = "";
  let value = 0;
  try {
    distance = travelTimeInfo.distance.text ? travelTimeInfo.distance.text : "";
    duration = travelTimeInfo.duration.text ? travelTimeInfo.duration.text : "";
    value = travelTimeInfo.duration.value ? travelTimeInfo.duration.value : 0;
  } catch (error) {}

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={styles.header}>Select a Ride - {distance}</Text>
      <TouchableOpacity
        style={styles.backIcon}
        activeOpacity={0.6}
        onPress={() => navigation.navigate("NavigateCard")}
      >
        <AntDesign name="arrowleft" size={20} color="black" />
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginBottom: 5 }}
            onPress={() => {
              setSelected(item);
            }}
          >
            <View
              style={
                selected !== null && selected.id === item.id
                  ? styles.selected
                  : styles.ride
              }
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={{
                  width: 90,
                  height: 90,
                  resizeMode: "contain",
                }}
              />
              <View>
                <Text
                  style={[styles.text, { fontSize: 18, fontWeight: "bold" }]}
                >
                  {item.title}
                </Text>
                <Text style={styles.text}>{duration} Travel Time</Text>
              </View>
              <Text style={[styles.text, { fontSize: 18, fontWeight: "bold" }]}>
                {new Intl.NumberFormat("en-gb", {
                  style: "currency",
                  currency: "GBP",
                }).format((value * surgeRate * item.multiplier) / 100)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        disabled={!selected}
        activeOpacity={0.6}
        style={{
          padding: 15,
          backgroundColor: selected ? "black" : "#f1f1f1",
          margin: 3,
        }}
      >
        <Text style={{ color: "white", alignSelf: "center" }}>
          Choose {selected !== null && selected.title}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  backIcon: {
    position: "absolute",
    width: 35,
    borderRadius: 30,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    margin: 10,
  },
  ride: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  selected: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    justifyContent: "space-evenly",
  },
  text: {
    color: "black",
  },
});
