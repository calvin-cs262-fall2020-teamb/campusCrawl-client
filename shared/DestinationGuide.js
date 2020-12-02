/* title: destination guide screen
 * description: gives the user their progress through the tour, and gives navigation options
 * details:
 * appears at the same time as destination name
 * override button tells the app that you arrived and triggers the LocationInfo screen
 * quit button calls a confirmation function before ending the tour
 * skip button calls a confirmation function before skipping to the next stop
 */

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from "react-native";
import PropTypes from 'prop-types';
import { globalStyles } from "../styles/global";

// create a screen that guides the user between stops
export default function DestinationGuide({ locations, id, endTour, skipStop, arriveAtLocation }) {

    // progress meters for each stop
    const images = [
        require('../images/1.jpg'),
        require('../images/2.jpg'),
        require('../images/3.jpg'),
        require('../images/4.jpg'),
        require('../images/5.jpg'),
        require('../images/6.jpg'),
        require('../images/7.jpg'),
    ];

    const nextID = id + 1;
    const skipConfirmation = () =>
    Alert.alert(
      "Skip Stop",
      "Are you sure you want to skip stop " + nextID + "?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => skipStop() }
      ],
      { cancelable: false }
    );

    const quitConfirmation = () =>
    Alert.alert(
      "Quit tour",
      "Are you sure you want to quit?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => endTour() }
      ],
      { cancelable: false }
    );

    // validate properties of locations, id, endTour, and skipStop
    DestinationGuide.propTypes = { locations: PropTypes.array };
    DestinationGuide.propTypes = { id: PropTypes.number };
    DestinationGuide.propTypes = { endTour: PropTypes.func };
    DestinationGuide.propTypes = { skipStop: PropTypes.func };
    DestinationGuide.propTypes = { arriveAtLocation: PropTypes.func };

    return (
       
        <View style={styles.bar}>
          

            <View style={{ flexDirection: "row", marginTop: 5, justifyContent: 'center', height: 50, marginBottom: 10 }}>
                <TouchableOpacity style={ styles.button } onPress={ quitConfirmation }>
                    <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular' }}>Quit</Text>
                </TouchableOpacity>
                
                {locations.filter((item) => item.id === id + 2)[0]
                    ? <TouchableOpacity style={[styles.button, { marginLeft: 20, width: 125 }]} onPress={ skipConfirmation }>
                        <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular' }}>Skip Stop</Text>
                    </TouchableOpacity> : null}

                <TouchableOpacity style={[styles.button, { marginLeft: 20, width: 140 }]} onPress={() => { 
                    arriveAtLocation();
                    }}
                >
                    <Text style={{ fontSize: 16, color: '#3b3b3b', fontFamily: 'Lato-Regular', textAlign: 'center' }}>Override: I&apos;m there</Text>
                </TouchableOpacity>
                
            </View>
            
            <Image style={styles.progressBar} source={images[id]}/>

        </View>
        

    );
}

const styles = StyleSheet.create({

    progressBar: {
        resizeMode: 'contain', 
        width: '100%', 
        height: '100%',
        bottom: 35,
        marginTop: 5,
        zIndex: 12,
    },
    bar: {
        zIndex: 15,
        position: 'absolute',
        bottom: 10,
        flex: 1,
        height: 135,
        width: '100%',
        backgroundColor: "transparent",
    },
    
    button: {
        
        backgroundColor: '#C0C0C0',
        paddingVertical: 12,
        // paddingHorizontal: 15,
        width: 80,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 20
    }

});
