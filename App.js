import React, { useState, useEffect } from "react";
import MapView, { Marker, UrlTile, Overlay } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";
import { globalStyles } from "./styles/global";
import Hideandshowcomponent from "./shared/Hideandshowcomponent";
import Tourfooter from "./shared/Tourfooter";
import Markers from "./shared/markers";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Markers />
      <Hideandshowcomponent />
      <Tourfooter />
    </View>
  );
}

// {show ? <Hideandshowcomponent changeShow={changeShow}/> : null}
