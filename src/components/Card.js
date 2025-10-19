import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { PropTypes } from 'prop-types'

export default function Card({text,side,n,total}){

    return(
        <View style={styles.container}>
            <Text style={styles.side}>{side}</Text>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.side}>{n}/{total}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffe4f3',
        width:'100%',
        height:'70%',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
        borderRadius: 10,
        borderColor:"#ff92c17d",
        borderTopWidth:1,
        borderEndWidth:1,
        borderBottomWidth:6,
        borderStartWidth:6,
    },
    side:{
        color:'#ff92c17d',
        fontWeight:'700'
    },
    text:{
        color:"#595758",
        marginVertical:'auto',
        textAlign:'center',
        fontSize:24
    }
})

Card.propTypes = {
    text: PropTypes.string.isRequired,
    side: PropTypes.string.isRequired,
    n: PropTypes.number.isRequired,
    total:  PropTypes.number.isRequired
}