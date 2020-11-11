import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
var width = Dimensions.get('window').width;

export default function Start({ startTour }){
    return( 
        <View style={styles.bar}>            
                <TouchableOpacity style={styles.start} onPress={() => { startTour(); }}>
                    <Text style={styles.startText}>START  TOUR</Text>
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
        height: 110,
        width: width,
        backgroundColor: "#97252B",
        shadowColor: "#808080",
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 0 },
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    start: {
        zIndex: 20,
        zIndex: 25,
        position: 'absolute',
        bottom: 40,
        width: 240,
        // paddingHorizontal: 10,
        height: 50,
        // paddingVertical: 13,
        alignSelf: 'center',
        justifyContent: 'center',
        // backgroundColor: '#FFD700',
        backgroundColor: '#E8CC16',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0 },
    },
    startText: {
        fontFamily: 'Lato-Regular',
        fontSize: 18, 
        color: '#3b3b3b',
        alignSelf: 'center', 
    }
});

