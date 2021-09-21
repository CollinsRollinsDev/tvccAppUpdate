import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Header/Header";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  LogBox,
} from "react-native";
import myNotes from "../../../assets/Notes.json";
import { useSelector, useDispatch } from "react-redux";
 

const Note = () => {
const { currentTitle, currentPostBody, currentMinistering} =
    useSelector((state) => state.useTheReducer);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const handleChapterPress = async (event) => {};

  return (
    <View style={styles.body}>
      <Header name="Add a Note" leftSide="Search" />
        <View style={styles.notePreviewContainer}>
        <TextInput style={styles.input} placeholder="Title Here...." />
        <TextInput style={styles.input} placeholder="Ministering Here...." />
        <TextInput multiline={true} style={styles.inputPost} placeholder="Start Adding Note Here...." />

        </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "whitesmoke",
    minHeight: "100%",
  },
  notePreviewContainer: {
    minHeight: 500,
    width: "100%",
    padding: "2%",
  },

  input: {
    backgroundColor: 'transparent',
    width: '100%',
    height: 50,
    borderBottomColor: 'black',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    textAlign: 'left',
    fontSize: 18,
},
inputPost:{
    backgroundColor: 'transparent',
    width: '100%',
    // minHeight: 400,
    textAlign: 'left',
    fontSize: 17,
}
});
