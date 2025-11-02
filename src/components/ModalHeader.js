import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

export default function ModalHeader({title, changeModalVisibility}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={()=>{changeModalVisibility()}}
            >
                <Image 
                    source={require("../../assets/images/icon-close-16.png")}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:"space-between",
        flexDirection:"row",
        marginBottom:8
    },
    title: {
        paddingTop:8,paddingStart:8,
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff'
    },
    closeButton:{
        alignSelf:'flex-end',
        padding: 8,
        borderColor:"#ffffff",
        borderRadius:50,
        borderWidth:2,
    }
})

ModalHeader.propTypes = {
    title: PropTypes.string.isRequired,
    changeModalVisibility: PropTypes.func.isRequired
};