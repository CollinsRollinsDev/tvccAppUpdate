import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
  Image,
} from "react-native";
import Menus from './Menus'

const HomePage = () => {
    return (
        <View style={styles.body}>
            <View style={styles.upperContainer}>
              <View style={styles.churchText}>
                <Text style={styles.churchName}>Truevine Christian Center</Text>
                <Text style={styles.churchSlogan}>Mount of Grace</Text>
              </View>
           
              <View style={styles.imgView}>
              <Image
                  style={styles.stretch}
                  source={require('../../assets/study.jpg')}
                />
              </View>

              <Image
                  style={styles.logo}
                  source={require('../../assets/logo.png')}
                />              
            </View>
            <Menus />
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'whitesmoke'

  },
  upperContainer:{
    height: '40%',
    backgroundColor: '#3464eb',
    opacity: 0.8,
    position: 'relative',
  },
  churchName:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',

  },
  churchSlogan: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  stretch: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  imgView: {
    zIndex: -1,
    opacity: 0.3,
  },
  logo: {
    height: 120,
    width: 120,
    position: 'absolute',
    top: '25%',
    left: '5%',
    // opacity: 0.8,

  },
  churchText: {
    height: 110,
    width: '58%',
    backgroundColor: 'transparent',
    position : 'absolute',
    top: '30%',
    right: '1%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    
  }

})
