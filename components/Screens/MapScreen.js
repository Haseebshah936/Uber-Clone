import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Map from "../NavOptions/Map";
import NavigateCard from "../NavOptions/NavigateCard";
import RideOptionCard from "../NavOptions/RideOptionCard";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{
          position: "absolute",
          margin: 25,
          zIndex: 10,
          backgroundColor: "white",
          borderRadius: 30,
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
        activeOpacity={0.6}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesome name="bars" size={20} color="grey" />
      </TouchableOpacity>
      <View style={styles.map}>
        <Map />
      </View>
      <View style={styles.info}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
      <StatusBar style={"auto"} hidden />
    </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  info: {
    flex: 1,
  },
});
