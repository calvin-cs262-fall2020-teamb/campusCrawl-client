/* title: location information screen
 * description: gives the user a picture and details about each location
 * details:
 * appears when you click override on the destination guide screen
 * filters the locations array to get the right information for each tour stop
 * pops up as a half-screen, but can be swiped up to see more information
 * next button takes you to the destination guide/name screen of the next stop
 * quit button calls a confirmation function before ending the tour
 */

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import HTML from "react-native-render-html";

// create a screen that shows the information of a location
export default function LocationInfo({ locations, nextStop, endTour, id }) {

    // array destructuring to give tourStop the first item in the array
    const [tourStop] = locations.filter((item) => item.id === id);

    // validate properties of locations, nextStop, endTour, and id
    LocationInfo.propTypes = { locations: PropTypes.array };
    LocationInfo.propTypes = { nextStop: PropTypes.func };
    LocationInfo.propTypes = { endTour: PropTypes.func };
    LocationInfo.propTypes = { id: PropTypes.number };

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

    return (
        <View style={{ height: '90%', zIndex: 30, position: 'absolute', backgroundColor: 'transparent', bottom: 0, width: '100%'}}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems: 'center'}} style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10,  padding: 5 }} bounces="false">
                { /* empty element in ScrollView to start infoContainer lower */}
                <View style={styles.clear}>
                </View>
                <View style={styles.grabber}>

                </View>
                { /* second element in ScrollView, location info */}
                <View style={styles.infoContainer}>
                    <View style={styles.titlewrap}>
                        <Text style={styles.title}>{tourStop.greeting}</Text>
                    </View>
                    <Image style={styles.image} source={{ uri: tourStop.image }} />
                    <ScrollView contentContainerStyle={{paddingBottom: 1640}} nestedScrollEnabled={true} style={styles.infowrap}>
                        <HTML style={{ paddingBottom: 800,}} source={{ html: tourStop.description}} />
                        {/* <Text style={styles.info}>{tourStop.description}</Text> */}
                    </ScrollView>
                </View>
            </ScrollView>

            <View style={styles.buttonwrap}>
                { /* show Next Stop button if not last stop */}
                {locations.filter((item) => item.id === id + 1)[0]
                    ? <TouchableOpacity style={[styles.button1, { right: 20 }]} onPress={() => { 
                        nextStop(); 
                        }}
                      >
                        <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular', }}>NEXT  </Text>
                        <AntDesign name="rightcircleo" size={22} color="#3b3b3b" />
                    </TouchableOpacity>
                    : null}

                {/* end tour button  */}
                <TouchableOpacity style={[styles.button2, { left: 20 }]} onPress={ quitConfirmation }>
                    <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular', }}>QUIT  </Text>
                    <AntDesign name="closecircleo" size={22} color="#3b3b3b" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    clear: {
        height: 350,
    },
    grabber: {
        backgroundColor: "lightgray",
        height: 8,
        width: 80,
        marginBottom: 5,
        borderRadius: 8
    },
    infoContainer: {
        height: 595,
        backgroundColor: '#97252B',
        zIndex: 30,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        shadowColor: '#A0A0A0',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.8,
        width: '100%'
    },
    title: {
        fontFamily: 'Lato-Regular',
        fontSize: 28,
        color: '#3b3b3b',
        zIndex: 35,
        textAlign: 'center',
    },
    titlewrap: {
        backgroundColor: 'rgba(255,255,255,0.75)',
        zIndex: 32,
        top: 5,
        alignSelf: 'center',
        width: '100%',
        paddingVertical: 5,
        borderRadius: 10,
    },
    infowrap: {
        position: 'absolute',
        paddingHorizontal: 8,
        paddingVertical: 5,
        height: 2000,
        backgroundColor: '#F2F2F2',
        zIndex: 35,
        width: '100%',
        alignSelf: 'center',
        top: 210,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0 },
    },
    info: {
        fontFamily: 'Lato-Light',
        fontSize: 15,
        zIndex: 38,
        textAlign: 'justify',
        color: '#000',

    },
    buttonwrap: {
        backgroundColor: '#3b3b3b',
        height: 90,
        width: '100%',
        bottom: 0,
        zIndex: 32,
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 0 },
    },
    button1: {
        position: 'absolute',
        bottom: 24,
        zIndex: 35,
        // backgroundColor: '#FFD700',
        backgroundColor: '#E8CC16',
        paddingVertical: 12,
        // paddingHorizontal: 15,
        width: 210,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0 },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button2: {
        position: 'absolute',
        bottom: 24,
        zIndex: 35,
        backgroundColor: '#C0C0C0',
        paddingVertical: 12,
        // paddingHorizontal: 15,
        width: 100,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0 },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 31,
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    image2: {
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 31,
        width: '100%',
        height: 210,
        top: 200,
    },
});