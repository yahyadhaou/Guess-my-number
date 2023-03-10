import { Text,View,Pressable,StyleSheet} from "react-native"

function PrimaryButton({children,onPress}) {

    return(
    <View style={styles.buttonOuterConatiner}>
    <Pressable  
    style={({pressed})=> pressed 
    ? [styles.buttonInnerConatiner,styles.pressed]
    : styles.buttonInnerConatiner}
    onPress={onPress} 
    android_ripple={{color:"#640233"}}>
        <Text style={styles.buttonText}>
{children}
        </Text>
    </Pressable>
    </View>
)
}
export default PrimaryButton

const styles =StyleSheet.create({
    buttonOuterConatiner:{
        borderRadius:28,
        margin:4,
        overflow:"hidden",
    },
    buttonInnerConatiner:{
        backgroundColor:"#72063c",
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
       
    },
    buttonText:{
color:'white',
textAlign:'center',

    },
    pressed:{
        opacity:0.75,

    }
})