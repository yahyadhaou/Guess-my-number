import {LinearGradient} from 'expo-linear-gradient'
import { StyleSheet,ImageBackground, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
export default function App() {
  return (
    <View style={styles.rootScreen}>
    <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover"
    style={styles.rootScreen}
    imageStyle={styles.image}>
    <StartGameScreen />
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
