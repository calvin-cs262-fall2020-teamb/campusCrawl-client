import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Modal,
} from "react-native";
import PropTypes from 'prop-types';


// create a welcome screen upon opening the app
export default function WelcomeScreen({ endTour }) {
  const [welcomeScreen, setWelcomeScreen] = useState(true);

  // validate property of endTour as function
  WelcomeScreen.propTypes = { endTour: PropTypes.func };

  // called when "Let's Go" button is pressed
  // makes the modal go away and resets the tour sequence
  const pressHandler = () => {
    setWelcomeScreen(false);
    endTour();
  };

  return (
    <Modal visible={welcomeScreen} animationType={"slide"} transparent={true}>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 25, color: "#97252B", fontFamily: 'Lato-Black' }}>
          Welcome To Campus Crawl!
        </Text>
        <View style={{ borderBottomColor: "#A9A9A9", borderBottomWidth: 1, paddingBottom: 40 }}>
          <Text style={{ fontSize: 16, paddingTop: 20, fontFamily: 'Lato-Light' }}>
            Calvin University&apos;s virtual campus tour app
          </Text>
        </View>
        <TouchableOpacity style={styles.button1} onPress={pressHandler}>
          <Text style={styles.buttonText}>LET&apos;S GO!</Text>
        </TouchableOpacity>
      </View>
    </Modal>

    /* <View style={styles.welcome}>
     *      <Text style={{ fontSize: 25, color: '#DC0000', }}>
     *       Welcome To Campus Crawl!
     *      </Text>
     *     <View style={{borderBottomColor: '#A9A9A9', borderBottomWidth: 1, paddingBottom: 40,}}>
     *       <Text style={{ fontSize: 15, paddingTop: 20, fontStyle: 'italic' }}>
     *         Calvin University's virtual campus tour app
     *       </Text>
     *     </View>
     *     <View style={styles.button1}>
     *       <Button title='Start a Tour' color='#000'/>
     *     </View>
     *     <View style={styles.button2}>
     *       <Button title='Learn More' color='#fff'/>
     *     </View>
     *     <TouchableOpacity onPress={() => { changeShow() }}>
     *       <View style={styles.close}>
     *         <AntDesign name='close' size={28} color='#808080'/>
     *       </View>
     *     </TouchableOpacity>
     *   </View>
     */
  );
}

const styles = StyleSheet.create({
  button1: {
    zIndex: 20,
    position: "absolute",
    alignSelf: "center",
    bottom: 15,
    padding: 12,
    // width: 150,
    // height: 44,
    justifyContent: "center",
    // backgroundColor: "#FFD700",
    backgroundColor: "#97252B",
    borderRadius: 10,
    shadowColor: Platform.OS === "ios" ? "#808080" : null,
    shadowOpacity: Platform.OS === "ios" ? 0.5 : null,
    shadowOffset: Platform.OS === "ios" ? { width: 0, height: 2 } : null,
  },
  buttonText: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    color: '#E8CC16'
  },
  welcome: {
    zIndex: 15,
    backgroundColor: "#fff",
    position: "absolute",
    paddingTop: 35,
    alignItems: "center",
    bottom: 375,
    left: 25,
    right: 25,
    height: 225,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 20,
    shadowColor: "#808080",
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
  },
  close: {
    zIndex: 30,
    position: "absolute",
    bottom: 109,
    left: 144,
  },
  Modal: {
    flex: 1,
    marginTop: 100,
  },
});
