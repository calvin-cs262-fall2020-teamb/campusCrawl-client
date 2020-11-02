import React, { useState, useEffect } from "react";
import MapView, { Marker, UrlTile, Overlay } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Modal } from "react-native";
import * as Location from "expo-location";
import { globalStyles } from "./styles/global";

import Start from "./shared/startButton";
import LocationInfo from "./shared/LocationInfo";
import DestinationGuide from "./shared/DestinationGuide";
import Hideandshowcomponent from "./shared/Hideandshowcomponent";
import Tourfooter from "./shared/Tourfooter";
import Markers from "./shared/markers";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(42.930731);
  const [longitude, setLongitude] = useState(-85.585947);
  const [showInfo, setInfoShow] = useState(false);
  const [started, setStart] = useState(false);
  const [id, setID] = useState(0);
  const [inTransit, setTransitStatus] = useState(false);

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
  /*const [show, setShow] = useState(true);

  const changeShow = () => {
    setShow(false)
  }*/

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
    <View style={globalStyles.container}>
      <Markers />
    </View>
  );
}

// {show ? <Hideandshowcomponent changeShow={changeShow}/> : null}
