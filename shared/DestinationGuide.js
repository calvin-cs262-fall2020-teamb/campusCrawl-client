import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Alert } from "react-native";
import PropTypes from 'prop-types';
import { globalStyles } from "../styles/global";

// define the width of the screen as a variable
const { width } = Dimensions.get('window').width;

// create a screen that guides the user between stops
export default function DestinationGuide({ locations, id, endTour, skipStop, arriveAtLocation }) {

    // array destructuring to give tourStop the first item in the array
    const [tourStop] = locations.filter((item) => item.id === id + 1);

    // progress meters for each stop
    const images = [
        require('../images/1.jpg'),
        require('../images/2.jpg'),
        require('../images/3.jpg'),
        require('../images/4.jpg'),
        require('../images/5.jpg'),
        require('../images/6.jpg'),
        require('../images/7.jpg'),
    ]

    const nextID = id+1;
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

    // validate properties of locations, id, endTour, and skipStop
    DestinationGuide.propTypes = { locations: PropTypes.array };
    DestinationGuide.propTypes = { id: PropTypes.number };
    DestinationGuide.propTypes = { endTour: PropTypes.func };
    DestinationGuide.propTypes = { skipStop: PropTypes.func };


    return (
       
        <View style={styles.bar}>
          

            <View style={{flexDirection:"row", marginTop: 5, marginLeft: 5, height: 50}}>
                <TouchableOpacity style={ styles.button } onPress={() => { 
                    endTour(); 
                    }}
                >
                    <Text style={{fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular'}}>Quit</Text>
                </TouchableOpacity>
                
                {locations.filter((item) => item.id === id + 2)[0]
                    ? <TouchableOpacity style={[styles.button, {marginLeft: 20, width:125}]} onPress={ skipConfirmation } 
                    >
                        <Text style={{fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular'}}>Skip Stop</Text>
                    </TouchableOpacity> : null}

                <TouchableOpacity style={[styles.button, {marginLeft: 20, width: 125} ]} onPress={() => { 
                    arriveAtLocation();
                    }}
                >
                    <Text style={{fontSize: 15, color: '#3b3b3b', fontFamily: 'Lato-Regular', textAlign: 'center'}}>Override: I'm there</Text>
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
        bottom: 30
    },
    bar: {
        zIndex: 15,
        position: 'absolute',
        bottom: 0,
        flex: 1,
        height: 125,
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
