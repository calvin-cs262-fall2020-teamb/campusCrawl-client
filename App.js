import React, { useState, useEffect } from "react";
import MapView, { Marker, UrlTile, Overlay } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

// Map image - can replace urlTile within MapView
// <Overlay 
//  image={'https://calvin.edu/dotAsset/184d0710-a659-4ef6-bc18-d0ac7d9cd057/'}
//  bounds={ [[42.9406,-85.5909],[42.9347,-85.5849]] }
// />

  return (
    <View style={styles.container}>
      <MapView
        // region={this.state.region}
        // onRegionChange={this.onRegionChange}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 42.930731,
          longitude: -85.585947,
          latitudeDelta: 0.0112,
          longitudeDelta: 0.0111,
        }}
      >
        <UrlTile 
          urlTemplate={'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png'}
        /> 

        <Marker
          coordinate={{ latitude: 42.930548, longitude: -85.58581 }}
          title="Stop 1"
        ></Marker>
      </MapView>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 25 }}>
          Welcome To Calvin University Campus Crawl!{" "}
          <Text style={styles.coordinates}>{text}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  welcome: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 100,
    left: 10,
    right: 10,
    height: 100,
    borderWidth: 1,
  },
  coordinates: {
    fontSize: 10,
  },
});

