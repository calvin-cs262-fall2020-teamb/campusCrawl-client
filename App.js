import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is SCRAWL</Text>
      <Text>This app is working</Text>
      <Text>
        (Having played dark souls helps, cuz it's basically that messaging
        system but irl) When you walk around, you can choose to use the app to
        leave a message at the location you are in. The message will be seen by
        others and can be rated if they think it's good. Public messages will of
        course have to be somewhat limited to avoid explicit language. You can
        view messages from afar?(not decided), but you have to be close to put
        down a message or rate the message there. This can be helpful for
        informing students which printers are out of paper or which vending
        machines are not working. It can also be used among friends for inside
        jokes/humor.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
