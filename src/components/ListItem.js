import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropTypes } from 'prop-types'

export default function ListItem (props) {
    const navigation = useNavigation()
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("Collection")}//integrate collections sample data to Home screen
        >
            <Text style={styles.name}>
                {props.name}
            </Text>
            <Text style={styles.counter}>
                n cards
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
ListItem.propTypes = {
  name: PropTypes.string.isRequired,
};