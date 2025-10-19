import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AddButton () {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
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