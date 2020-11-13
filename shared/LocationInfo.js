import React, {useState} from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


var width = Dimensions.get('window').width;
    
    
export default function LocationInfo({locations, nextStop, endTour, id}) {

    const tourStop = locations.filter(item => item.id === id)[0]

    return (
        <View style={{height: 850, zIndex:30, position: 'absolute', backgroundColor: 'transparent', bottom: 0, width: width}}>
        <ScrollView >
            <View style={styles.clear}>

            </View>
            <View style={styles.infoContainer}>
                <View style={styles.titlewrap}>
                    <Text style={styles.title}>{tourStop.greeting}</Text>
                </View>
                <Image style={styles.image} source={{uri: tourStop.image}}/>
                            {/*<Image style={styles.image2} source={require('../images/background3.jpeg')}/>*/}
                <View style={styles.infowrap}>
                    <Text style={styles.info}>{tourStop.description}</Text>
                </View> 


                    {/*show Next Stop button if not last stop */}
                    {/* buttons later
                    {locations.filter(item => item.id === id+1)[0] ? 
                    <TouchableOpacity style={[styles.button1, {right: 20}]} onPress={() => { nextStop(); }}>
                        <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular', }}>NEXT  </Text>
                        <AntDesign name='rightcircleo' size={22} color='#3b3b3b'/>
                    </TouchableOpacity>
                    : null }

                <TouchableOpacity style={[styles.button2, {left: 20}]} onPress={() => { endTour(); }}>
                    <Text style={{ fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular', }}>QUIT  </Text>
                    <AntDesign name='closecircleo' size={22} color='#3b3b3b'/>
                    </TouchableOpacity> */}
            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    clear: {
        height: 400,
    },
    Scroll: {
        // flex: 1,
        // backgroundColor: '#fff',
        // zIndex: 29,
        // bottom: 0,
        // height: 850,
        // width: width,
        // position: 'absolute',
    },
    Container: {
        flex: 1,
        backgroundColor: '#800000',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 850,
        // bottom: 0,
        // position: 'absolute',
        // flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column'
    },
    infoContainer: {
        // position: 'absolute',
        // bottom: 0,
        //height: 410,
        // width: width,
        // flex: 1,
        height: 1000,
        backgroundColor: '#97252B',
        zIndex: 30,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        shadowColor: '#A0A0A0',
        shadowOffset: {width:0, height:-5},
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
        paddingVertical: 3,
        paddingHorizontal: 8,
        backgroundColor: '#F2F2F2',
        zIndex: 35,
        width: 390,
        alignSelf: 'center',
        top: 203,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0 },
    },
    info: {
        fontFamily: 'Lato-Light',
        fontSize: 15,
        zIndex: 40,
        textAlign: 'justify',
        color: '#000'
    },
    button1: {
        position: 'absolute',
        bottom: 24,
        zIndex: 32,
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
        zIndex: 32,
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