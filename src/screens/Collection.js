import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Collection () {
    return(
        <View>
            <Text style={styles.text}>Collection Screen</Text>
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