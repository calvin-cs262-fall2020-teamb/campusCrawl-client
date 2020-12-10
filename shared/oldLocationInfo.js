import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// create a screen that shows the information of a location
export default function OldLocationInfo({ locations, nextStop, endTour, id }) {

    // array destructuring to give tourStop the first item in the array
    const [tourStop] = locations.filter((item) => item.id === id);

    // validate properties of locations, nextStop, endTour, and id
    OldLocationInfo.propTypes = { locations: PropTypes.array };
    OldLocationInfo.propTypes = { nextStop: PropTypes.func };
    OldLocationInfo.propTypes = { endTour: PropTypes.func };
    OldLocationInfo.propTypes = { id: PropTypes.number };

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
    const [HEIGHT, setHeight] = useState(400);
    const [offset, setOffset] = useState(0);
    const [testVal, setTestVal] = useState(400);
    
    const _onScroll = (event) => {
        // from the nativeEvent we can get the contentOffsett
        var offset_y = event.nativeEvent.contentOffset.y;
        var direction = offset_y > offset ? 'down' : 'up';
        console.log(direction);
        setOffset(offset_y);
        console.log("h: ", HEIGHT);
        console.log("Y: ", offset_y);

        if (direction=='down' ) {
         if (testVal>=0){
          // we are scrolling down the list, decrease height of the empty view
            setTestVal(testVal-offset_y)
            setHeight(HEIGHT-offset_y)
         }
         //else{ setHeight(0)}
        }
        if (direction=='up'){
            setTestVal(testVal+offset_y)
            setHeight(HEIGHT+offset_y)
        }
      }

    return (
        <View 
       pointerEvents="box-none"
        style={{ height: 850, zIndex: 30, position: 'absolute', backgroundColor: 'transparent',  bottom: 0, width: '100%' }}>
           
            <View  pointerEvents="box-none"style={{height: '100%', width: '100%', position: 'absolute'}}>
                <View pointerEvents="none" style={{height: HEIGHT, backgroundColor: 'transparent'}} />
                <View style={{ top: testVal-400, height: 850-HEIGHT, backgroundColor: 'white'}}>
                    <ScrollView  onScroll={(event)=> _onScroll(event)}>
                        <View style={styles.infoContainer}>
                        <View style={styles.titlewrap}>
                            <Text style={styles.title}>{tourStop.greeting}</Text>
                        </View>
                        <Image style={styles.image} source={{ uri: tourStop.image }} />
                        <View style={styles.infowrap}>
                            <Text style={styles.info}>{tourStop.description}</Text>
                        </View>
                    </View>
                    </ScrollView>
                </View>
                </View>
            

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
        height: 440,
    },
    infoContainer: {
        height: 1140,
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
        height: 900,
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
