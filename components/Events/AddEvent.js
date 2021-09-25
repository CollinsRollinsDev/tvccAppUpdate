import React from "react";
import { useState, useEffect } from "react";
import Header from '../Header/Header'
import { Picker } from "@react-native-picker/picker";


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
import { useSelector, useDispatch } from "react-redux";
 

const AddEvent = () => {
const { currentTitle, currentPostBody, currentMinistering} =
    useSelector((state) => state.useTheReducer);

    const [name, setName] = useState()
    const [date, setDate] = useState()
    const [host, setHost] = useState()

    const [hour, setHour] = useState()
    let [preHour, setPreHour] = useState("00")
    const [preMinutes, setPreMinutes] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState("00")
    let [format, setFormat] = useState("AM")
    const [description, setDescription] = useState()

  console.log("prehour is", preHour)

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const handleChapterPress = async (event) => {};
  const handleSave = async() => {
      console.log("working")
  }


  const formatter1 = async() => {
    if(preHour == "00"){
      setPreHour(preHour = "00")
    } else if(preHour == "12" && format == "AM"){
      setPreHour(preHour = "00")
    }

  }
  
useEffect(() => {
  formatter1()
}, [preHour])


  // const formatter2 = async() => {
  //   if(format == "PM" && preHour != "12"){
  //     let step = await parseInt(preHour) + 12
  //       setPreHour(step.toString())
  //   }
  // }

  // useEffect(() => {
  //   formatter2()
  // }, [format])

  useEffect(() => {
    if(format == "PM" && preHour != "12" ){
      setPreHour(preHour = parseInt(preHour) + 12)
    } else if(format == "AM" && parseInt(preHour) > 12){
      setPreHour((preHour = parseInt(preHour) - 12).toString())
      if(preHour != "10" || preHour != "11"){
        setPreHour(`0${preHour}`);
      }
    } else{
      preHour
    }
     
  }, [format])

  // const handleSwitch = async(itemValue) => {
  //   format == "PM" && itemValue != "12" ? itemValue = parseInt(itemValue) + 12 : itemValue
  // }

  return (
    <View style={styles.body}>
      <Header name="Add a Note" leftSide="Search" />
      <ScrollView>
      
        <View style={styles.container}>
            <Text style={styles.info}>Fill in details to add event here</Text>

            <TextInput onChangeText={(e) => setName(e)} style={styles.input} placeholder="Name of Event"></TextInput>
            <TextInput onChangeText={(e) => setHost(e)} style={styles.input} placeholder="Host of Event"></TextInput>
            <TextInput onChangeText={(e) => setDescription(e)} style={styles.input} placeholder="Event Description"></TextInput>
            
            <View style={styles.containerFlex}>
            <View style={styles.roleBox}>
                        <Picker
                        style={styles.role}
                        selectedValue={preHour}
                        onValueChange={(itemValue, itemIndex) =>
                        setPreHour(format == "PM" && itemValue != "12" ? itemValue = parseInt(itemValue) + 12 : itemValue)
                        }
                    >
                        <Picker.Item label="Hour" value="" />
                        <Picker.Item label="12" value="12" />
                        <Picker.Item label="01" value="01" />
                        <Picker.Item label="02" value="02" />
                        <Picker.Item label="03" value="03" />
                        <Picker.Item label="04" value="04" />
                        <Picker.Item label="05" value="05" />
                        <Picker.Item label="06" value="06" />
                        <Picker.Item label="07" value="07" />
                        <Picker.Item label="08" value="08" />
                        <Picker.Item label="09" value="09" />
                        <Picker.Item label="10" value="10" />
                        <Picker.Item label="11" value="11" />

                    </Picker>
                </View>
                        <Text style={styles.columnFeel} >:</Text>
                    <View style={styles.roleBox}>
                        <Picker
                        style={styles.role}
                        selectedValue={preMinutes}
                        onValueChange={(itemValue, itemIndex) =>
                        setPreMinutes(itemValue)
                        }
                    >
                        <Picker.Item label="Minutes" value="" />
                        <Picker.Item label="00" value="00" />
                        <Picker.Item label="05" value="05" />
                        <Picker.Item label="10" value="10" />
                        <Picker.Item label="15" value="15" />
                        <Picker.Item label="20" value="20" />
                        <Picker.Item label="25" value="25" />
                        <Picker.Item label="30" value="30" />
                        <Picker.Item label="35" value="35" />
                        <Picker.Item label="40" value="40" />
                        <Picker.Item label="45" value="45" />
                        <Picker.Item label="50" value="50" />
                        <Picker.Item label="55" value="55" />

                    </Picker>
                </View>
                
                <Text style={styles.columnFeel} >:</Text>

                <View style={styles.roleBox}>
                        <Picker
                        style={styles.role}
                        selectedValue={format}
                        onValueChange={(itemValue, itemIndex) => {
                          setFormat(itemValue);
                          // handleSwitch(itemValue)
                        }
                        }
                    >
                        <Picker.Item label="AM" value="AM" />
                        <Picker.Item label="PM" value="PM" />

                    </Picker>
                </View>
            </View>
          


        </View>
        </ScrollView>


        <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Text style={styles.content}>Save Event</Text>
        </TouchableOpacity>
    </View>
  );
};

export default AddEvent;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#3464eb",
    minHeight: "100%",

  },
  columnFeel:{
    fontSize: 23,
    color: 'white',
    marginTop: 30,
    fontWeight: 'bold'
  },
  containerFlex:{
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50
  },
  roleBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '20%',
    minHeight: 40,
    margin: 10,
    justifyContent: 'center',
    marginTop: 40,
    // alignItems: 'center'
},
role: {
    textAlign: 'center',
    fontSize: 17,
    color: 'black'
},
  info: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  container: {
    minHeight: 300,
    width: '100%',
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
    fontSize: 17
},
input:{
  backgroundColor: 'white',
  width: '80%',
  marginLeft: '10%',
  height: 40,
  marginTop: 40,
  paddingLeft: 10,
  borderRadius: 10
},

});
