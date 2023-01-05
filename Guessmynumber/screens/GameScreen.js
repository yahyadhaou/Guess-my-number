import { Text, View, Button, Alert } from "react-native"
import { StyleSheet } from "react-native"
import NumberContainer from "../components/game/NumberContainer"
import Title from "../components/ui/Title"
import { useEffect, useState } from "react"
import PrimaryButton from "../components/ui/PrimmaryButton"
function generateRandomBetwen(min,max,exlude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exlude) {
        return generateRandomBetwen(min, max, exlude)
    }
    else {
        return rndNum
    }
}
let minBoundary = 1
let maxboundary = 100
function GameScreen({userNumber,onGameover}){
    const initalGuess=generateRandomBetwen(
        1,
        100,
        userNumber
    )
    const [currentGuess,setcurrentGuess]=useState(initalGuess)
    useEffect(()=>{
        if(currentGuess===userNumber){
onGameover()
        }
    },[currentGuess,userNumber,onGameover])


    function NextGuessHandler(direction) {
        if (direction === "lower" && currentGuess <userNumber || 
        (direction === "greater" && currentGuess > userNumber)) {
           Alert.alert("you know this is worng",[{text:'sorry', style:"cancel"}])
            return
        }
        if (direction === "lower") {
            maxboundary = currentGuess - 1;
            generateRandomBetwen(minBoundary, maxboundary, currentGuess)
        }
        else {
            minBoundary = currentGuess + 1

        }
        const newRndnumber = generateRandomBetwen(minBoundary, maxboundary, currentGuess)
        setcurrentGuess(newRndnumber)

    }
    return (
        <View style={styles.screen}>

            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>

            <View>
                <Text> Higher or Lower</Text>
                <View>
                    <PrimaryButton onPress={NextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={NextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
        </View>
    )
    }
export default GameScreen
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },

})