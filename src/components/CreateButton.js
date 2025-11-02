import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function CreateButton({onPress}){
    return(
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonContainer}
        >
            <Text style={styles.buttonText}>CREATE</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        paddingVertical: 10,
        paddingHorizontal:15,
        borderRadius:10,
        borderColor:'#ffffff',
        borderWidth:2,
        marginTop:24
    },
    buttonText:{
        color:'#ffffff',
        fontWeight:'bold'
    },
})

CreateButton.propTypes = {
    onPress: PropTypes.func.isRequired,
};