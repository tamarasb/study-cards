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
        borderStyle:'solid',
        borderWidth:.5,
        borderColor:'#ffc8fb',
        borderRadius:10,
        backgroundColor: '#59575815',
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