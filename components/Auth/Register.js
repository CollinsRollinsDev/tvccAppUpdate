import React from "react";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
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
    Alert
} from "react-native";

const Register = () => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [emailAddress, setEmailAddress] = useState()
    const [userRole, setUserRole] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [btnMsg, setBtnMsg] = useState('Create My Account')

    const handleSubmit = async() => {
        
        
//    if(!firstName || !lastName || !phoneNumber || !userRole || userRole == '' || !emailAddress){
    if(!firstName){
    
    Alert.alert(
        `ERROR!!!`,
        `It seems you are mising something. Please check the information provided and try again`,
        [
        //   {
        //     text: "Cancel",
        //     onPress: () => console.log("Cancel Pressed"),
        //     style: "cancel"
        //   },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );

} else {
    if(password !== confirmPassword){
       
        Alert.alert(
            `ERROR!!!`,
            `Sorry, mismatched credentials!`,
            [
            //   {
            //     text: "Cancel",
            //     onPress: () => console.log("Cancel Pressed"),
            //     style: "cancel"
            //   },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );

    } else{
     setBtnMsg("Registering, please wait...")
     const res = await fetch("http://localhost/8080/signup", {
         body: JSON.stringify({
           firstName: firstName,
           lastName: lastName,
           phoneNumber: phoneNumber,
           userRole: userRole,
           password: password,
           emailAddress: emailAddress
         }),
         headers: {
           "Content-Type": "application/json",
         },
         method: "POST",
       });
   
       const result = await res.json();
        
       Alert.alert(
        `ERROR!!!`,
        `${JSON.stringify(result.message)}`,
        [
        //   {
        //     text: "Cancel",
        //     onPress: () => console.log("Cancel Pressed"),
        //     style: "cancel"
        //   },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    //    alert();
       // setResponse(result)
       // alert(response);
       if(result.success === true){
        //  router.push("/login")
        setBtnMsg("Login success")
       } else{
        setBtnMsg("Sign Up")
       }
       // location.reload();
    }
}


        // Alert.alert(
        //     `Quick Info:`,
        //     `${lastName}`,
        //     [
        //       {
        //         text: "Cancel",
        //         onPress: () => console.log("Cancel Pressed"),
        //         style: "cancel"
        //       },
        //       { text: "OK", onPress: () => console.log("OK Pressed") }
        //     ]
        //   );
    }

    return (
        <ScrollView>
        <View style={styles.body}>
            <View style={styles.container}>
            

                <Text style={styles.info}> Welcome to TVCC. Please, Sign up below.</Text>
                <TextInput onChangeText={(e) => setFirstName(e)} style={styles.input} placeholder="First Name" />
                <TextInput onChangeText={(e) => setLastName(e)} style={styles.input}  placeholder="Last Name"/>
                <TextInput onChangeText={(e) => setPhoneNumber(e)} style={styles.input}  placeholder="Phone Number"/>
                <TextInput onChangeText={(e) => setEmailAddress(e)} style={styles.input}  placeholder="Email Address"/>

                <View style={styles.roleBox}>
                        <Picker
                        style={styles.role}
                        selectedValue={userRole}
                        onValueChange={(itemValue, itemIndex) =>
                        setUserRole(itemValue)
                        }
                    >
                        <Picker.Item label="Role" value="" />
                        <Picker.Item label="Member" value="member" />
                        <Picker.Item label="Worker" value="worker" />
                    </Picker>
                </View>

                <TextInput onChangeText={(e) => setPassword(e)} style={styles.input}  placeholder="Password"/>
                <TextInput onChangeText={(e) => setConfirmPassword(e)} style={styles.input}  placeholder="Confirm Password"/>
                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                    <Text style={styles.btnText}>{btnMsg}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.alt}>
                <Text style={styles.altClick}>
                Already have an account? Sign In!
                </Text>
            </TouchableOpacity>

           
            </View>

           
            
        </View>
        </ScrollView>
    )
}

export default Register


const styles = StyleSheet.create({
     body:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3464eb',
        minHeight: '100%',
        marginBottom: 50
    },
    container:{
        width: '100%',
        padding:"2%",
        marginTop: '5%'
        // height: 'fit-content',
        
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
    info:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    roleBox: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
        marginLeft: '10%',
        height: 40,
        justifyContent: 'center',
        marginTop: 40,
        // alignItems: 'center'
    },
    role: {
        textAlign: 'center',
        fontSize: 17,
        color: 'black'
    },
    btn:{
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
        marginLeft: '10%',
        height: 40,
        justifyContent: 'center',
        marginTop: 40,
        alignItems: 'center'
    },
    btnText:{
        fontSize:17,
        color: 'black',
    },
    alt: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 30,
    },
    altClick: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    }
})