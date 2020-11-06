import { StyleSheet, Dimensions } from "react-native";

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
  modalToggle: {
    zIndex: 15,
    position: "absolute",
    alignItems: 'flex-end',
    top: 32,
    bottom: 10,
    left: 0,
    right: 15,
    height: 25,
  },
  learnModal: {
    flex: 1,
  },
  insideLearn: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 20,
    shadowColor: '#808080',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    backgroundColor: '#ffffff'
  },
  closeLearn: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  learnContent: {
    padding: 10,

  },
});
