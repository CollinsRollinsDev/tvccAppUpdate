import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
  Image,
} from "react-native";
import Menus from './Menus'
import About from '../Landing/Nested/About'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from './HomePage';
import Bible from "./Nested/Bible";
import ReadPage from "../ReadBiblePage/ReadPage";
import Event from "../Events/Event";

const Stack = createNativeStackNavigator();

const Index = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="TVCC" component={HomePage} options={{ headerShown: false }}/>
            <Stack.Screen name="About" component={About} options={{ headerShown: false }}/>
            <Stack.Screen name="Bible" component={Bible} options={{ headerShown: false }}/>
            <Stack.Screen name="ReadPage" component={ReadPage} options={{ headerShown: false }}/>
            <Stack.Screen name="Event" component={Event} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Index
