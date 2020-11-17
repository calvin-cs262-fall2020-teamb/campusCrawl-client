import React, { useState, } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
var width = Dimensions.get('window').width;

export default function DestinationGuide({ locations, id, endTour, skipStop }){

    const tourStop  = locations.filter(item => item.id === id+1)[0]
    console.log(id)

    return(
        <View style={styles.bar}>
            {/*not sure why this conditional is needed because it seems like it would always be true. but it shows an error when you press the last stop otherwise. */}
            {tourStop ? 
            <Text style={{  fontSize: 23, color: 'black', }}>Go to {tourStop.name}</Text>: null}
            <Text style={{ fontSize: 15, color: 'blue'}}> stop {id+1} of 7</Text>
            <Text style={{ fontSize: 14 }}>In the future, the destination name and a route to follow will be shown. For now, just scroll to the marker and tap it.</Text>
            <TouchableOpacity style={[styles.button, {left: 20}]} onPress={() => { endTour(); }}>
                <Text style={{ fontSize: 23, color: 'black', }}>End Tour</Text>
            </TouchableOpacity>

            {/*Only show skip stop if it's not the last stop (because endTour does what we want and otherwise skip stop will show a nameless destinationGuide screen) */}
            {locations.filter(item => item.id === id+2)[0] ? 
            <TouchableOpacity style={[styles.button, {right: 20}]} onPress={() => { skipStop(); }}>
                    <Text style={{ fontSize: 23, color: 'black', }}>Skip Stop</Text>
            </TouchableOpacity> : null}
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
