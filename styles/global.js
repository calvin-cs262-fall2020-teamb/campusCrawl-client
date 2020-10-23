import {Dimensions} from 'react-native';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
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
  welcome: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 100,
    left: 10,
    right: 10,
    height: 100,
    borderWidth: 1,
  },
});