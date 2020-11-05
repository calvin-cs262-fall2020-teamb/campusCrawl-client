import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TouchableOpacity,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// export default function Hideandshowcomponent({changeShow}) {

// export default function Hideandshowcomponent(showFooter) {
export default function Hideandshowcomponent() {
  const [welcomeScreen, setWelcomeScreen] = useState(true);

  const pressHandler = () => {
    setWelcomeScreen(false);
    // showFooter = true;
  };

  return (
    <Modal visible={welcomeScreen} animationType={"slide"} transparent={true}>
      <View style={styles.welcome}>
        <Text style={{ fontSize: 25, color: "#DC0000" }}>
          Welcome To Campus Crawl!
        </Text>
        <View
          style={{
            borderBottomColor: "#A9A9A9",
            borderBottomWidth: 1,
            paddingBottom: 40,
          }}
        >
          <Text style={{ fontSize: 15, paddingTop: 20, fontStyle: "italic" }}>
            Calvin University's virtual campus tour app
          </Text>
        </View>
        <View style={styles.button1}>
          <Button title="Get Started!" color="#000" onPress={pressHandler} />
        </View>
      </View>
    </Modal>

    /* <View style={styles.welcome}>
          <Text style={{ fontSize: 25, color: '#DC0000', }}>
            Welcome To Campus Crawl!
          </Text>
          <View style={{borderBottomColor: '#A9A9A9', borderBottomWidth: 1, paddingBottom: 40,}}>  
            <Text style={{ fontSize: 15, paddingTop: 20, fontStyle: 'italic' }}>
              Calvin University's virtual campus tour app
            </Text>
          </View>
          <View style={styles.button1}>
            <Button title='Start a Tour' color='#000'/>
          </View>
          <View style={styles.button2}>
            <Button title='Learn More' color='#fff'/>
          </View>
          <TouchableOpacity onPress={() => { changeShow() }}>
            <View style={styles.close}>
              <AntDesign name='close' size={28} color='#808080'/>
            </View>
          </TouchableOpacity>
        </View> */
  );
}

const styles = StyleSheet.create({
  button1: {
    zIndex: 20,
    position: "absolute",
    alignSelf: "center",
    bottom: 20,
    width: 150,
    height: 44,
    justifyContent: "center",
    backgroundColor: "#FFD700",
    borderRadius: 10,
    shadowColor: Platform.OS === "ios" ? "#808080" : null,
    shadowOpacity: Platform.OS === "ios" ? 0.5 : null,
    shadowOffset: Platform.OS === "ios" ? { width: 0, height: 2 } : null,
  },
  button2: {
    zIndex: 25,
    position: "absolute",
    right: 35,
    bottom: 20,
    width: 125,
    height: 42,
    justifyContent: "center",
    backgroundColor: "#A9A9A9",
    borderRadius: 10,
    shadowColor: Platform.OS === "ios" ? "#808080" : null,
    shadowOpacity: Platform.OS === "ios" ? 0.5 : null,
    shadowOffset: Platform.OS === "ios" ? { width: 0, height: 2 } : null,
    elevation: Platform.OS === "android" ? 5 : null,
  },
  welcome: {
    zIndex: 15,
    backgroundColor: "#fff",
    position: "absolute",
    paddingTop: 35,
    alignItems: "center",
    bottom: 375,
    left: 30,
    right: 30,
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
