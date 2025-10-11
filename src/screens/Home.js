import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home ({navigation}) {
    return(
        <View>
            <Text style={styles.text}>Home Screen</Text>
            <Button title='1' onPress={() => navigation.navigate("Collection")}/>
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