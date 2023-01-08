import { View, Button, Alert } from "react-native"
import { StyleSheet } from "react-native"
import NumberContainer from "../components/game/NumberContainer"
import Title from "../components/ui/Title"
import { useEffect, useState } from "react"
import PrimaryButton from "../components/ui/PrimmaryButton"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import {Ionicons}from '@expo/vector-icons'
function generateRandomBetwen(min, max, exlude) {
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
function GameScreen({ userNumber, onGameOver }) {
    const initalGuess = generateRandomBetwen(
        1,
        100,
        userNumber
    )
    const [currentGuess, setcurrentGuess] = useState(initalGuess)
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])


    function NextGuessHandler(direction) {
        if (direction === "lower" && currentGuess < userNumber ||
            (direction === "greater" && currentGuess > userNumber)) {
            Alert.alert("you know this is worng", [{ text: 'sorry', style: "cancel" }])
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

            <Card>
                <InstructionText> Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={NextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/></PrimaryButton>
                    <PrimaryButton onPress={NextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color="white"/>
                    </PrimaryButton>
                </View>
            </Card>
        </View>
    )
}
export default GameScreen
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
buttonsContainer:{
    flexDirection:'row'
},
})