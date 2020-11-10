import React, {useState} from "react";
import { View } from "react-native";
import { globalStyles } from "./styles/global";
import * as font from 'expo-font';
import { AppLoading } from 'expo';

import Markers from "./shared/markers";

const getFonts = () => font.loadAsync({
  'Metropolis-Black': require('./assets/fonts/Metropolis-Black.otf'),
  'Metropolis-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
  'Metropolis-Regular': require('./assets/fonts/Metropolis-Regular.otf'),
  'Metropolis-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  'Metropolis-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
  'Metropolis-Light': require('./assets/fonts/Metropolis-Light.otf'),
  'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
  'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
  return (
    <View style={globalStyles.container}>
      <Markers />
    </View>
  );
  } else {
    return (
      <AppLoading 
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}


