/* title: destination name screen
 * description: tells the user which stop they are heading towards
 * details:
 * appears at the same time as destination guide
 * filters the locations array to get the name of the next stop
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';

// create a banner that tells the user where they are going
export default function DestinationName({ locations, id }) {

    // array destructuring to give tourStop the first item in the array
    const [tourStop] = locations.filter((item) => item.id === id + 1);

    // validate properties of locations, nextStop, endTour, and id
    DestinationName.propTypes = { locations: PropTypes.array };
    DestinationName.propTypes = { id: PropTypes.number };

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                    <EvilIcons
                        name="location"
                        size={28}
                        color="white"
                    />
                    {/* needs to be conditional to avoid error on last stop */}
                    {tourStop
                        ? <Text style={styles.text}>{tourStop.name}</Text> : null}
            </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 65,
        height: 110,
        zIndex: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    background: {
        height: 90,
        backgroundColor: '#97252B',
        zIndex: 20,
        flexDirection: "row", 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: 365,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0 },
    },
    text: {
        fontSize: 25, 
        color: 'white',
        
    },
});
