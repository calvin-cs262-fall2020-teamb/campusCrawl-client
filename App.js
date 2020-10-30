import React, { useState, useEffect } from "react";
import MapView, { Marker, UrlTile, Overlay } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { globalStyles } from "./styles/global";
import Hideandshowcomponent from "./shared/Hideandshowcomponent";
import Tourfooter from "./shared/Tourfooter";
import Markers from "./shared/markers";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(42.930731);
  const [longitude, setLongitude] = useState(-85.585947);
  /*const [show, setShow] = useState(true);

  const changeShow = () => {
    setShow(false)
  }*/

  // Map image - can replace urlTile within MapView
  // <Overlay
  //  image={'https://calvin.edu/dotAsset/184d0710-a659-4ef6-bc18-d0ac7d9cd057/'}
  //  bounds={ [[42.9406,-85.5909],[42.9347,-85.5849]] }
  // />

  return (
    <View style={globalStyles.container}>
      <Markers />
      <Hideandshowcomponent />
      <Tourfooter />
    </View>
  );
}

// {show ? <Hideandshowcomponent changeShow={changeShow}/> : null}

// const styles = StyleSheet.create({
//   container: {
//     zIndex: 5,
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mapStyle: {
//     zIndex: 10,
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
//   coordinates: {
//     fontSize: 10,
//   },
// });
