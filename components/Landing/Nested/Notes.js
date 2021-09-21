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
  LogBox
} from "react-native";
import myNotes from "../../../assets/Notes.json";

const Notes = () => {
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
      }, []);

      const handleChapterPress = async(event) => {

      }



  return (
    <View style={styles.body}>
      <Header name="Notes" leftSide="Search" />
      <ScrollView>
        <View style={styles.notePreviewContainer}>
          <FlatList
            // contentContainerStyle={styles.grid}
            // numColumns={4}
            data={myNotes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleChapterPress(item.id)}
                // style={styles.individualChapters}
              >
            <View style={styles.preview}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.preacher}>{item.ministering}</Text>
            <Text style={styles.excerpt}>
              {item.body.substring(0,30) + "..."}
            </Text>
          </View>
              </TouchableOpacity>
            )}
          />

         
        </View>
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
