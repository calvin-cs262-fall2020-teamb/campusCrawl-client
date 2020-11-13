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

  const [isLoading, setLoading] = useState(true);
  const [locations, setData] = useState([]);

  {/* Load data from webservice */}
    useEffect(() => {
      fetch('https://campus-crawl-service.herokuapp.com/locations')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

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
      </MapView>

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
