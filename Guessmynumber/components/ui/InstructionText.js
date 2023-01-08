import { StyleSheet,Text} from "react-native"

function InstructionText({children}) {
    return  <Text style={styles.InstructionText}> {children}</Text>
}
export default InstructionText
const styles=StyleSheet.create({
    InstructionText:{
        color:"#ddb52f",
        fontSize:24,
        
            },
})