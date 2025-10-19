import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropTypes } from 'prop-types'

export default function ListItem ({id, name, cardCount}) {
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("Collection", {id, name, cardCount})}
        >
            <View style={styles.nameContainer}>
                <Text style={styles.name}>
                    {name}
                </Text>
            </View>
            <Text style={styles.counter}>
                {cardCount} cards
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
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    nameContainer:{
        flex:1,
        marginEnd:10
    },
    name:{
        fontWeight:"500",
        color:'#595758',
        fontSize:16,
    },
    counter:{
        textAlign:'flex-end',
        color:'#595758',
    }
})
ListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cardCount: PropTypes.number.isRequired
};