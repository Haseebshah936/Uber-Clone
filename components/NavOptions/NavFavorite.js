import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { setOrigin } from "../Redux/Actions";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "work",
    destination: "London Eye, London, UK",
  },
];

const NavFavorite = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{ borderWidth: 0.1, backgroundColor: "lightgray" }} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.3} style={styles.favContainer}>
          <View style={styles.icon}>
            <FontAwesome name={item.icon} size={24} color="white" />
          </View>
          <View style={{ marginLeft: 10, alignSelf: "center" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                textTransform: "capitalize",
                color: "black",
              }}
            >
              {item.location}
            </Text>
            <Text style={{ color: "gray" }}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorite;

const styles = StyleSheet.create({
  favContainer: {
    flexDirection: "row",
    padding: 15,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
});
