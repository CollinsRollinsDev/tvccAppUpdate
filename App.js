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
import Lunch from './components/Lunch/Lunch.js';
import Login from './components/Auth/Login';
import HomePage from "./components/Landing/HomePage.js";
import About from "./components/Landing/Nested/About.js";
import Bible from "./components/Landing/Nested/Bible.js";

export default function App(){
  return (
    <View style={styles.main}>
        {/* <Lunch /> */}
        {/* <Login /> */}
        <HomePage />
        {/* <About /> */}
        {/* <Bible /> */}

    </View>
  );
}
const styles = StyleSheet.create({
  main:{
    paddingTop: 30,
    width: "100%",
    height: "100%"
  }
});