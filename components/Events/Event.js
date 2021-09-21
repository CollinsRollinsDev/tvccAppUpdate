import React from "react";
import { useState, useEffect } from "react";
import useSafeState from "react-use-safe-state";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../Header/Header";
import events from "../../assets/events.json";
const Event = () => {

  // const [seconds, setSeconds] = useState();
  //   const [minutes, setMinutes] = useState();
  //   const [hours, setHours] = useState();
  //   const [days, setDays] = useState()


  let mappingEvent = events.map((event, index) => {
    const [seconds, setSeconds] = useSafeState();
    const [minutes, setMinutes] = useSafeState();
    const [hours, setHours] = useSafeState();
    const [days, setDays] = useSafeState()
    // if(index === 0){
      let stoppageTime = new Date(`${event.date} ${event.time}`).getTime();

      // Using set interval to continuously get the time after each one seconds
      let theTime = setInterval(() => {
        let dateNow = new Date().getTime();
        let remainingTime = stoppageTime - dateNow;
        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
        // Assigning the results to the state variable to function outside scope
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDays(days);
        // clear interval if time is up
        remainingTime < 0 ? clearInterval(theTime) : null;
      }, 1000);

    return (
      <View key={index} style={styles.eventBox}>
      <Text style={styles.parentText}>
        Name: <Text style={styles.childText}>{event.name}</Text>
      </Text>

      <Text style={styles.parentText}>
        Date: <Text style={styles.childText}>{event.date}</Text>
      </Text>

      <Text style={styles.parentText}>
        Time: <Text style={styles.childText}>{event.time}</Text>
      </Text>

      <Text style={styles.parentText}>
        Host: <Text style={styles.childText}>{event.host}</Text>
      </Text>

      {/* <Text style={styles.parentText}>
        Guests: <Text style={styles.childText}></Text>
      </Text> */}

      <Text style={styles.parentText}>
        Description: <Text style={styles.childText}>{event.description}</Text>
      </Text>

      <Text style={styles.countdown}>
        Countdown: <Text style={styles.countdownChild}>{days}d {hours}h {minutes}m {seconds}s </Text>
      </Text>
    </View>
  
    )
      
    // } else{
    //   return (
    //     <View key={index} style={styles.eventBox}>
    //     <Text style={styles.parentText}>
    //       Name: <Text style={styles.childText}>{event.name}</Text>
    //     </Text>

    //     <Text style={styles.parentText}>
    //       Date: <Text style={styles.childText}>{event.date}</Text>
    //     </Text>

    //     <Text style={styles.parentText}>
    //       Time: <Text style={styles.childText}>{event.time}</Text>
    //     </Text>

    //     <Text style={styles.parentText}>
    //       Host: <Text style={styles.childText}>{event.host}</Text>
    //     </Text>

    //     {/* <Text style={styles.parentText}>
    //       Guests: <Text style={styles.childText}>Too Hot To Be Hurt!</Text>
    //     </Text> */}

    //     <Text style={styles.parentText}>
    //       Description: <Text style={styles.childText}>{event.description}</Text>
    //     </Text>
    //   </View>
    
    //   )
    // }
  
  })

  return (
    <View style={styles.body}>
      <Header name="Events" leftSide="search" />
     <ScrollView>
     {
        mappingEvent
      }
     </ScrollView>
     
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  body: {
    minHeight: "100%",
    width: "100%",
    backgroundColor: "#3464eb",
    padding: "2%",
    paddingBottom: 70,
  },
  text: {
    fontSize: 20,
  },
  eventBox: {
    minHeight: 250,
    width: "100%",
    backgroundColor: "#0c146e",
    borderRadius: 20,
    marginTop: 10,
    paddingTop: "10%",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingBottom: "2%",
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  parentText: {
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
  },
  childText: {
    fontSize: 15,
    color: "white",
    // fontWeight: "bold",
  },
  countdown: {
    fontSize: 17,
    color: "red",
    fontWeight: "bold",
    position:'absolute',
    top: 5,
    right: "5%"
  },
  countdownChild: {
    fontSize: 15,
    color: "white",
    textShadowColor: 'black',
    fontWeight: "bold",
  },
});
