import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function AddButton ({onPress}) {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}
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

AddButton.propTypes = {
  onPress: PropTypes.func.isRequired
};