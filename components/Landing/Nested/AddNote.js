import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Textarea from 'react-native-textarea';

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

    const [addTitle, setAddTitle] = useState()
    const [addMinistering, setAddMinistering] = useState()
    const [addPost, setAddPost] = useState()

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const handleChapterPress = async (event) => {};
  const handleSave = async() => {
      console.log("working")
  }

  return (
    <View style={styles.body}>
      <Header name="Add a Note" leftSide="Search" />
        <View style={styles.notePreviewContainer}>
        <TextInput onChangeText={(e) => setAddTitle(e)} style={styles.input} placeholder="Title Here...." />
        <TextInput onChangeText={(e) => setAddMinistering(e)} style={styles.input} placeholder="Ministering Here...." />
        <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.inputPost}
            onChangeText={(e) => setAddPost(e)}
            // defaultValue={"here"}
            // maxLength={120}
            placeholder={"Start Adding Note Here...."}
            placeholderTextColor={'#5661db'}
            underlineColorAndroid={'transparent'}
  />
        </View>
        <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.content}>Save Post</Text>
        </TouchableOpacity>
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
    textAlignVertical: 'top',
    fontSize: 17,
    marginTop: 20,
},
saveBtn: {
    backgroundColor: 'blue',
    height: 40,
    width: 130,
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: "90%",
    right: '5%',
},
content: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
},
// textareaContainer: {
//     lineHeight: 500
// }
});
