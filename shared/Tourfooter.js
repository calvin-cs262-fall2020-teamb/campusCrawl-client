import React, { useState, } from "react";
import { StyleSheet, Text, View, Button, Platform, TouchableOpacity, Modal } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Hideandshowcomponent from './Hideandshowcomponent'

// export default function Hideandshowcomponent({changeShow}) {
export default function Tourfooter() {

    const [footer, setFooter] = useState(false);

    // {Hideandshowcomponent() ? setFooter(true): null}


    return (
      <Modal visible={footer} animationType={'slide'} transparent={true}>
        <View style={styles.footer}>
          <View style={styles.button1}>
            <Button title='Start Tour' color='#000' onPress={() => setFooter(false)}/>
          </View>  
        </View>
      </Modal>
    );
}



const styles = StyleSheet.create({
    button1: {
      zIndex: 20,
      position: 'absolute',
      alignSelf: 'center',
      bottom: 20,
      width: 150,
      height: 44,
      justifyContent: 'center',
      backgroundColor: '#FFD700',
      borderRadius: 10,
      shadowColor: Platform.OS === 'ios' ? '#808080': null,
      shadowOpacity: Platform.OS === 'ios' ? 0.5: null,
      shadowOffset: Platform.OS === 'ios' ? {width:0, height:2}: null,
    },
    button2: {
      zIndex: 25,
      position: 'absolute',
      right: 35,
      bottom: 20,
      width: 125,
      height: 42,
      justifyContent: 'center',
      backgroundColor: '#A9A9A9',
      borderRadius: 10,
      shadowColor: Platform.OS === 'ios' ? '#808080': null,
      shadowOpacity: Platform.OS === 'ios' ? 0.5: null,
      shadowOffset: Platform.OS === 'ios' ? {width:0, height:2}: null,
      elevation: Platform.OS === 'android' ? 5: null,
    },
    welcome: {
      zIndex: 15,
      backgroundColor: "#fff",
      position: "absolute",
      paddingTop: 35,
      alignItems: 'center',
      bottom: 375,
      left: 30,
      right: 30,
      height: 225,
      borderWidth: 1,
      borderColor: '#A9A9A9',
      borderRadius: 20,
      shadowColor: '#808080',
      shadowOpacity: 1,
      shadowOffset: {width:0, height:0}
    },
    close: {
      zIndex: 30,
      position: 'absolute',
      bottom: 109,
      left: 144,
    },
    Modal: {
      flex: 1,
      marginTop: 100,
    },
    footer: {
      flex: 1,
      backgroundColor: '#000',
    }
  });