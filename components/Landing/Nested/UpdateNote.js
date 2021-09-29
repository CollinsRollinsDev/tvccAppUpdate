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
  Alert
} from "react-native";
import myNotes from "../../../assets/Notes.json";
import { useSelector, useDispatch } from "react-redux";
import { setUpdateTebSwitch } from "../../../reduxStore/actions";

const UpdateNote = ({navigation, currentTitle, currentMinistering, currentPostBody, setTabSwitch}) => {
const {userDetails, updateTabSwitch, currentPostId} =
    useSelector((state) => state.useTheReducer);
    const dispatch = useDispatch()

    let [addTitle, setAddTitle] = useState()
    let [addMinistering, setAddMinistering] = useState()
    let [addPost, setAddPost] = useState()

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

//   console.log(addTitle)

  const handleChapterPress = async (event) => {};
  const handleSave = async() => {

    async function reDefine(){
        addTitle == "undefined" ? addTitle = currentTitle : addTitle
        addMinistering == "undefined" ? addMinistering = currentMinistering : addMinistering = addMinistering
        addPost == "undefined" ? addPost = currentPostBody : addPost
    }

    await reDefine();

    console.log(addMinistering)

    if(!addTitle || !addPost){
      Alert.alert(`ERROR!!!`, `Seem like some fields are missing. Please fix and try again.`, [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } else{
      const res = await fetch(`http://10.2.213.237:8080/notes?userId=${userDetails.id}&postId=${currentPostId}`, {
        body: JSON.stringify({
          title: addTitle,
          ministering: addMinistering,
          body: addPost
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
      });
  
    //   const data = await res.json();
    //   if(data.success === true){
    //     Alert.alert(`Message`, `${data.response}`, [
    //       { text: "OK", onPress: () => {navigation.push("Notes"), dispatch(setUpdateTebSwitch(false)) },
    //     ]);
    //   } else{
    //     Alert.alert(`Unsuccessfull!`, `${data.response}`, [
    //       { text: "OK", onPress: () => console.log("OK Pressed") },
    //     ]);
    //   }
    }

   


  }

  return (
    <View style={styles.body}>
      <Header name="Edit Your Note" leftSide="Search" />
      <ScrollView>
        <View style={styles.notePreviewContainer}>
        
        <TextInput defaultValue={currentTitle} onChangeText={(e) => setAddTitle(e)} style={styles.input} placeholder="Title Here...." />
        <TextInput defaultValue={currentMinistering} onChangeText={(e) => setAddMinistering(e)} style={styles.input} placeholder="Ministering Here...." />
        <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.inputPost}
            onChangeText={(e) => setAddPost(e)}
            defaultValue={currentPostBody}
            // maxLength={120}
            placeholder={"Start Adding Note Here...."}
            placeholderTextColor={'#5661db'}
            underlineColorAndroid={'transparent'}
            // numberOfLines={2}
  />
        </View>
        </ScrollView>
        <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.content}>Save Post</Text>
        </TouchableOpacity>
    </View>
  );
};

export default UpdateNote;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "whitesmoke",
    minHeight: "100%",
    position: 'absolute',
    top: 0,
    zIndex: 2,
    width: '100%'
  },
  notePreviewContainer: {
    minHeight: "100%",
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
    minHeight: 400,
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
