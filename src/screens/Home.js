import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import ListItem from '../components/ListItem.js';
import AddButton from '../components/AddButton.js';

export default function Home ({navigation}) {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>My Collections</Text>
                <AddButton/>
            </View>
            
            <ListItem></ListItem>
            <ListItem></ListItem>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffeef2',
        height: "100%",
        padding:30
    },
    title:{
        color:"#595758",
        fontSize:30
    },
})