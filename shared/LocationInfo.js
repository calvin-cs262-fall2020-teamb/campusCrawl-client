import React, {useState} from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width;

export default function LocationInfo({locations, nextStop, endTour, id}) {

    const tourStop = locations.filter(item => item.id === id)[0]

    return (
        <View style={styles.infoContainer}>
            <Text style={{ fontSize: 30}}>Welcome to {tourStop.name}</Text>

                 {/* show Next Stop button if not last stop  */}
            {locations.filter(item => item.id === id+1)[0] ? 
                <TouchableOpacity style={[styles.button, {right: 20}]} onPress={() => { nextStop(); }}>
                    <Text style={{ fontSize: 23, color: 'black', }}>Next Stop</Text>
                </TouchableOpacity>
                : null }

            <TouchableOpacity style={[styles.button, {left: 20}]} onPress={() => { endTour(); }}>
                <Text style={{ fontSize: 23, color: 'black', }}>End Tour</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        position: 'absolute',
        bottom: 0,
        height: 300,
        width: width,
        backgroundColor: 'white',
        zIndex: 20
    },
    button: {
        position: 'absolute',
        bottom: 30,
    }
});