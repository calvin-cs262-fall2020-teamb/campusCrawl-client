import React, { useState, useEffect } from "react";
import MapView, { Marker, UrlTile, Overlay } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Modal } from "react-native";
import * as Location from "expo-location";

import Start from './shared/startButton';
import LocationInfo from './shared/LocationInfo';
import DestinationGuide from './shared/DestinationGuide'
import Hideandshowcomponent from './shared/Hideandshowcomponent'
import Tourfooter from "./shared/Tourfooter";


export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(42.930731);
  const [longitude, setLongitude] = useState(-85.585947);
  const [showInfo, setInfoShow] = useState(false);
  const [started, setStart] = useState(false);
  const [id, setID] = useState(0);
  const [inTransit, setTransitStatus] = useState(false);

  const [locations, setLocations] = useState([
    { id: 1, name: "Covenant Fine Arts Center", description: 'The CFAC serves as the host to many of Calvin’s events including the January Series and student activities. It’s also home to the English and Music departments, Center Art Gallery, Event Services, and the Calvin Box Office. The Covenant Fine Arts Center houses two large performance spaces and an art gallery.', 
    image: 'https://calvin.edu/contentAsset/image/4b2bc9e2-5ca1-475e-88c9-1c7a6db5fd1e/photo2/filter/Resize,Jpeg/resize_w/690/jpeg_q/80'},
    { id: 2, name: "Hekman Library"},
    {id: 3, name: "Chapel"},
    {id: 4, name: "Devries Hall"},
    {id: 5, name: "Spoelhof Fieldhouse Complex"},
    {id: 6, name: "Knollcrest Dining Hall"},
    {id: 7, name: "Johnny's/ Campus store"}        
])

  const setRegion = (lat, long) =>{
    setLatitude(lat),
    setLongitude(long)
  }
  const startTour = () => {
    setStart(true)
    setRegion(42.930548, -85.58581)
    setTransitStatus(true)
  }
  const nextStop =() => {
    setTransitStatus(true)
    setInfoShow(false)
  }
  const endTour = () => {
    setStart(false)
    setInfoShow(false)
    setTransitStatus(false)
    setID(0)
  }
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
      setLongitude(location.coords.longitude)
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
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
          urlTemplate={'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png'}
        />
        

        <Marker
          coordinate={{ latitude: 42.930548, longitude: -85.58581 }}
          title="Stop 1"
          onPress={() => {setTransitStatus(false), setID(1), setInfoShow(true), setLatitude(42.930548), setLongitude(-85.58581)}}
        ></Marker>

        <Marker
          coordinate={{ latitude: 42.92965, longitude: -85.58762 }}
          title="Stop 2"
          onPress={() => {setID(2), setInfoShow(true), setLatitude(42.92965), setLongitude(-85.58762)}}
        ></Marker>
        <Marker
          coordinate={{ latitude: 42.92930, longitude: -85.58845 }}
          title="Stop 3"
          onPress={() => {setID(3), setInfoShow(true), setLatitude(42.92930), setLongitude(-85.58845)}}

        ></Marker>
        <Marker
          coordinate={{ latitude: 42.93095, longitude: -85.58926 }}
          title="Stop 4"
          onPress={() => {setID(4), setInfoShow(true), setLatitude(42.93095), setLongitude(-85.58926)}}
        ></Marker>
        <Marker
          coordinate={{ latitude: 42.93301, longitude: -85.58917 }}
          title="Stop 5"
          onPress={() => {setID(5), setInfoShow(true), setLatitude(42.93301), setLongitude(-85.58917)}}
        ></Marker>
        <Marker
          coordinate={{ latitude: 42.93330, longitude: -85.58635 }}
          title="Stop 6"
          onPress={() => {setID(6), setInfoShow(true), setLatitude(42.93330), setLongitude(-85.58635)}}
        ></Marker>
        <Marker
          coordinate={{ latitude: 42.93125, longitude: -85.58701 }}
          title="Stop 7"
          onPress={() => {setID(7), setInfoShow(true), setLatitude(42.93125), setLongitude(-85.58701)}}
        ></Marker>
        <Marker
          coordinate={{latitude: latitude, longitude: longitude }}
          pinColor = {'blue'}  
          title="You are here"        
        >

        </Marker>
      </MapView>
      {console.log(inTransit)}

      {started ? null : <Start startTour={startTour}/>}
      {inTransit ? <DestinationGuide locations={locations} endTour={endTour} id={id} setID={setID}/> : null}
      {showInfo ? <LocationInfo locations={locations} nextStop={nextStop} endTour={endTour} id={id}/> : null}
                

      <Hideandshowcomponent/>
      <Tourfooter/>
    </View>
  );
}

// {show ? <Hideandshowcomponent changeShow={changeShow}/> : null}

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

