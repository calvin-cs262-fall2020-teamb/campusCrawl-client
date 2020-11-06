import React from "react";
import { View } from "react-native";
import { globalStyles } from "./styles/global";

import Markers from "./shared/markers";

export default function App() {
  return (

    {/*
    
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
      {inTransit ? <DestinationGuide destination={id+1}/> : null}
      {showInfo ? <LocationInfo nextStop={nextStop} endTour={endTour} id={id}/> : null}
                

      <Hideandshowcomponent/>
      <Tourfooter/>

        
      */} 
        
        
        
    <View style={globalStyles.container}>
      <Markers />
       master
    </View>
  );
}

// {show ? <Hideandshowcomponent changeShow={changeShow}/> : null}
