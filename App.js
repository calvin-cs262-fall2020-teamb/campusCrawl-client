import React, { Component } from "react";
import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
import { Container, Text } from "react-native";

import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

// import Polyline from '@mapbox/polyline';



const origin = { latitude: 42.929232, longitude: -85.588334 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyC3KD0K9ZD67lH17t8SBJMLADejVA_CFqc';

<MapView initialRegion={{
  latitude: 42.929232,
  longitude: -85.588334,
  latitudeDelta: 1,
  longitudeDelta: 1
}}>
  <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
  />
</MapView >

class LocationA extends Component {

  DirectionRequest {
  {
    origin: 'ChIJLcKHxl5NGIgRRLIpEVer9oY',
      destination: 'ChIJIVnGR1hNGIgRG6KJaJhemCE',
        provideRouteAlternatives: false,
          travelMode: 'WALKING',
    },
  unitSystem: google.maps.UnitSystem.IMPERIAL
}

DirectionsService {
  {
    origin: LatLng | String | google.maps.Place,
      destination: LatLng | String | google.maps.Place,
        travelMode: TravelMode,
  }
}

function initMap() {
  var directionsService = new google.maps.DirectionsService();
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var chicago = new google.maps.LatLng(41.850033, -87.6500523);
  var mapOptions = {
    zoom: 7,
    center: chicago
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  directionsRenderer.setMap(map);
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    }
  });
}

// constructor(props) {
//   super(props);

//   this.state = {
//     coodrinate: [
//       {
//         latitude: 42.930548,
//         longitude: -85.58581
//       },

//       {
//         latitude: 42.92965,
//         longitude: -85.58762
//       },
//       {
//         latitude: 42.92930,
//         longitude: -85.5845
//       }
//     ]
//   }

//   this.state = {
//     latitude: null,
//     longitude: null,
//     error: null,
//     concat: null,
//     coords: [],
//     x: 'false',
//     cordLatitude: 42.929232,
//     cordLongitude: -85.588334, //chapel
//   };

//   this.mergeLot = this.mergeLot.bind(this);

// }

// componentDidMount() {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       this.setState({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude,
//         error: null,
//       });
//       this.mergeLot();
//     },
//     (error) => this.setState({ error: error.message }),
//     { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
//   );

// }

// mergeLot() {
//   if (this.state.latitude != null && this.state.longitude != null) {
//     let concatLot = this.state.latitude + "," + this.state.longitude
//     this.setState({
//       concat: concatLot
//     }, () => {
//       this.getDirections(concatLot, "42.930731, -85.585947,"); //bad coordinate what it od
//     });
//   }

// }

// async getDirections(startLoc, destinationLoc) {

//   try {
//     let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&mode=walking&key=API_KEY`)
//     let respJson = await resp.json();
//     let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
//     let coords = points.map((point, index) => {
//       return {
//         latitude: point[0],
//         longitude: point[1]
//       }
//     })
//     this.setState({ coords: coords })
//     this.setState({ x: "true" })
//     return coords
//   } catch (error) {
//     console.log('masuk fungsi')
//     this.setState({ x: "error" })
//     return error
//   }
// }
// render() {

//   return (
//     <MapView style={styles.map} initialRegion={{
//       latitude: 42.930731,
//       longitude: -85.585947,
//       latitudeDelta: 1,
//       longitudeDelta: 1
//     }}>

//       {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
//         coordinate={{ "latitude": this.state.latitude, "longitude": this.state.longitude }}
//         title={"Your Location"}
//       />}

//       {!!this.state.cordLatitude && !!this.state.cordLongitude && <MapView.Marker
//         coordinate={{ "latitude": this.state.cordLatitude, "longitude": this.state.cordLongitude }}
//         title={"Your Destination"}
//       />}

//       {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
//         coordinates={this.state.coords}
//         strokeWidth={2}
//         strokeColor="red" />
//       }

//       {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
//         coordinates={[
//           { latitude: this.state.latitude, longitude: this.state.longitude },
//           { latitude: this.state.cordLatitude, longitude: this.state.cordLongitude },
//         ]}
//         strokeWidth={2}
//         strokeColor="red" />
//       }
//     </MapView>
//   );
// }
// }

// const styles = StyleSheet.create({
//   map: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

export default LocationA;

// import React, { useState, useEffect } from "react";
// import MapView, { Marker, UrlTile, Overlay } from "react-native-maps";
// import { StyleSheet, Text, View, Dimensions } from "react-native";
// import * as Location from "expo-location";
// // import MapViewDirections from 'react-native-maps-directions';

// import Hideandshowcomponent, { temp } from './shared/Hideandshowcomponent'


// export default function App() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [latitude, setLatitude] = useState(42.930731);
//   const [longitude, setLongitude] = useState(-85.585947);
//   const [show, setShow] = useState(true);

//   const changeShow = () => {
//     setShow(false)
//   }

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//       setLatitude(location.coords.latitude);
//       setLongitude(location.coords.longitude)
//     })();
//   }, []);

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   // Map image - can replace urlTile within MapView
//   // <Overlay
//   //  image={'https://calvin.edu/dotAsset/184d0710-a659-4ef6-bc18-d0ac7d9cd057/'}
//   //  bounds={ [[42.9406,-85.5909],[42.9347,-85.5849]] }
//   // />

//   return (
//     <View style={styles.container}>
//       <MapView
//         // region={this.state.region}
//         // onRegionChange={this.onRegionChange}
//         style={styles.mapStyle}
//         showsUerLocation={true}
//         followsUserLocation={true}
//         region={{
//           latitude: latitude,
//           longitude: longitude,
//           latitudeDelta: 0.0032,
//           longitudeDelta: 0.0031,
//         }}
//       >
//         <UrlTile
//           urlTemplate={'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png'}
//         />

//         {/* Possibly condense?
//         <Marker
//           coordinate={[{ latitude: 42.930548, longitude: -85.58581 },
//             { latitude: 42.92965, longitude: -85.58762 }]}
//           title={"Stop 1","Stop 2"}
//           ></Marker>*/}

//         <Marker
//           coordinate={{ latitude: 42.930548, longitude: -85.58581 }}
//           title="Stop 1"
//         ></Marker>
//         <Marker

//           coordinate={{ latitude: latitude, longitude: longitude }}
//           pinColor={'blue'}
//           title="You are here"

//           coordinate={{ latitude: 42.92965, longitude: -85.58762 }}
//           title="Stop 2"
//         ></Marker>
//         <Marker
//           coordinate={{ latitude: 42.92930, longitude: -85.58845 }}
//           title="Stop 3"
//         ></Marker>
//         <Marker
//           coordinate={{ latitude: 42.93095, longitude: -85.58926 }}
//           title="Stop 4"
//         ></Marker>
//         <Marker
//           coordinate={{ latitude: 42.93301, longitude: -85.58917 }}
//           title="Stop 5"
//         ></Marker>
//         <Marker
//           coordinate={{ latitude: 42.93330, longitude: -85.58635 }}
//           title="Stop 6"
//         ></Marker>
//         <Marker
//           coordinate={{ latitude: 42.93125, longitude: -85.58701 }}
//           title="Stop 7"
//         ></Marker>
//         <Marker
//           coordinate={{ latitude: latitude, longitude: longitude }}
//           pinColor={'blue'}
//           title="You are here"
//         >
//           {/* <View style={{
//                     backgroundColor:'white',
//                     borderWidth: 1,
//                 }}>
//                     <Text>You are here</Text>
//                 </View> */}

//         </Marker>
//       </MapView>
//       {console.log(show)}



//       {show ? <Hideandshowcomponent changeShow={changeShow} /> : null}
//     </View>
//   );
// }

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

