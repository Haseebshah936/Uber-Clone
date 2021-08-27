import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import StackNavigator from "./components/Navigation/StackNavigator";
import Store from "./components/Redux/Store";
import "react-native-gesture-handler";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <StackNavigator />
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
}
