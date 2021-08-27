import React, { useEffect } from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { GOOGLE_MAPS_APIKEY } from "@env";
import NavOptions from "../NavOptions/NavOptions";
import { setDestination, setOrigin } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import NavFavorite from "../NavOptions/NavFavorite";

function HomeScreen() {
  const dispatch = useDispatch();
  const origin = useSelector((state) => state.Reducer.origin);

  useEffect(() => {
    console.log(origin);
  }, [origin]);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={[styles.container]}>
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          style={styles.logo}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />

        <NavOptions />
        <NavFavorite />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default HomeScreen;
