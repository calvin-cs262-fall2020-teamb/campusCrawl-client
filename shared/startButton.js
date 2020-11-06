import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
var width = Dimensions.get('window').width;

export default function Start({ startTour }){
    return( 
        <View style={styles.bar}>            
                <TouchableOpacity style={styles.start} onPress={() => { startTour(); }}>
                    <Text style={{ fontSize: 23, color: '#000',alignSelf: 'center' }}>Start Tour</Text>
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
        height: 100,
        width: width,
        backgroundColor: "#800000",
    },
    start: {
        zIndex: 20,
        zIndex: 25,
        position: 'absolute',
        bottom: 35,
        width: 125,
        height: 46,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFD700',
        borderRadius: 10,
    },
});

