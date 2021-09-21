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
import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";
import {
    setCurrentTitle,
    setCurrentMinistering,
    setCurrentPostBody,
  } from "../../../reduxStore/actions";
 
const Notes = ({navigation}) => {
    // const { currentTitle, currentPostBody, currentMinistering} =
    // useSelector((state) => state.useTheReducer);

  const dispatch = useDispatch();

    const [displayNotePage, setDisplayNotePage] = useState(false)

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const handleChapterPress = async (id, title, ministering, post) => {
    setDisplayNotePage(true);
    // navigation.push("Note")
    dispatch(setCurrentTitle(title))
    dispatch(setCurrentMinistering(ministering))
    dispatch(setCurrentPostBody(post))
    // console.log("id:", id)
    // console.log("title:", title)
    // console.log("ministering:", ministering)
    // console.log("post:", post)
  };

  return (
    <View style={styles.body}>
      <Header name="Notes" leftSide="Search" />
      <ScrollView>
        <View style={styles.notePreviewContainer}>
          <FlatList
            data={myNotes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={async() => {
                    await handleChapterPress(item.id, item.title, item.ministering, item.body);
                    navigation.push("Note");
                }
            }
              >
                <View style={styles.preview}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.preacher}>{item.ministering}</Text>
                  <Text style={styles.excerpt}>
                    {item.body.substring(0, 70) + "..."}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* {
            displayNotePage ? <Note  /> : null
        } */}
      </ScrollView>
    </View>
  );
};

export default Notes;

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
  preview: {
    height: 90,
    width: "100%",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    marginTop: 10,
    padding: "1%",
    paddingLeft: "5%",
  },
  title: {
    color: "black",
    fontSize: 17,
    textAlign: "left",
    fontWeight: "bold",
  },
  excerpt: {
    color: "black",
    fontSize: 15,
    textAlign: "left",
    fontWeight: "500",
  },
  preacher: {
    color: "black",
    fontSize: 16,
    textAlign: "right",
    fontWeight: "600",
    marginRight: "5%",
  },
});
