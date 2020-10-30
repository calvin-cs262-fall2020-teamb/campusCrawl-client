import React, { useState, useEffect } from "react";
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Markers() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(42.930731);
  const [longitude, setLongitude] = useState(-85.585947);

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
      // region={this.state.region}
      // onRegionChange={this.onRegionChange}
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
      {/* Map image - can replace urlTile within MapView
  <Overlay
   image={'https://calvin.edu/dotAsset/184d0710-a659-4ef6-bc18-d0ac7d9cd057/'}
   bounds={ [[42.9406,-85.5909],[42.9347,-85.5849]] }
  /> */}

      <UrlTile
        urlTemplate={"http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />

      <Marker
        coordinate={{ latitude: 42.930548, longitude: -85.58581 }}
        title="Stop 1"
      ></Marker>
      <Marker
        coordinate={{ latitude: 42.92965, longitude: -85.58762 }}
        title="Stop 2"
      ></Marker>
      <Marker
        coordinate={{ latitude: 42.9293, longitude: -85.58845 }}
        title="Stop 3"
      ></Marker>
      <Marker
        coordinate={{ latitude: 42.93095, longitude: -85.58926 }}
        title="Stop 4"
      ></Marker>
      <Marker
        coordinate={{ latitude: 42.93301, longitude: -85.58917 }}
        title="Stop 5"
      ></Marker>
      <Marker
        coordinate={{ latitude: 42.9333, longitude: -85.58635 }}
        title="Stop 6"
      ></Marker>
      <Marker
        coordinate={{ latitude: 42.93125, longitude: -85.58701 }}
        title="Stop 7"
      ></Marker>

      <Marker
        coordinate={{ latitude: latitude, longitude: longitude }}
        pinColor={"blue"}
        title="You are here"
      >
        {/* <View style={{
            backgroundColor:'white',
            borderWidth: 1,
        }}>
            <Text>You are here</Text>
        </View> */}
      </Marker>
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
