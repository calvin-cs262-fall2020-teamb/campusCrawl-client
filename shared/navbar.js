import React, { useState, } from "react";
import { StyleSheet, Text, View, Button, Platform, TouchableOpacity, Dimensions, Modal } from "react-native";

var width = Dimensions.get('window').width;

export default function Navbar({setRegion}){

    const [started, setStart] = useState(false);

    return(
        <View style={styles.bar}>
            <Modal visible={!started} transparent={true}>
                <TouchableOpacity style={styles.start} onPress={() => { setRegion(42.930548, -85.58581); setStart(true) }}>
                    <Text style={{ fontSize: 23, color: 'white', }}>Start Tour</Text>
                </TouchableOpacity>
            </Modal>
            <Modal visible={started} style={styles.bar} transparent={true}>
                <TouchableOpacity style={{position: 'absolute', bottom: 22, }} onPress={() => { setStart(false) }}>
                    <Text style={{  fontSize: 23, color: 'black', }}>Stop 1: Covenant Fine Arts Center</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
    zIndex: 15,
    position: 'absolute',
    
      bottom: 0,
      height: 90,
      width: width,
      backgroundColor: "white",
    },
    start: {
        zIndex: 20,
        zIndex: 25,
        position: 'absolute',
        bottom: 22,
        width: 125,
        height: 42,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#A9A9A9',
        borderRadius: 10,
      
    },

});

