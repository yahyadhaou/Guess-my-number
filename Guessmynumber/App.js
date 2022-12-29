import { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet,ImageBackground, SafeAreaView, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
export default function App() {
  const [userNumber,setUserNumber] =useState()
  function pickedNumber(pickedNumber){
setUserNumber(pickedNumber)
  }
  let sccren=<StartGameScreen onepickedNumber={pickedNumber}  />
  if(userNumber){
sccren=<GameScreen />
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
rootScreen:{
  flex:1,
backgroundColor:"#ddb52f"
},
image:{
opacity:0.8
}
});
