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
      {/* <MapView
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
      </MapView> */}

      <Markers />
      {console.log(inTransit)}

      {started ? null : <Start startTour={startTour} />}
      {inTransit ? <DestinationGuide destination={id + 1} /> : null}
      {showInfo ? (
        <LocationInfo nextStop={nextStop} endTour={endTour} id={id} />
      ) : null}

      <Hideandshowcomponent />
      <Tourfooter />
    </View>
  );
}

// {show ? <Hideandshowcomponent changeShow={changeShow}/> : null}
