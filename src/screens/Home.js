import { StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem.js';
import AddButton from '../components/AddButton.js';

export default function Home ({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.titleSection}>
                <Text style={styles.title}>My Collections</Text>
                <AddButton/>
            </View>
            <ListItem/>
            <ListItem/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height: "100%",
        padding:30
    },
    titleSection:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        color:"#595758",
        fontSize:30
    },
})