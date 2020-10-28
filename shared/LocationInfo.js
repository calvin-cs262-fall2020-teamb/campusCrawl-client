import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

var width = Dimensions.get('window').width;

export default function LocationInfo() {
    return (
        <View style={styles.infoContainer}>
            <Text>Testing Location info please show up</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        position: 'absolute',
        bottom: 0,
        height: 300,
        width: width,
        backgroundColor: 'white',
        zIndex: 10
    }
});