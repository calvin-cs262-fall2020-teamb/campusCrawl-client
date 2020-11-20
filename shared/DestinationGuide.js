import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from "react-native";
import PropTypes from 'prop-types';
import { EvilIcons } from '@expo/vector-icons';
import { globalStyles } from "../styles/global";

// define the width of the screen as a variable
const { width } = Dimensions.get('window').width;

// create a screen that guides the user between stops
export default function DestinationGuide({ locations, id, endTour }) {

    // array destructuring to give tourStop the first item in the array
    const [tourStop] = locations.filter((item) => item.id === id + 1);
    const progress = '../images/' + id + '.jpg';
    const images = [
        require('../images/1.jpg'),
        require('../images/2.jpg'),
        require('../images/3.jpg'),
        require('../images/4.jpg'),
        require('../images/5.jpg'),
        require('../images/6.jpg'),
        require('../images/7.jpg'),
    ]

    // validate properties of locations, id, endTour, and skipStop
    DestinationGuide.propTypes = { locations: PropTypes.array };
    DestinationGuide.propTypes = { id: PropTypes.number };
    DestinationGuide.propTypes = { endTour: PropTypes.func };
    DestinationGuide.propTypes = { skipStop: PropTypes.func };


    return (
       
        <View style={styles.bar}>
          

            <View style={{flexDirection:"row", marginTop: 5, marginLeft: 5, height: 50}}>
                <TouchableOpacity style={ styles.quitButton } onPress={() => { 
                    endTour(); 
                    }}
                >
                    <Text style={{fontSize: 20, color: '#3b3b3b', fontFamily: 'Lato-Regular'}}>Quit</Text>
                </TouchableOpacity>
                
                <View style={{ flexDirection:"row", width: '100%', alignItems: 'center', marginLeft: 5}}>
                 <EvilIcons
                            name="location"
                            size={28}
                            color="#97252B"
                        />
                    {/* not sure why this conditional is needed because it seems like it would always be true. but it shows an error when you press the last stop otherwise. */}
                    {tourStop
                        ? <Text style={styles.text}>{tourStop.name}</Text> : null}
                </View>
                
            </View>
            
            <Image style={styles.progressBar} source={images[id]}/>

            
        </View>
        

    );
}

const styles = StyleSheet.create({

    progressBar: {
        resizeMode: 'contain', 
        width: '100%', 
        height: '100%',
        bottom: 30
    },
    text: {
        fontSize: 18, 
        color: '#97252B',
        
    },
    bar: {
        zIndex: 15,
        position: 'absolute',
        bottom: 0,
        flex: 1,
        height: 125,
        width: '100%',
        backgroundColor: "white",
    },
    
    quitButton: {
        
        backgroundColor: '#C0C0C0',
        paddingVertical: 12,
        // paddingHorizontal: 15,
        width: 80,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 20
    }

});
