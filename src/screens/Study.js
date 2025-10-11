import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Study () {
    return(
        <View>
            <Text style={styles.text}>Study Screen</Text>
            <StatusBar></StatusBar>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'green',
        margin:30
    }
})