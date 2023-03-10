import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground, SafeAreaView, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts} from "expo-font"
import AppLoading from "expo-app-loading"
export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsover, setGameIsOver] = useState(true)


   const[fontsloaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf/'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf/'),
  })
  if (!fontsloaded){
    return <AppLoading />
  }
  function pickedNumber(pickedNumber) {

    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }
  function GameOverhandler() {
    setGameIsOver(true)
  }
  let sccren = <StartGameScreen onepickedNumber={pickedNumber} />
  if (userNumber) {
    sccren =
      (<GameScreen userNumber={userNumber} onGameOver={GameOverhandler} />)
  }
  if (gameIsover && userNumber) {
    sccren = <GameOverScreen />
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')} resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.image}>

        <SafeAreaView style={styles.rootScreen}>{sccren}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f"
  },
  image: {
    opacity: 0.8
  }
});
