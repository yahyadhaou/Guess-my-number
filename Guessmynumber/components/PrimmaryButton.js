import { Text,View,Button} from "react-native"
function PrimaryButton({children}) {
    return(
    <View>
        <Text>
{children}
        </Text>
    </View>
)
}
export default PrimaryButton