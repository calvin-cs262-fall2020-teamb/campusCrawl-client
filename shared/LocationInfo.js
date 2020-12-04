import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, ScrollView, Alert, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get("screen");

// create a screen that shows the information of a location
export default function LocationInfo({ locations, nextStop, endTour, id }) {

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
        outputRange: [-height / 2.4 + 50, 0]
    });

    const actionSheetStyle = {
        bottom: actionSheetIntropolate
    }

    const gestureHandler = (e) => {
        console.log("hello");
        if(e.nativeEvent.contentOffset.y > 0) 
        bringUpActionSheet();
        else hideTheActionSheet();
    };

    return (
        <Animated.View style={[styles.container, actionSheetStyle]}>
            <View>
                <ScrollView 
                    onScrollBeginDrag = {(event) => gestureHandler(event)}
                    //onScroll={(e) => gestureHandler(e)}
                    style={styles.grabber}>
                        <Text>hey</Text>
                        <Text>hi whats up</Text>
                        <Text> Nevermind</Text>
                </ScrollView>
            </View>
            <Text >Hello This is Action Sheet</Text>

        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: height/2.4,
        width: width/1.05,
        borderTopRightRadius: 40,
        marginHorizontal: 10,
        backgroundColor: "white",
        zIndex: 30,
        
    }    ,
    grabber: {
        left: 0,
        width: 1000,
        height: 50,
        borderTopWidth: 10,
        borderTopColor: '#aaa',
        backgroundColor: "red"
    } 
    
});
