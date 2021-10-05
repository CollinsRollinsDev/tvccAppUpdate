import React from "react";
import { useState, useEffect, useCallback } from "react";
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
  Alert,
  RefreshControl,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../../reduxStore/actions";
import AsyncStorage from '@react-native-async-storage/async-storage';



const Profile_Settings = () => {
    return (
        <View style={styles.body}>
            <View style={styles.intro}>
                <Text style={styles.introLeft}>
                    Profile
                </Text>

                <View style={styles.introRight}>
                    <Text>Pencil</Text>
                </View>
            </View>

            <View style={styles.paperArea}>
                <View style={styles.dp}>
                <Image
                  style={styles.stretch}
                  source={require('../../assets/dp.png')}
                />
                </View>
            </View>

        </View>
    )
}

// resizeMode: 'stretch'

const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#3464eb',
    },
    intro: {
        height: 50,
        width: '100%',
        backgroundColor: 'transparent',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    introLeft: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',

    },
    introRight: {
        fontSize: 17,
    },
    paperArea:{
        backgroundColor: 'whitesmoke',
        minHeight: '80%',
        width: '90%',
        marginTop: 50,
        marginLeft: '5%',

    },
    dp: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: 'whitesmoke',
        position:'absolute',
        top:'-10%',
        left:'35%',
        borderWidth: 2,
        borderColor: 'black',
        overflow:'hidden'
    },
    stretch:{
        width: '100%',
        height: '100%',
        // resizeMode: 'stretch',
    }

});

export default Profile_Settings