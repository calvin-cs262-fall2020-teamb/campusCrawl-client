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
import AboutScreen from "./AboutScreen";
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

  
  const [isLoading, setLoading] = useState(true);
  const [locations, setData] = useState([]);

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
    setRegion(locations.filter(item => item.id === id+1)[0].latitude, locations.filter(item => item.id === id+1)[0].longitude)
  };
  const skipStop =  () => {
    setID(id+1);
    setRegion(locations.filter(item => item.id === id+2)[0].latitude, locations.filter(item => item.id === id+2)[0].longitude)
  }
  const endTour = () => {
    setStart(false);
    setInfoShow(false);
    setTransitStatus(false);
    setID(0);
  };

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


  let markers = locations.map(marker => (
    <Marker
      key={marker.id}
      coordinate={{
        latitude: marker.latitude,
        longitude: marker.longitude,
      }}
      title={marker.name}
      onPress={() => {
        setTransitStatus(false),
          setID(marker.id),
          setInfoShow(true),
          setLatitude(marker.latitude),
          setLongitude(marker.longitude);
      }}
      >
      </Marker>
  ));

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
        {markers}
      </MapView>

      {console.log(inTransit)}

      {started ? null : <Start startTour={startTour} />}
      {inTransit ? <DestinationGuide locations={locations} endTour={endTour} id={id} skipStop={skipStop} /> : null}
      {showInfo ? (
        <LocationInfo locations={locations} nextStop={nextStop} endTour={endTour} id={id} />
      ) : null}

      <AboutScreen learnMore={learnMore} setLearnMore={setLearnMore} />
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
