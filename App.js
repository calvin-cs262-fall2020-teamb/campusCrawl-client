import React from "react";
import { View } from "react-native";
import { globalStyles } from "./styles/global";

import Markers from "./shared/markers";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Markers />
    </View>
  );
}

// {show ? <Hideandshowcomponent changeShow={changeShow}/> : null}
