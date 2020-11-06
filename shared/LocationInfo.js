import React, {useState} from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from 'react-native';

var width = Dimensions.get('window').width;

{/*
export default function LocationInfo({nextStop, endTour, id}) {
    const [locations, setLocations] = useState([
        { id: 1, name: "Welcome to the \nCovenant Fine Arts Center", description: 'The CFAC serves as the host to many of Calvin’s events including the January Series and student activities. It’s also home to the English and Music departments, Center Art Gallery, Event Services, and the Calvin Box Office. The Covenant Fine Arts Center houses two large performance spaces and an art gallery.', 
        image: 'https://calvin.edu/contentAsset/image/4b2bc9e2-5ca1-475e-88c9-1c7a6db5fd1e/photo2/filter/Resize,Jpeg/resize_w/690/jpeg_q/80.jpeg'},
        { id: 2, name: "Welcome to the \nHekman Library", description: 'The Hekman Library supports the curricular needs and scholarship of the Calvin community. It maintains a relevant and expansive collection of easily accessible resources and offers knowledgeable research assistance and instruction in a hospitable environment.', 
        image: 'https://calvin.edu/contentAsset/image/009d93b1-4381-4179-998d-53c85433c228/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
        {id: 3, name: "Welcome to the \nChapel", description: 'Chapel is from 10–10:20 a.m. and is held in the chapel sanctuary. It features different styles of worship, themes, and speakers each day. We have a weekly rhythm which helps shape us as a community as we dedicate ourselves to begin, believe, belong, be still, and be loud together.',
        image: 'https://calvin.edu/contentAsset/image/4e424654-8d93-4ee6-bd69-3a90cf96eacd/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
        {id: 4, name: "Welcome to \nDevries Hall", description: 'DeVries Hall is home to the chemistry and biochemistry and biology departments, as well as a herbarium which houses over 8,000 pressed plant specimens, thousands of insects, and hundreds of mammals, birds, and reptiles.', 
        image: 'https://calvin.edu/contentAsset/image/031ceeea-2337-40e7-aa14-04f14ec33d14/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
        {id: 5, name: "Welcome to the \nSpoelhof Fieldhouse Complex", description: 'Home of the Calvin Knights, the entire complex accounts for roughly 10% of the total square footage around the campus: 362,000 square feet. The Spoelhof complex includes six classrooms, and is the hub to the Climbing Center, Hoogenboom Health & Recreation Center, Huizenga Tennis & Track Center, Morren Fitness Center, Van Noord Arena, and Venema Aquatic Center.',
        image: 'https://calvin.edu/contentAsset/image/fded4cb7-5350-4bfd-9706-55062850b2a3/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
        {id: 6, name: "Welcome to \nKnollcrest Dining Hall", description: 'Get the best all-around campus dining experience at Knollcrest Dining Hall. Our homie, spacious atmosphere is both inviting and safe for our campus community. Where students and faculty can come to escape the rigor of college life, eat fresh creative meals, and enjoy that sense of community you can only get at Knollcrest.',
        image: 'https://calvin.edu/contentAsset/image/23de6533-f827-4641-b138-91967fe128ee/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
        {id: 7, name: "Welcome to Johnny's \n& the Campus store", description: "Johnny\'s Café offers freshly made breakfast sandwiches, baked goods and a cereal bar. At lunch, the menu features daily specials, our all-American grill, grab-n-go sandwiches and salads, and an array of beverages and snacks. Calvin's Campus Store is where you'll find all your Calvin merchandise, textbooks, and office supplies, along with other basic necessities.",
        image: 'https://calvinchimes.org/wp-content/uploads/2014/01/johnnys-1495x1000.jpg'}        
    ])

    */}
    
    
export default function LocationInfo({locations, nextStop, endTour, id}) {

    const tourStop = locations.filter(item => item.id === id)[0]

    return (
        <View style={styles.infoContainer}>
        {/*
            <View style={styles.titlewrap}>
                <Text style={styles.title}>{filtered[0].name}</Text>
                            <Text style={styles.title}>{filtered[0].name}</Text>
            </View>
            <Image style={styles.image} source={{uri: filtered[0].image}}/>
            <Image style={styles.image2} source={require('../images/background3.jpeg')}/>
            <View style={styles.infowrap}>
                <Text style={styles.info}>{filtered[0].description}</Text>
            </View> */}


            <Text style={{ fontSize: 30}}>Welcome to {tourStop.name}</Text>

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