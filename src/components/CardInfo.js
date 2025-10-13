import { StyleSheet, Text, View, Image } from 'react-native';
import { PropTypes } from 'prop-types'

export default function CardInfo ({frontText, backText}) {
    return(
        <View style={styles.container}>
            <View style={styles.frontTextContainer}>
                <Text style={styles.frontText}>{frontText}</Text>
                <View style={styles.icon}>
                    <Image 
                        source={require("../../assets/images/icons8-three-dots-20.png")}
                    />
                </View>
            </View>
            
            <Text style={styles.backText}>{backText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        borderRadius:10,
        backgroundColor:"#ffc8fb",
        borderBottomColor:"#595758",
        borderStyle:"dashed",
        borderBottomWidth:3,
        marginBottom:3
    },
    frontTextContainer:{
        borderBottomColor:'#ffffff',
        borderBottomWidth:3,
        justifyContent:"space-between",
        flexDirection:"row",
        paddingBottom:5
    },
    frontText:{
        color:"#595758",
        fontStyle:'italic',
        fontSize:18
    },
    icon:{
        backgroundColor:"#ffffff",
        borderRadius:50,
        padding: 5
    },
    backText:{
        paddingTop:2,
        color:"#595758",
        fontSize:16
    }
})

CardInfo.propTypes = {
    frontText: PropTypes.string.isRequired,
    backText: PropTypes.string.isRequired
};