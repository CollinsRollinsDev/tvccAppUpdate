import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Header/Header";
// import { SearchBar } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import scriptures from '../../../assets/bibleKJV.json';

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

const ReadPage = () => {
    return (
        <View style={styles.body}>
            
        </View>
    )
}

export default ReadPage




const styles = StyleSheet.create({
    body: {
        minHeight: '100%',
        width: '100%',
    }
})