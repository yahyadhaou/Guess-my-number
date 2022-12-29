import { TextInput,View,Button,StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimmaryButton"
function StartGameScreen(){
    return  (<View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} 
        maxLength={2} 
        keyboardType='number-pad'
        autoCapitalize="none"
        autoCorrect={false}
        />
        <PrimaryButton>RESET</PrimaryButton>
        <PrimaryButton>confirm</PrimaryButton>
        </View>)
}
export default StartGameScreen
const styles = StyleSheet.create({
    inputContainer:{
        marginTop:100,
        marginHorizontal:24,
        padding:16,
        backgroundColor:'#72063c',
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOffset: {width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25
    },
    numberInput:{
height:50,
width:50,
textAlign:'center',
fontSize:32,
borderBottomColor:'#ddb52f',
borderBottomWidth:2,
color:"#ddb52f",
marginVertical:8,
fontWeight:"bold"
    }
})