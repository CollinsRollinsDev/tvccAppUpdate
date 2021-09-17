import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
} from "react-native";

const Login = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.info}> Please, Login below</Text>
            <TextInput style={styles.input} placeholder="email address" />
            <TextInput style={styles.input}  placeholder="password"/>

            
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
     body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bd3508',
    },
    input:{
        backgroundColor: 'white',
        width: 300,
        height: 50,
        marginTop: 50,
        paddingLeft: 10,
        borderRadius: 20
    },
    info:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }

})