import { StyleSheet, Dimensions } from "react-native";
var width = Dimensions.get('window').width;

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
    backgroundColor: '#f0f0f0'
  },
  closeLearn: {
    alignSelf: 'flex-end',
    paddingTop: 8,
    paddingRight: 8,
    zIndex: 20,
  },
  learnHeader: {
    paddingTop: 0,
    paddingLeft: 15,
    fontSize: 30,
    zIndex: 15,
  },

  learnText: {
    backgroundColor: '#ffffff',
    height: '87%',
    width: width - 32,
    position: "absolute",
    bottom: 0,
    zIndex: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  calvinImage: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 31,
    width: width - 105,
    height: 170,
  },

  infoText: {
    top: 180,
    paddingRight: 10,
    left: 10,
  },

  secondHeader: {
    fontSize: 20,
    top: 200,
    fontWeight: 'bold',
    left: 10,
    color: '#8B0000'
  },

  secondText: {
    top: 210,
    left: 10,
    paddingRight: 10,
  },
});
