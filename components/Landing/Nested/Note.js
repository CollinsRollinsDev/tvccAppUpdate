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
import UpdateNote from './UpdateNote';
import { setUpdateTebSwitch } from "../../../reduxStore/actions";

const Note = () => {
const { currentTitle, currentPostBody, currentMinistering, currentPostId, updateTabSwitch} =
    useSelector((state) => state.useTheReducer);
    const dispatch = useDispatch()
    // const [tabSwitch, setTabSwitch] = useState(false)

        // console.log(currentTitle)
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const handleChapterPress = async (event) => {};

  const handleEdit = async() => {
    updateTabSwitch ? dispatch(setUpdateTebSwitch(false)) : dispatch(setUpdateTebSwitch(true));
  }

  const display = <View style={styles.body}>
  <Header name="My Note" leftSide="Search" />
  <ScrollView>
    <View style={styles.notePreviewContainer}>
    <Text style={styles.titleText}>{currentTitle}</Text>
    <Text style={styles.minister}>
        {`By: ${currentMinistering}`}
    </Text>
    <Text style={styles.postBody}>
        {currentPostBody}
    </Text>
    </View>
    </ScrollView>
    <TouchableOpacity onPress={handleEdit} style={styles.saveBtn}>
        <Text style={styles.content}>Edit Post</Text>
    </TouchableOpacity>
</View>

  return (
    <>
    {
      !updateTabSwitch ? display :  <UpdateNote currentTitle={currentTitle} currentMinistering={currentMinistering} currentPostBody={currentPostBody} />
    }
   
    </>
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
    opacity: 0.7
},
content: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
},
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
