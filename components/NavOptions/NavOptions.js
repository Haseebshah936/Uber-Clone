import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const Card = ({ item, navigation, origin }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={() => navigation.navigate("Map")}
      disabled={!origin}
    >
      <View
        style={
          !origin && {
            opacity: 0.3,
          }
        }
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{item.title}</Text>
        <AntDesign
          style={styles.icon}
          name="arrowright"
          size={24}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
};

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector((state) => state.Reducer.origin);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <Card item={item} navigation={navigation} origin={origin} />
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#e6e8e5",
    margin: 5,
    paddingBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  icon: {
    padding: 8,
    backgroundColor: "black",
    borderRadius: 20,
    width: 40,
    height: 40,
    marginTop: 8,
  },
});
