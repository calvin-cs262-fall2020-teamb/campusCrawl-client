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
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

// create a screen that guides the user between stops
export default function DestinationGuide({ locations, id, endTour, skipStop, arriveAtLocation }) {

    // progress meters for each stop
    const images = [
        require('../images/1.png'),
        require('../images/2.png'),
        require('../images/3.png'),
        require('../images/4.png'),
        require('../images/5.png'),
        require('../images/6.png'),
        require('../images/7.png'),
    ];

    // confirmation in case Skip or Quit accidently pressed
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
            <View style={{ flexDirection: "row", marginTop: 5, justifyContent: 'center', height: "37%", marginBottom: 10 }}>
                { /* quit button */ }
                <TouchableOpacity style={[styles.button, { flexDirection: "row" }]} onPress={ quitConfirmation }>
                    <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular' }}>QUIT  </Text>
                    <AntDesign name="closecircleo" size={22} color="#3b3b3b" />
                </TouchableOpacity>
                
                { /* only show skip button if NOT last stop */ }
                {locations.filter((item) => item.id === id + 2)[0]
                    ? <TouchableOpacity style={[styles.button, { marginLeft: 15, width: "22%", flexDirection: "row" }]} onPress={ skipConfirmation }>
                        <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular' }}>SKIP  </Text>
                        <Feather name="skip-forward" size={22} color="#3b3b3b" />
                    </TouchableOpacity> : null}

                { /* I'm There button, brings up location info */ }
                <TouchableOpacity style={[styles.button, { marginLeft: 10, width: "45%", backgroundColor: "#E8CC16", borderRadius: 25, flexDirection: "row" }]} onPress={() => { arriveAtLocation(); }}>
                    <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular', textAlign: 'center' }}>I&apos;M THERE   </Text>
                    <AntDesign name="checkcircleo" size={22} color="#3b3b3b" />
                </TouchableOpacity>
                
            </View>
            { /* progress bar to show number of stops and which one you are heading towards */ }
            <Image style={styles.progressBar} source={images[id]}/>
        </View>
    );
}

const styles = StyleSheet.create({

    progressBar: {
        resizeMode: 'contain', 
        width: '100%', 
        height: '100%',
        bottom: "27%",
        marginTop: 5,
        zIndex: 12,
    },
    bar: {
        zIndex: 15,
        position: 'absolute',
        bottom: "1%",
        flex: 1,
        height: "15%",
        width: '100%',
        backgroundColor: "transparent",
    },
    
    button: {
        
        backgroundColor: '#C0C0C0',
        paddingVertical: 12,
        width: "22%",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        zIndex: 20
    }

});