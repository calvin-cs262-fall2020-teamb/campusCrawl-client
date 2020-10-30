import React, { useState, } from "react";
import { StyleSheet, Text, View, Button, Platform, TouchableOpacity, Dimensions, Modal } from "react-native";
var width = Dimensions.get('window').width;

export default function DestinationGuide({ destination }){
    return(
        <View style={styles.bar}>
            <Text style={{  fontSize: 23, color: 'black', }}>Go to stop {destination}</Text>
            <Text style={{ fontSize: 14 }}>In the future, the destination name and a route to follow will be shown. For now, just scroll to the marker and tap it.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
    zIndex: 15,
    position: 'absolute',
    
      bottom: 0,
      flex: 1,
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

