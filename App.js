import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App(){
  
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}
          initialRegion={{
            latitude: 42.930731,
            longitude: -85.585947,
            latitudeDelta: 0.0112,
            longitudeDelta: 0.0111,
           }} 
          >
            <Marker
              coordinate={{ latitude: 42.930548, longitude: -85.585810}}
              title='Stop 1'>
            </Marker>
          </MapView>
          <View style={styles.welcome}>
            <Text style={{fontSize: 25}}>Welcome To Calvin University Campus Crawl!</Text>
          </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  welcome: {
    backgroundColor: '#fff', 
    position: 'absolute', 
    bottom:100, 
    left: 10, 
    right: 10, 
    height: 100, 
    borderWidth: 1
  }
});