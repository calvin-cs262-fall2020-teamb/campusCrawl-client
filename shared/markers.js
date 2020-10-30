import React, { useState, useEffect } from "react";
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Markers() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(42.930731);
  const [longitude, setLongitude] = useState(-85.585947);
  const [showInfo, setInfoShow] = useState(false);
  const [started, setStart] = useState(false);
  const [id, setID] = useState(0);
  const [inTransit, setTransitStatus] = useState(false);

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
    <MapView
      style={styles.mapStyle}
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
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 5,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    zIndex: 10,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  coordinates: {
    fontSize: 10,
  },
});
