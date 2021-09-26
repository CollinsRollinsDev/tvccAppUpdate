import React from "react";
import { useState, useEffect, useMemo } from "react";
import useSafeState from "react-use-safe-state";
import { useSelector, useDispatch } from "react-redux";
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
  Alert,
} from "react-native";
import Header from "../Header/Header";
// import events from "../../assets/events.json";
const Event = ({navigation}) => {

  const { userDetails } =
  useSelector((state) => state.useTheReducer);

    const [events, setEvents] = useState();
    const [seconds, setSeconds] = useSafeState();
    const [minutes, setMinutes] = useSafeState();
    const [hours, setHours] = useSafeState();
    const [days, setDays] = useSafeState();
    let [currentId, setCurrentId] = useState()
    const [currentName, setCurrentName] = useState()
    const [currentHost, setCurrentHost] = useState()
    const [deletedBefore, setDeletedBefore] = useState(false)

    function sortFunction(a,b){  
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;  
}; 

    const handleLongPressUpdate = async(id) => {
      Alert.alert(
        `Message!`,
        `Sorry, this feature is not yet avaliable. However, you can delete an event and recreate a new one.`,
        [
          { text: "OK", onPress: () => console.log("err") }
        ]
      );
    }

    const autoDelete = async(id, name, host) => {
     if(userDetails.accountType === "admin"){

      Alert.alert(
        `NOTIFICATION!`,
        `The system detected an event named ${name} and hosted by ${host} that the time seems dued. Do you want this event removed from the database to clean up other user's interface?`,
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Yes", onPress: async() => {
            const res = await fetch("http://10.2.213.237:8080/event", {
              body: JSON.stringify({
                id: id,
                }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "DELETE",
            });
      
            const response = await res.json();
            if(response){
              navigation.push("Event")
            }
          }}
        ]
      )
     }
    }


    useMemo(() => {
      if(!deletedBefore){
        if(currentName && currentHost && currentId){
          if(hours < 0){
            autoDelete(currentId, currentName, currentHost)
            setDeletedBefore(true)
          }
        }
      } 
    }, [hours, currentName, currentHost])


    const handleLongPressDelete = async(id) => {

      if(userDetails.accountType === "admin"){
        Alert.alert(
          `Warning!!!`,
          `Are you sure you wish to delete this event?`,
          [
            {
              text: "No",
              onPress: () => {
                console.log("aborted!")
              },
              style: "cancel"
            },
            { text: "Yes", onPress: async() => {
              
          console.log(id)
          const res = await fetch("http://10.2.213.237:8080/event", {
            body: JSON.stringify({
              id: id,
              }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "DELETE",
          });
  
          const response = await res.json();
  
          if(response.success === true){
            Alert.alert(
              `SUCCESSFUL!`,
              `Event has been deleted.`,
              [
                { text: "OK", onPress: () => navigation.push("Event") }
              ]
            );
  
           } else{
             console.log("already ran")
            Alert.alert(
              `ERROR!`,
              `Something went wrong!.`,
              [
                { text: "OK", onPress: () => console.log("err") }
              ]
            );
  
          }
  
            } }
          ]
        );
  
      } else{
        Alert.alert(
          `NOT AUTHORIZED!`,
          `Sorry, you are not authorized to access this feature.`,
          [
            { text: "OK", onPress: () => null}
          ]
        );

      }
    
    }

  let mappingEvent = events ? events.sort(sortFunction).map((event, index) => {

    if(index === 0){
      let stoppageTime = new Date(`${event.date} ${event.hour}:${event.minutes}:${event.seconds}`).getTime();

      

      // create static countdown
      let staticDateNow = new Date().getTime();
      let remainingStaticTime = stoppageTime - staticDateNow;
      let staticDays = Math.floor(remainingStaticTime / (1000 * 60 * 60 * 24));
      // console.log(staticDays);

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


      setCurrentId(currentId = event._id)
      setCurrentName(event.name)
      setCurrentHost(event.host)


        
        // clear interval if time is up
        remainingTime < 0 ? clearInterval(theTime) : null;
      }, 1000);

      // if(hours < 0){
      //   autoDelete(event._id, event.name, event.host);
      // }

    return (
      <TouchableOpacity
      onLongPress={() => {
        Alert.alert(
          `Hello,`,
          `What do you wish to do?`,
          [
            {
              text: "Update Event",
              onPress: () => handleLongPressUpdate(event.id),
              style: "cancel"
            },
            { text: "Delete Event", onPress: () => handleLongPressDelete(event._id
              ) }
          ]
        );
      }}
       key={index} style={styles.eventBox}>
      <Text style={styles.parentText}>
        Name: <Text style={styles.childText}>{event.name}</Text>
      </Text>

      <Text style={styles.parentText}>
        Date: <Text style={styles.childText}>{event.date}</Text>
      </Text>

      <Text style={styles.parentText}>
        Time: <Text style={styles.childText}>{event.hour}:{event.minutes}:{event.seconds}</Text>
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
    </TouchableOpacity>
    )
      
    } else{

       let stoppageTime = new Date(`${event.date} ${event.hour}:${event.minutes}:${event.seconds}`).getTime();

      // create static countdown
      let staticDateNow = new Date().getTime();
      let remainingStaticTime = stoppageTime - staticDateNow;
      let staticDays = Math.floor(remainingStaticTime / (1000 * 60 * 60 * 24));
      // console.log(staticDays);

      return (
        <TouchableOpacity
        onLongPress={() => {
          Alert.alert(
            `Hello,`,
            `What do you wish to do?`,
            [
              {
                text: "Update Event",
                onPress: () => handleLongPressUpdate(event.id),
                style: "cancel"
              },
              { text: "Delete Event", onPress: () => handleLongPressDelete(event._id
                ) }
            ]
          );
        }}
        key={index} style={styles.eventBox}>
        <Text style={styles.parentText}>
          Name: <Text style={styles.childText}>{event.name}</Text>
        </Text>

        <Text style={styles.parentText}>
          Date: <Text style={styles.childText}>{event.date}</Text>
        </Text>

        <Text style={styles.parentText}>
          Time: <Text style={styles.childText}>{event.hour}:{event.minutes}:{event.seconds}</Text>
        </Text>

        <Text style={styles.parentText}>
          Host: <Text style={styles.childText}>{event.host}</Text>
        </Text>

        {/* <Text style={styles.parentText}>
          Guests: <Text style={styles.childText}>Too Hot To Be Hurt!</Text>
        </Text> */}

        <Text style={styles.parentText}>
          Description: <Text style={styles.childText}>{event.description}</Text>
        </Text>

         <Text style={styles.countdown}>
        Countdown: <Text style={styles.countdownChild}>{staticDays}days to event </Text>
      </Text>
      </TouchableOpacity>
    
      )
    }
  
  }) : null

  const getEvent = async() => {
    const res = await fetch("http://10.2.213.237:8080/event");
    const data = await res.json();
    setEvents(data.response);
  }

  useEffect(() => {
    getEvent();
  }, [])

  const handleAddNote = () => {
    //   console.log("working")
    navigation.push("AddEvent")
  }

  return (
    <View style={styles.body}>
      <Header name="Events" leftSide="search" />
     <ScrollView>
     {
        mappingEvent
      }
     </ScrollView>
    {
      userDetails.accountType === "admin" ?  
      <TouchableOpacity onPress={handleAddNote} style={styles.addBox}>
             <Text style={styles.icon}>
                 add
             </Text>
       </TouchableOpacity> : null
    }

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
  test:{
    fontSize: 30,
    color: 'red',
    position: 'absolute'
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
  addBox: {
    backgroundColor: 'blue',
    height: 70,
    width: 70,
    borderRadius:70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: "80%",
    right: '5%',
  },
  icon: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 17,
  }
});
