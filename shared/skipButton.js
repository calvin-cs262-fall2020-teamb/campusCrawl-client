import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { globalStyles } from "../styles/global";
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';

// define the width of the screen as a variable
const { width } = Dimensions.get('window').width;

// create a screen that guides the user between stops
export default function SkipButton({ locations, id, skipStop }) {
    return(
        <View> 
            { /* only show skip stop if it's not the last stop (because endTour does what we want and otherwise skip stop will show a nameless destinationGuide screen) */}
        {locations.filter((item) => item.id === id + 2)[0]
        ? <TouchableOpacity style={globalStyles.skipButton} onPress={() => { 
            skipStop(), console.log("hello"); 
            }}
          >
            <Text style={{fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular'}}>Skip Stop</Text>
        </TouchableOpacity> : null}
        </View>
       
    )
}

