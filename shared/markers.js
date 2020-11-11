import React, { useState, useEffect } from "react";
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal, Image } from "react-native";
import Start from "./startButton";
import LocationInfo from "./LocationInfo";
import DestinationGuide from "./DestinationGuide";
import { MaterialIcons } from '@expo/vector-icons';

import WelcomeScreen from "./WelcomeScreen";
import Tourfooter from "./Tourfooter";
import { globalStyles } from "../styles/global";

export default function Markers() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(42.930731);
  const [longitude, setLongitude] = useState(-85.585947);
  const [showInfo, setInfoShow] = useState(false);
  const [started, setStart] = useState(true);
  const [id, setID] = useState(0);
  const [inTransit, setTransitStatus] = useState(false);
  const [learnMore, setLearnMore] = useState(false);

  const setRegion = (lat, long) => {
    setLatitude(lat), setLongitude(long);
  };
  const startTour = () => {
    setStart(true);
    setRegion(42.930548, -85.58581);
    setTransitStatus(true);
  };
  const nextStop = () => {
    setTransitStatus(true);
    setInfoShow(false);
  };
  const endTour = () => {
    setStart(false);
    setInfoShow(false);
    setTransitStatus(false);
    setID(0);
  };

  const [locations, setLocations] = useState([

    { id: 1, name: "Covenant Fine Arts Center", greeting: "Welcome to the \nCovenant Fine Arts Center", description: 'The CFAC serves as the host to many of Calvin’s events including the January Series and student activities. It’s also home to the English and Music departments, Center Art Gallery, Event Services, and the Calvin Box Office. The Covenant Fine Arts Center houses two large performance spaces and an art gallery.', 
    image: 'https://calvin.edu/contentAsset/image/e639c61e-0f83-4304-b2ec-84aa6fc83d46/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
    { id: 2, name: "Hekman Library", greeting: "Welcome to the \nHekman Library", description: 'The Hekman Library supports the curricular needs and scholarship of the Calvin community. It maintains a relevant and expansive collection of easily accessible resources and offers knowledgeable research assistance and instruction in a hospitable environment.', 
    image: 'https://calvin.edu/contentAsset/image/009d93b1-4381-4179-998d-53c85433c228/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
    {id: 3, name: "University Chapel", greeting: "Welcome to the \nChapel", description: 'Chapel is from 10–10:20 a.m. and is held in the chapel sanctuary. It features different styles of worship, themes, and speakers each day. We have a weekly rhythm which helps shape us as a community as we dedicate ourselves to begin, believe, belong, be still, and be loud together.',
    image: 'https://calvin.edu/contentAsset/image/4e424654-8d93-4ee6-bd69-3a90cf96eacd/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
    {id: 4, name: "DeVries Hall", greeting: "Welcome to \nDeVries Hall", description: 'DeVries Hall is home to the chemistry and biochemistry and biology departments, as well as a herbarium which houses over 8,000 pressed plant specimens, thousands of insects, and hundreds of mammals, birds, and reptiles.', 
    image: 'https://calvin.edu/contentAsset/image/031ceeea-2337-40e7-aa14-04f14ec33d14/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
    {id: 5, name: "Spoelhof Fieldhouse Complex", greeting: "Welcome to the \nSpoelhof Fieldhouse Complex", description: 'Home of the Calvin Knights, the entire complex accounts for roughly 10% of the total square footage around the campus: 362,000 square feet. The Spoelhof complex includes six classrooms, and is the hub to the Climbing Center, Hoogenboom Health & Recreation Center, Huizenga Tennis & Track Center, Morren Fitness Center, Van Noord Arena, and Venema Aquatic Center.',
    image: 'https://calvin.edu/contentAsset/image/fded4cb7-5350-4bfd-9706-55062850b2a3/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
    {id: 6, name: "Knollcrest Dining Hall", greeting: "Welcome to \nKnollcrest Dining Hall", description: 'Get the best all-around campus dining experience at Knollcrest Dining Hall. Our homie, spacious atmosphere is both inviting and safe for our campus community. Where students and faculty can come to escape the rigor of college life, eat fresh creative meals, and enjoy that sense of community you can only get at Knollcrest.',
    image: 'https://calvin.edu/contentAsset/image/23de6533-f827-4641-b138-91967fe128ee/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80.jpeg'},
    {id: 7, name: "Johnny's and Campus Store", greeting: "Welcome to Johnny's \n& the Campus store", description: "Johnny\'s Café offers freshly made breakfast sandwiches, baked goods and a cereal bar. At lunch, the menu features daily specials, our all-American grill, grab-n-go sandwiches and salads, and an array of beverages and snacks. Calvin's Campus Store is where you'll find all your Calvin merchandise, textbooks, and office supplies, along with other basic necessities.",
    image: 'https://calvinchimes.org/wp-content/uploads/2014/01/johnnys-1495x1000.jpg'}        
    ])

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <MapView
        style={globalStyles.mapStyle}
        showsUerLocation={true}
        followsUserLocation={true}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0032,
          longitudeDelta: 0.0031,
        }}
      >
        <UrlTile
          urlTemplate={"http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />

        <Marker
          coordinate={{ latitude: 42.930548, longitude: -85.58581 }}
          title="Stop 1"
          onPress={() => {
            setTransitStatus(false),
              setID(1),
              setInfoShow(true),
              setLatitude(42.930548),
              setLongitude(-85.58581);
          }}
        ></Marker>

        <Marker
          coordinate={{ latitude: 42.92965, longitude: -85.58762 }}
          title="Stop 2"
          onPress={() => {
            setID(2),
              setInfoShow(true),
              setLatitude(42.92965),
              setLongitude(-85.58762);
          }}
        ></Marker>
        <Marker
          coordinate={{ latitude: 42.9293, longitude: -85.58845 }}
          title="Stop 3"
          onPress={() => {
            setID(3),
              setInfoShow(true),
              setLatitude(42.9293),
              setLongitude(-85.58845);
          }}
        ></Marker>
        <Marker
          coordinate={{ latitude: 42.93095, longitude: -85.58926 }}
          title="Stop 4"
          onPress={() => {
            setID(4),
              setInfoShow(true),
              setLatitude(42.93095),
              setLongitude(-85.58926);
          }}
        ></Marker>
        <Marker
          coordinate={{ latitude: 42.93301, longitude: -85.58917 }}
          title="Stop 5"
          onPress={() => {
            setID(5),
              setInfoShow(true),
              setLatitude(42.93301),
              setLongitude(-85.58917);
          }}
        ></Marker>
        <Marker
          coordinate={{ latitude: 42.9333, longitude: -85.58635 }}
          title="Stop 6"
          onPress={() => {
            setID(6),
              setInfoShow(true),
              setLatitude(42.9333),
              setLongitude(-85.58635);
          }}
        ></Marker>
        <Marker
          coordinate={{ latitude: 42.93125, longitude: -85.58701 }}
          title="Stop 7"
          onPress={() => {
            setID(7),
              setInfoShow(true),
              setLatitude(42.93125),
              setLongitude(-85.58701);
          }}
        ></Marker>
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          pinColor={"blue"}
          title="You are here"
        ></Marker>

        {/* {console.log(inTransit)}

      {started ? null : <Start startTour={startTour} />}
      {inTransit ? <DestinationGuide destination={id + 1} /> : null}
      {showInfo ? (
        <LocationInfo nextStop={nextStop} endTour={endTour} id={id} />
      ) : null} */}
      </MapView>

      {/* <Markers /> */}
      {console.log(inTransit)}

      {started ? null : <Start startTour={startTour} />}
      {inTransit ? <DestinationGuide locations={locations} endTour={endTour} id={id} setID={setID} /> : null}
      {showInfo ? (
        <LocationInfo locations={locations} nextStop={nextStop} endTour={endTour} id={id} />
      ) : null}

      {/* modal with text formatted */}
      <Modal visible={learnMore} animationType={'slide'} transparent={true} style={globalStyles.learnModal}>
        <View style={globalStyles.insideLearn}>
          <MaterialIcons
            name='close'
            size={28}
            color='#808080'
            onPress={() => setLearnMore(false)}
            style={globalStyles.closeLearn}
          />
          <Text style={globalStyles.learnHeader}>
            About Campus Crawl
          </Text>
          <View style={globalStyles.learnText}>
            <Image style={globalStyles.calvinImage} source={require('../images/calvincampus.jpg')} />
            <Text style={globalStyles.infoText}>
              Campus Crawl is designed to give you a meaningful experience of Calvin University's campus.
              This self-guided tour takes you to all the important buildings and locations you will need for your college life.
            </Text>
            <Text style={globalStyles.secondHeader}>
              How To Use:
            </Text>
            <Text style={globalStyles.secondText}>
              1. Press Start Tour!{"\n"}
              2. The app will guide you to the first tour stop{"\n"}
              3. Upon arrival, you will see an information page pop up{"\n"}
              4. You can swipe up to see more information (and other fun facts) about that stop{"\n"}
              5. When you finish exploring that location, press Next to continue the tour{"\n"}
              {"\n"}
              * You can end the tour at any time by pressing End Tour on the bottom left{"\n"}
              * To skip a particular stop, press Skip Stop and move on to the next stop.

            </Text>
          </View>
        </View>
      </Modal>

      {/* info button to toggle Modal */}
      <TouchableOpacity style={globalStyles.modalToggle}>
        <View>
          <MaterialIcons
            name='info'
            size={26}
            onPress={() => setLearnMore(true)}
          />
        </View>
      </TouchableOpacity>

      <WelcomeScreen endTour={endTour} />
      <Tourfooter />
    </View>
  );
}
