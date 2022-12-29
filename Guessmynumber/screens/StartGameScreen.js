import { TextInput, View, Button, StyleSheet,Alert } from "react-native"
import PrimaryButton from "../components/ui/PrimmaryButton"
import { useState } from "react"
function StartGameScreen({onepickedNumber}) {
    const[entredNumber,setEntredNumber]=useState('')
    function numberInputHandler(entredText){
setEntredNumber(entredText)
    }
    function ResetInputhandler(){
        setEntredNumber('')
    }
    function confirmInputHandler() {
        const chosenNumber=parseInt(entredNumber);
        if(isNaN(chosenNumber)|| chosenNumber<=0 ||chosenNumber>99){
            Alert.alert('Invalid Number','Number has to be a number between 1---99 ',
            [{text:'Okay' , style:'default',onPress:ResetInputhandler}]
            )
            return 
        }
onepickedNumber(chosenNumber)
    }
    return (<View style={styles.inputContainer}>
        <TextInput style={styles.numberInput}
            maxLength={2}
            keyboardType='number-pad'
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={entredNumber}
        />
        <View style={styles.buttonsContainer} >
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={ResetInputhandler}>RESET</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>confirm</PrimaryButton>
            </View>
        </View>
    </View>)
}
export default StartGameScreen
const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold"
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})