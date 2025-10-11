import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ListItem () {
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("Collection")}
        >
            <Text style={styles.name}>
                Collection 1
            </Text>
            <Text style={styles.counter}>
                30 cards
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#e7dcdf85",
        borderStyle:'dashed',
        borderWidth:2,
        borderColor:'#ffeef2',
        borderStartColor: '#ff92c2',
        paddingVertical:12,
        paddingHorizontal: 25,
        marginVertical:5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name:{
        fontWeight:"500",
        color:'#595758',
        fontSize:16
    },
    counter:{
        textAlign:'flex-end',
        color:'#595758',
    }
})