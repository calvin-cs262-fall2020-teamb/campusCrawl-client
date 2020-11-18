import React, {useState} from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


var width = Dimensions.get('window').width;


export default function LocationInfo({ locations, nextStop, endTour, id }) {

    const tourStop = locations.filter(item => item.id === id)[0]

    return (
        <View style={{ height: 850, zIndex: 30, position: 'absolute', backgroundColor: 'transparent', bottom: 0, width: width,  }}>
            <ScrollView style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} bounces='false'>
                {/*Empty element in ScrollView to start infoContainer lower*/}
                <View style={styles.clear}>
                </View>
                {/*Second element in ScrollView, location info*/}
                <View style={styles.infoContainer}>
                    <View style={styles.titlewrap}>
                        <Text style={styles.title}>{tourStop.greeting}</Text>
                    </View>
                    <Image style={styles.image} source={{ uri: tourStop.image }} />
                    {/*<Image style={styles.image2} source={require('../images/background3.jpeg')}/>*/}
                    <View style={styles.infowrap}>
                        <Text style={styles.info}>{tourStop.description}</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.buttonwrap}>
                {/*show Next Stop button if not last stop */}
                {locations.filter(item => item.id === id + 1)[0] ?
                    <TouchableOpacity style={[styles.button1, { right: 20 }]} onPress={() => { nextStop(); }}>
                        <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular', }}>NEXT  </Text>
                        <AntDesign name='rightcircleo' size={22} color='#3b3b3b' />
                    </TouchableOpacity>
                    : null}

                    {/* end tour button  */}
                <TouchableOpacity style={[styles.button2, { left: 20 }]} onPress={() => { endTour(); }}>
                    <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular', }}>QUIT  </Text>
                    <AntDesign name='closecircleo' size={22} color='#3b3b3b' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    clear: {
        height: 440,
    },
    infoContainer: {
        height: 720,
        backgroundColor: '#97252B',
        zIndex: 30,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        shadowColor: '#A0A0A0',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.8,
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
        width: 375,
        paddingVertical: 5,
        borderRadius: 10,
    },
    infowrap: {
        position: 'absolute',
        paddingHorizontal: 8,
        paddingVertical: 5,
        height: 500,
        backgroundColor: '#F2F2F2',
        zIndex: 35,
        width: 390,
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
        color: '#000'
    },
    buttonwrap: {
        backgroundColor: '#3b3b3b',
        height: 90,
        width: width,
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
});