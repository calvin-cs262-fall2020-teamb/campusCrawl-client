import React, { useState, } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
var width = Dimensions.get('window').width;

export default function DestinationGuide({ locations, id, endTour, setID }){

    const tourStop  = locations.filter(item => item.id === id+1)[0]

    return(
        <View style={styles.bar}>
            <Text style={{  fontSize: 23, color: 'black', }}>Go to {tourStop.name}</Text>
            <Text style={{ fontSize: 15, color: 'blue'}}> stop {id+1} of 7</Text>
            <Text style={{ fontSize: 14 }}>In the future, the destination name and a route to follow will be shown. For now, just scroll to the marker and tap it.</Text>
            <TouchableOpacity style={[styles.button, {left: 20}]} onPress={() => { endTour(); }}>
                <Text style={{ fontSize: 23, color: 'black', }}>End Tour</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {right: 20}]} onPress={() => { setID(id+1); }}>
                    <Text style={{ fontSize: 23, color: 'black', }}>Skip Stop</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    bar: {
    zIndex: 15,
    position: 'absolute',
    
      bottom: 0,
      flex: 1,
      height: 175,
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
    button: {
        position: 'absolute',
        bottom: 30,
    }

});

