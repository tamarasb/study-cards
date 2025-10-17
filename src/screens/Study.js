import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { PropTypes } from 'prop-types'
import { Cards } from '../data.js';
import Card from '../components/Card.js';

export default function Study ({route}) {
    const cardIds = route.params
    const card = Cards[0];
    
    return(
        <View style={styles.container}>
            <Card text={card.frontText}/>
            

            <StatusBar></StatusBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:30,
        backgroundColor:"#ffffff",
        justifyContent:'space-between',
        alignContent:'center',
        height:'100%'
    },
})

Study.propTypes = {
    route: PropTypes.array.isRequired
}