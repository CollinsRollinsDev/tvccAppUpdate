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

        // console.log(currentTitle)
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const handleChapterPress = async (event) => {};

  return (
    <View style={styles.body}>
      <Header name="My Note" leftSide="Search" />
        <View style={styles.notePreviewContainer}>
        <Text style={styles.titleText}>{currentTitle}</Text>
        <Text style={styles.minister}>
            {`By: ${currentMinistering}`}
        </Text>
        <Text style={styles.postBody}>
            {currentPostBody}
        </Text>
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
  titleText:{
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: '900',
  },
  minister: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10
  },
  postBody: {
      fontSize: 17,
      marginTop: 20
  }
//   input: {
//     backgroundColor: 'transparent',
//     width: '100%',
//     height: 50,
//     borderBottomColor: 'black',
//     borderTopColor: 'transparent',
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     textAlign: 'left',
//     fontSize: 18,
// }
});
