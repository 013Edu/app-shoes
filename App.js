import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/router';
import { AppLoading } from 'expo'
import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton'

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  })



  return (
      <>
         <StatusBar style="light" backgroundColor='#000' translucent={true} />
         <Routes />
      </>
  );
}
