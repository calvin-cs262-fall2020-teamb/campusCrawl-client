import React, {useState} from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';

var width = Dimensions.get('window').width;
    
    
export default function LocationInfo({locations, nextStop, endTour, id}) {

    const tourStop = locations.filter(item => item.id === id)[0]

    return (
        <View style={styles.infoContainer}>
            <View style={styles.titlewrap}>
                <Text style={styles.title}>{tourStop.name}</Text>
            </View>
            <Image style={styles.image} source={{uri: tourStop.image}}/>
            <Image style={styles.image2} source={require('../images/background3.jpeg')}/>
            <View style={styles.infowrap}>
                <Text style={styles.info}>{tourStop.description}</Text>
            </View> 


                 {/* show Next Stop button if not last stop  */}
            {locations.filter(item => item.id === id+1)[0] ? 
                <TouchableOpacity style={[styles.button1, {right: 20}]} onPress={() => { nextStop(); }}>
                    <Text style={{ fontSize: 23, color: 'black', }}>Next Stop</Text>
                </TouchableOpacity>
                : null }

            <TouchableOpacity style={[styles.button2, {left: 20}]} onPress={() => { endTour(); }}>
                <Text style={{ fontSize: 23, color: 'black', }}>End Tour</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        position: 'absolute',
        bottom: 0,
        height: 410,
        width: width,
        backgroundColor: '#800000',
        zIndex: 30,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        shadowColor: '#A0A0A0',
        shadowOffset: {width:0, height:-5},
        shadowOpacity: 0.8,
    },
    title: {
        fontSize: 28,
        color: '#000',
        zIndex: 35,
        textAlign: 'center',
    },
    titlewrap: {
        backgroundColor: 'rgba(255,255,255,0.75)',
        zIndex: 32,
        top: 5,
        alignSelf: 'center',
        width: 370,
        paddingVertical: 5,
        borderRadius: 10,
    },
    infowrap: {
        paddingVertical: 3,
        paddingHorizontal: 2,
        backgroundColor: '#F2F2F2',
        zIndex: 35,
        width: 390,
        alignSelf: 'center',
        top: 127,
        borderRadius: 8,
    },
    button1: {
        position: 'absolute',
        bottom: 26,
        zIndex: 32,
        backgroundColor: '#FFD700',
        padding: 7,
        borderRadius: 10,
    },
    button2: {
        position: 'absolute',
        bottom: 26,
        zIndex: 32,
        backgroundColor: '#C0C0C0',
        padding: 7,
        borderRadius: 10,
    },
    image: {
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 31,
        width: width,
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    image2: {
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 31,
        width: width,
        height: 210,
        top: 200,
    },
    info: {
        fontSize: 15,
        zIndex: 40,
        textAlign: 'center',
    }
});