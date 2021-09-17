import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
} from "react-native";
import { useState } from "react";
import Lunch from "./components/Lunch/Lunch.js";
import Login from "./components/Auth/Login";
import HomePage from "./components/Landing/HomePage.js";
import About from "./components/Landing/Nested/About.js";
import Bible from "./components/Landing/Nested/Bible.js";
import ReadPage from "./components/ReadBiblePage/ReadPage.js";
import store from "./redux_store/store.js";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.main}>
        {/* <Lunch /> */}
        {/* <Login /> */}
        {/* <HomePage /> */}
        {/* <About /> */}
        {/* <Bible /> */}
        <ReadPage />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  main: {
    paddingTop: 30,
    width: "100%",
    height: "100%",
  },
});
