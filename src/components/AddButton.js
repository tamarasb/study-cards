import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddButton () {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Collection")}
        >
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:"#595758",
        width:50,
        height:50,
        borderRadius:50
    },
    buttonText:{
        color:"white",
        fontSize:30,
        margin: 'auto'
    }
})