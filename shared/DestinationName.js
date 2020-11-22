import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';

export default function DestinationName({ locations, id }) {

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
                        {/* not sure why this conditional is needed because it seems like it would always be true. but it shows an error when you press the last stop otherwise. */}
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
