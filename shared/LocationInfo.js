import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ScrollView, Alert, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get("screen");

// create a screen that shows the information of a location
export default function LocationInfo({ locations, nextStop, endTour, id }) {

    const [tourStop] = locations.filter((item) => item.id === id);

    // validate properties of locations, nextStop, endTour, and id
    LocationInfo.propTypes = { locations: PropTypes.array };
    LocationInfo.propTypes = { nextStop: PropTypes.func };
    LocationInfo.propTypes = { endTour: PropTypes.func };
    LocationInfo.propTypes = { id: PropTypes.number };


    const [alignment] = useState(new Animated.Value(0));

    const bringUpActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    };

    const hideTheActionSheet = () => {
        Animated.timing(alignment, {
            toValue: 0,
            duration: 500,
            useNativeDriver:false
        }).start();
    };

    const actionSheetIntropolate = alignment.interpolate({
        inputRange: [0, 1],
        outputRange: [-height / 1.5 +100, 1]
    });

    const actionSheetStyle = {
        bottom: actionSheetIntropolate
    }

    const gestureHandler = (e) => {
       
        if(e.nativeEvent.contentOffset.y > 0) 
        bringUpActionSheet();
        else hideTheActionSheet();
    };

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
        <View>
        <Animated.View style={[styles.container, actionSheetStyle]}>
            <View>
                <ScrollView 
                    onScroll = {(event) => gestureHandler(event)}
                    //onScroll={(e) => gestureHandler(e)}
                    style={styles.grabber}>
                        <Text style={{color: "transparent"}}>Hi</Text>  
                   
                    <Image style={styles.image} source={{ uri: tourStop.image }} />
                    <View style={styles.titlewrap}>
                        <Text style={styles.title}>{tourStop.greeting}</Text>
                    </View>
                      
                </ScrollView>
                <ScrollView style={{top: 10, marginBottom: 400}}>
                    <View style={styles.infowrap}>
                        <Text style={styles.info}>{tourStop.description}</Text>
                    </View>
                </ScrollView>
            </View>
           

        </Animated.View>
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
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: height/2.4 + 500,
        width: width/1.05,
        borderTopRightRadius: 40,
        marginHorizontal: 10,
        backgroundColor: "transparent",
        zIndex: 30,
        
    }    ,
    grabber: {
        left: 0,
        width: 375,
        height: '40%',
        
    } ,
    image: {
        
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
        paddingBottom: 10,
    },
    info: {
        fontFamily: 'Lato-Light',
        fontSize: 15,
        zIndex: 38,
        textAlign: 'justify',
        color: '#000'
    },
    infowrap: {
        backgroundColor: 'white',
        padding: 20
    },
    buttonwrap: {
        zIndex: 35,
        position: 'absolute',
        bottom: 0,
        flex: 1,
        height: 75,
        width: '100%',
        backgroundColor: "white",
    },
    button1: {
        position: 'absolute',
        bottom: 15,
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
        bottom: 15,
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
    
});
