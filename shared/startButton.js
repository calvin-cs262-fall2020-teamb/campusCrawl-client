import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
var width = Dimensions.get('window').width;

export default function Start({ startTour }){
    return( 
        <View style={styles.bar}>            
                <TouchableOpacity style={styles.start} onPress={() => { startTour(); }}>
                    <Text style={{ fontSize: 23, color: 'white', }}>Start Tour</Text>
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

