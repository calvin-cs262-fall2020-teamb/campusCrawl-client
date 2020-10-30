import React, {useState} from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';

var width = Dimensions.get('window').width;

export default function LocationInfo({nextStop, endTour, id}) {
    const [locations, setLocations] = useState([
        { id: 1, name: "Covenant Fine Arts Center", description: 'The CFAC serves as the host to many of Calvin’s events including the January Series and student activities. It’s also home to the English and Music departments, Center Art Gallery, Event Services, and the Calvin Box Office. The Covenant Fine Arts Center houses two large performance spaces and an art gallery.', 
        image: 'https://calvin.edu/contentAsset/image/4b2bc9e2-5ca1-475e-88c9-1c7a6db5fd1e/photo2/filter/Resize,Jpeg/resize_w/690/jpeg_q/80'},
        { id: 2, name: "Hekman Library"},
        {id: 3, name: "Chapel"},
        {id: 4, name: "Devries Hall"},
        {id: 5, name: "Spoelhof Fieldhouse Complex"},
        {id: 6, name: "Knollcrest Dining Hall"},
        {id: 7, name: "Johnny's/ Campus store"}        
    ])

    const filtered = locations.filter(item => item.id === id)

    return (
        <View style={styles.infoContainer}>
            <Text style={{ fontSize: 30}}>Welcome to {filtered[0].name}</Text>

                 {/* show Next Stop button if not last stop  */}
            {locations.filter(item => item.id === id+1)[0] ? 
                <TouchableOpacity style={[styles.button, {right: 20}]} onPress={() => { nextStop(); }}>
                    <Text style={{ fontSize: 23, color: 'black', }}>Next Stop</Text>
                </TouchableOpacity>
                : null }

            <TouchableOpacity style={[styles.button, {left: 20}]} onPress={() => { endTour(); }}>
                <Text style={{ fontSize: 23, color: 'black', }}>End Tour</Text>
            </TouchableOpacity>
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
        zIndex: 20
    },
    button: {
        position: 'absolute',
        bottom: 30,
    }
});