import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';

export default function DestinationName({ locations, id }) {

    const [tourStop] = locations.filter((item) => item.id === id + 1);

    return(
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
    )

    }

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            top: 60,
            height: 100,
            zIndex: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        background: {
            height: 80,
            backgroundColor: '#97252B',
            zIndex: 20,
            flexDirection:"row", 
            alignItems: 'center', 
            justifyContent: 'center', 
            width: 350,
            borderRadius: 15
        },
        text: {
            fontSize: 25, 
            color: 'white',
            
        },
    })