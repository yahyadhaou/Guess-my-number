import { View,Image, StyleSheet } from "react-native"
import Title from '../components/ui/Title'
function GameOverScreen(){
    return  (<View>
    <Title>
        game is over</Title>
        <View style={styles.imageConatainer}>
         <Image 
         style={styles.image}
         source={require('../assets/images/success.png')} />
         </View>
    </View>)
}
export default GameOverScreen

const styles=StyleSheet.create({
    imageConatainer:{
        borderRadius:200,
        width:400,
        height:400,
        borderWidth:4,
        borderColor:"black",
        overflow:'hidden',
        margin:36,},
        image:{
          width:'100%',
          height:'100%',
        },

})