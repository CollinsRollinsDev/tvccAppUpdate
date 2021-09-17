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

const updateSearch = () => {

}

const Bible = ({}) => {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

    // console.log(scriptures);
    const [search, updateSearch] = useState('');
    const [selectedBook, setSelectedBook] = useState("Ruth");
    const [userPickedOld, setUserPickedOld] = useState();
    let   [selectedChapter, setSelectedChapter] = useState()
    const [displayChapters, setDisplayChapters] = useState(true);
    let   [verseArr, setVerseArr] = useState();
    let   [verseSelected, setVerseSelected] = useState(null);

    const oldTestament = scriptures[0].oldTestament;
    // const oldTestament = scriptures[0].books[0].oldTestament;

    const filterBookPicked = async(e) => {
      
      const bibleArr = await Object.entries(oldTestament);
      const filteredArr = await bibleArr.filter(function([key, value]){
        return key === e;
      });

      setUserPickedOld(filteredArr[0][1].chapters)
      // console.log(filteredArr[0][1].chapters)
      const newObj = await Object.fromEntries(filteredArr);
      // console.log(newObj)

   }

    useEffect(() => {
    filterBookPicked(selectedBook);
    setDisplayChapters(true);
    }, [selectedBook])

    const getVerses = async(e) => {
      await e;
      // await e.toString();
        const toFilter = await userPickedOld;
       const filtered = await toFilter.filter((each) => each.chapter == e)
      await setVerseArr(verseArr = filtered);
      //  console.log(e)
       console.log(verseArr[0].verses)

    }

    useEffect(() => {
      !displayChapters ? getVerses(selectedChapter) : null
    },[userPickedOld, selectedChapter])


    const handleChapterPress = async(e) => {
      setSelectedChapter(parseInt(e))
      setSelectedChapter(selectedChapter = e)
      console.log(selectedChapter)
      setDisplayChapters(false)
    }

    const handleVersePress = async(e) => {
      // console.log(e);
      await setVerseSelected(verseSelected = e)
      console.log(verseSelected)
    }

    useEffect(() => {
      console.log("Moving to readable page")
    }, [verseSelected])


    return (
        <View style={styles.body}>
          
            <Header name="Bible" leftSide="Search" />

            <View style={styles.top}>
            <TextInput
                style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
                placeholder="Search Here..."
      />
            </View>
            {/* <View style={styles.getter}>
          
            </View> */}

            <View style={styles.selector}>
                <Text style={styles.testamentDecleartion}>Old Testament</Text>
                <View style={styles.bookArea}>
                <Picker
                style={styles.oldBook}
                selectedValue={selectedBook}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedBook(itemValue)
                }>
                <Picker.Item label="Genesis" value="Genesis" />
                <Picker.Item label="Exodus" value="Exodus" />
                <Picker.Item label="Leviticus" value="Leviticus" />
                <Picker.Item label="Numbers" value="Numbers" />
                <Picker.Item label="Deuteronomy" value="Deuteronomy" />
                <Picker.Item label="Joshua" value="Joshua" />
                <Picker.Item label="Judges" value="Judges" />
                <Picker.Item label="Ruth" value="Ruth" />
                <Picker.Item label="1 Samuel" value="1 Samuel" />
                <Picker.Item label="2 Samuel" value="2 Samuel" />
                <Picker.Item label="1 Kings" value="1 Kings" />
                <Picker.Item label="2 Kings" value="2 Kings" />
                <Picker.Item label="1 Chronicles" value="1 Chronicles" />
                <Picker.Item label="2 Chronicles" value="2 Chronicles" />
                <Picker.Item label="Ezra" value="Ezra" />
                <Picker.Item label="Nehemiah" value="Nehemiah" />
                <Picker.Item label="Esther" value="Esther" />
                <Picker.Item label="Job" value="Job" />
                <Picker.Item label="Psalms" value="Psalms" />
                <Picker.Item label="Proverbs" value="Proverbs" />
                <Picker.Item label="Ecclesiastes" value="Ecclesiastes" />
                <Picker.Item label="Song of Solomon" value="Song of Solomon" />
                <Picker.Item label="Isaiah" value="Isaiah" />
                <Picker.Item label="Jeremiah" value="Jeremiah" />
                <Picker.Item label="Lamentations" value="Lamentations" />
                <Picker.Item label="Ezekiel" value="Ezekiel" />
                <Picker.Item label="Daniel" value="Daniel" />
                <Picker.Item label="Hosea" value="Hosea" />
                <Picker.Item label="Joel" value="Joel" />
                <Picker.Item label="Amos" value="Amos" />
                <Picker.Item label="Obadiah" value="Obadiah" />
                <Picker.Item label="Jonah" value="Jonah" />
                <Picker.Item label="Micah" value="Micah" />
                <Picker.Item label="Nahum" value="Nahum" />
                <Picker.Item label="Habakkuk" value="Habakkuk" />
                <Picker.Item label="Zephaniah" value="Zephaniah" />
                <Picker.Item label="Haggai" value="Haggai" />
                <Picker.Item label="Zechariah" value="Zechariah" />
                <Picker.Item label="Malachi" value="Malachi" />
                 </Picker>
               
                </View>
                
                
                {
                  displayChapters ? <Text style={styles.chapterDecleartion}>Chapters</Text> : null
                }
                <ScrollView>
                <View style={styles.chapterArea}>
                
               {
                 displayChapters ?    
                 <FlatList
                 contentContainerStyle={styles.grid}
                 numColumns={4}
                 data={userPickedOld}
                 keyExtractor={(item, index) => index.toString()}
                 renderItem={({ item }) => (
                     <TouchableOpacity onPress={() => handleChapterPress(item.chapter)} style={styles.individualChapters}>
                         <Text style={styles.numbers}>{item.chapter}</Text>
                     </TouchableOpacity>
                   
                 )
                 }
         /> 
          : null
                  } 

                </View>

                {
                  !displayChapters ? <Text style={styles.verseDecleartion}>Verses</Text> : null
                }
                <View style={styles.verseArea}>
                
                   {
                     !displayChapters ? 
                     <FlatList
                     contentContainerStyle={styles.grid}
                     numColumns={4}
                     data={verseArr ? verseArr[0].verses : null}
                     keyExtractor={(item, index) => index.toString()}
                     renderItem={({ item }) => (
                    //  console.log(item.verse)
                     <TouchableOpacity onPress={() => handleVersePress(item.verse)} style={styles.individualVerses}>
                         <Text style={styles.numbers}>{item.verse}</Text>
                     </TouchableOpacity>
                     )
                     }
             />
               : null
                   } 
                       

                </View>
                </ScrollView>

            </View>
           
        </View>
        
    )
}

export default Bible



const styles = StyleSheet.create({
    body: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: "#3464eb",
        width: "100%",
        height: '100%'
        // paddingBottom: 30,
      },
      top: {
          height: 60,
          width: '100%',
        //   backgroundColor: 'green'
      },
      getter:{

      },
      selector: {

      },
      oldBook: {
          height: '100%',
          width: '100%',
        //   color: 'white',
      },
      bookArea: {
          width: '50%',
          height:30,
          backgroundColor: 'white',
          borderRadius: 20,
          marginLeft: '25%',
          marginTop: 20,
          marginBottom: 30,
      },
      testamentDecleartion: {
          textAlign: 'center',
          fontSize: 23,
          color: 'white',
          marginTop: 10,
          fontWeight: 'bold'
      },
      input: {
          height: 30,
          width: '60%',
          marginLeft: '20%',
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: '2%',

      },
      chapterArea: {
        //   backgroundColor: 'red',
          height: 'auto',
          width: '100%',
          marginBottom: 300,
          padding: '3%',
          flexDirection: 'row',
      },

      verseArea: {
          // backgroundColor: 'red',
          minHeight: 100,
          width: '100%',
          marginBottom: 300,
          padding: '3%',
          flexDirection: 'row',
          // marginTop: -417,
          position: 'relative',
          top: '-90%',
      },

      individualChapters: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          width: 50,
        //   borderColor: 'white',
          borderTopColor: 'transparent',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'white',
          borderWidth: 2,
          borderRadius: 10,
          margin: 15,
      },

      individualVerses: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
      //   borderColor: 'white',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        margin: 15,
    },

      numbers: {
          fontSize: 20,
          color: 'white',
        //   textShadowColor: 'black',
        //   textShadowRadius: 10,
      },

      chapterDecleartion: {
        textAlign: 'left',
        marginLeft: '5%',
        marginBottom: '3%',
        fontSize: 19,
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
        // position: 'absolute',
        // zIndex: 1,
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
      },

      verseDecleartion: {
        textAlign: 'left',
        marginLeft: '5%',
        marginBottom: '3%',
        fontSize: 19,
        color: 'white',
        marginTop: 10,
        fontWeight: 'bold',
        position: 'relative',
        top: '-25%',

      },
      grid: {
          flex:1,
          height: '100%',
          width : '100%',
        // marginBottom: 32,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
      }


})
