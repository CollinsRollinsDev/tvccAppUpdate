import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
// import { SearchBar } from 'react-native-elements';
import { Picker } from "@react-native-picker/picker";
import scriptures from "../../assets/bibleKJV.json";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  LogBox,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentBook, setCurrentChapter, setCurrentVerse, setCurrentScripture } from "../../reduxStore/actions";

const ReadPage = () => {
  const {currentBook, currentChapter, currentVerse, currentScripture} = useSelector(state => state.useTheReducer)
  
  return (
    <View style={styles.body}>
      <Header name="Genesis" leftSide="Search" />
      <ScrollView>
        <View style={styles.scripture}>
          <View style={styles.eachChapter}>
            <Text style={styles.verseText}>
               <Text style={styles.verseCount}>  1.</Text> And Cain talked with Abel his brother: and it came to pass, when
              they were in the field, that Cain rose up against Abel his
              brother, and slew him.
            </Text>
          </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default ReadPage;

const styles = StyleSheet.create({
  body: {
    minHeight: "100%",
    width: "100%",
  },
  scripture: {
    width: "100%",
    color: "black",
    marginBottom: 80,
  },
  eachChapter: {
    width: "100%",
    padding: "2%",
  },
  verseText: {
      fontSize: 18,
      width: '100%'
  },
  verseCount:{
      color: '#c42e04',
      fontWeight: 'bold',
  }
});
