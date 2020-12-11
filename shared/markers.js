/* title: map screen
 * description: shows the user a map with their location and the marked tour stops
 * details:
 * always in the background
 * uses booleans to set location data and tour status
 * setRegion sets the map window
 * startTour starts the tour sequence
 * nextStop advances the tour sequence
 * skipStop skips one ahead in the tour sequence
 * endTour ends the tour sequence
 * arriveAtLocation pulls up the location information and prepares for the next tour stop
 * the information at each stop is pulled from the heroku data service
 * markers for each stop are created with the pulled location data
 * at any time the about screen can be reached using the button in the top right corner
 */

import React, { useState, useEffect } from "react";
import MapView, { Marker,  } from "react-native-maps";
import * as Location from "expo-location";
import { View, TouchableOpacity,  } from "react-native";
import Start from "./startButton";
import LocationInfo from "./LocationInfo";
import DestinationGuide from "./DestinationGuide";
import { MaterialIcons } from '@expo/vector-icons';
import MapViewDirections from 'react-native-maps-directions'

import WelcomeScreen from "./WelcomeScreen";
import AboutScreen from "./AboutScreen";
import DestinationName from "./DestinationName";
import { globalStyles } from "../styles/global";

// define markers component to place on the map
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

  // define functions for tour navigation
  const setRegion = (lat, long) => {
    setLatitude(lat), setLongitude(long);
  };
  const startTour = () => {
    setStart(true);
    // setRegion(42.930548, -85.58581);
    setTransitStatus(true);
  };
  const nextStop = () => {
    setTransitStatus(true);
    setInfoShow(false);
    setRegion(locations.filter(item => item.id === id + 1)[0].latitude, locations.filter(item => item.id === id + 1)[0].longitude)
  };
  const skipStop = () => {
    setID(id + 1);
    setRegion(locations.filter(item => item.id === id + 2)[0].latitude, locations.filter(item => item.id === id + 2)[0].longitude)
  }
  const endTour = () => {
    setStart(false);
    setInfoShow(false);
    setTransitStatus(false);
    setID(0);
    currentLocation();
  };

  const arriveAtLocation = () => {
    setTransitStatus(false),
      setID(id + 1),
      setInfoShow(true),
      setRegion(locations.filter(item => item.id === id + 1)[0].latitude, locations.filter(item => item.id === id + 1)[0].longitude)
  }

  const origin = { latitude: latitude, longitude: longitude }

  // Load data from webservice
  useEffect(() => {
    fetch('https://campus-crawl-service.herokuapp.com/locations')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // Get location permission, then set location to your current location
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

  const currentLocation = () => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    });
  }

  // Handle errors
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  // Array of Stops
  const coordinates = [
    {
      /* Stop 1 */
      latitude: 42.930548,
      longitude: -85.58581
    },
    {
      /* Stop 2 */
      latitude: 42.92965,
      longitude: -85.58762
    },
    /* Stop 3 */
    {
      latitude: 42.9293,
      longitude: -85.58845
    },
    {
      /* Stop 4 */
      latitude: 42.93095,
      longitude: -85.58926
    },
    {
      /* Stop 5 */
      latitude: 42.93301,
      longitude: -85.58917
    },
    {
      /* Stop 6 */
      latitude: 42.9333,
      longitude: -85.58635
    },
    {
      /* Stop 7 */
      latitude: 42.93125,
      longitude: -85.58701
    }
  ]

  // define markers with an id, name, coordinates, and press ability
  let markers = locations.map(marker => (
    <Marker
      key={marker.id}
      coordinate={{
        latitude: marker.latitude,
        longitude: marker.longitude,
      }}
      title={marker.name}

    >
    </Marker>
  ));


  return (
    <View style={{ zIndex: -1 }}>
      <MapView
        style={globalStyles.mapStyle}
        showsUserLocation={true}
        followsUserLocation={false}
        showsPointsOfInterest={false}
        showsIndoors={false}
        showsBuildings={false}
        provider='google'
        mapType='satellite'
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0032,
          longitudeDelta: 0.0031,
        }}
      >


        {id === 0 ?
          <MapViewDirections
            origin={origin}
            destination={coordinates[0]}
            apikey="AIzaSyAbmQJoOivpC-ZvBkcRUVzP4jAszcUoD6Y"
            strokeWidth={3}
            strokeColor="lightgreen"
            mode="WALKING"
          />
          : null}
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey="AIzaSyAbmQJoOivpC-ZvBkcRUVzP4jAszcUoD6Y"
          strokeWidth={3}
          strokeColor={id === 1 ? "lightgreen" : "blue"}
          mode="WALKING"
        />
        <MapViewDirections
          origin={coordinates[1]}
          destination={coordinates[2]}
          apikey="AIzaSyAbmQJoOivpC-ZvBkcRUVzP4jAszcUoD6Y"
          strokeWidth={3}
          strokeColor={id === 2 ? "lightgreen" : "blue"}
          mode="WALKING"
        />
        <MapViewDirections
          origin={coordinates[2]}
          destination={coordinates[3]}
          apikey="AIzaSyAbmQJoOivpC-ZvBkcRUVzP4jAszcUoD6Y"
          strokeWidth={3}
          strokeColor={id === 3 ? "lightgreen" : "blue"}
          mode="WALKING"
        />
        <MapViewDirections
          origin={coordinates[3]}
          destination={coordinates[4]}
          apikey="AIzaSyAbmQJoOivpC-ZvBkcRUVzP4jAszcUoD6Y"
          strokeWidth={3}
          strokeColor={id === 4 ? "lightgreen" : "blue"}
          mode="WALKING"
        />
        <MapViewDirections
          origin={coordinates[4]}
          destination={coordinates[5]}
          apikey="AIzaSyAbmQJoOivpC-ZvBkcRUVzP4jAszcUoD6Y"
          strokeWidth={3}
          strokeColor={id === 5 ? "lightgreen" : "blue"}
          mode="WALKING"
        />
        <MapViewDirections
          origin={coordinates[5]}
          destination={coordinates[6]}
          apikey="AIzaSyAbmQJoOivpC-ZvBkcRUVzP4jAszcUoD6Y"
          strokeWidth={3}
          strokeColor={id === 6 ? "lightgreen" : "blue"}
          mode="WALKING"
        />

        {markers}
      </MapView>

      { /* display components for tour */}
      {started ? null : <Start startTour={startTour} />}
      {inTransit ? <DestinationGuide locations={locations} endTour={endTour} skipStop={skipStop} arriveAtLocation={arriveAtLocation} id={id} /> : null}
      {inTransit ? <DestinationName locations={locations} id={id} /> : null}


      {showInfo ? (
        <LocationInfo locations={locations} nextStop={nextStop} endTour={endTour} id={id} />
      ) : null}

      <AboutScreen learnMore={learnMore} setLearnMore={setLearnMore} />
      { /* info button to toggle Modal */}
      <TouchableOpacity style={globalStyles.modalToggle}>
        <View style={{ backgroundColor:"black", borderRadius:15 }}> 
          <MaterialIcons
            name='info'
            size={30}
            onPress={() => setLearnMore(true)}
            color='white'
          />
        </View>
      </TouchableOpacity>

      <WelcomeScreen endTour={endTour} setLearnMore={setLearnMore} />


    </View>
  );

