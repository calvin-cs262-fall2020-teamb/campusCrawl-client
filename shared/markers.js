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
import MapView, { Marker, UrlTile } from "react-native-maps";
import * as Location from "expo-location";
import { View, TouchableOpacity, Text } from "react-native";
import Start from "./startButton";
import LocationInfo from "./LocationInfo";
import DestinationGuide from "./DestinationGuide";
import { MaterialIcons } from '@expo/vector-icons';

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
      setRegion(42.930548, -85.58581);
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
    };

    const arriveAtLocation = () => {
      setTransitStatus(false),
        setID(id + 1),
        setInfoShow(true),
        setRegion(locations.filter(item => item.id === id + 1)[0].latitude, locations.filter(item => item.id === id + 1)[0].longitude)
    };

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

    // Handle errors
    let text = "Waiting..";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }

    // define markers with an id, name, coordinates, and press ability
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
      <View style={{ zIndex: -1 }}>
        <MapView
          style={globalStyles.mapStyle}
          showsUserLocation={true}
          followsUserLocation={false}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0032,
            longitudeDelta: 0.0031,
          }}
        >
          { /* google maps street overlay */}
          <UrlTile
            urlTemplate={"http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"}
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
          <View>
            <MaterialIcons
              name='info'
              size={28}
              onPress={() => setLearnMore(true)}
            />
          </View>
        </TouchableOpacity>

        <WelcomeScreen endTour={endTour} />

      </View>
    );
};
