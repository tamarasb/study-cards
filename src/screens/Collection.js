import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropTypes } from 'prop-types'
import { Cards } from '../data.js';
import AddButton from '../components/AddButton.js';
import CardInfo from '../components/CardInfo.js';

export default function Collection ({ route, navegation }) {
    const navigation = useNavigation()
    const { id, name, cardCount} = route.params
    const cards = Cards.filter(card => card.collectionId === id)
    
    return(
        <View style={styles.container}>
            <View style={styles.inline}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text>{cardCount} cards</Text>
                </View>
                
                <View style={styles.iconsArea}>
                    <Image 
                        source={require("../../assets/images/icons8-edit-32.png")}
                    />
                    <Image 
                        source={require("../../assets/images/icons8-delete-24.png")}
                    />
                </View>
            </View>
            <View style={styles.cardsList}>
                {cards.map(card => {
                    return(
                        <CardInfo 
                            key={card.id} {...card}
                        />
                    )
                })}
            </View>
            <View style={[styles.inline, styles.buttons]}>
                <AddButton/>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Study", cards.map(card => card.id))}
                >
                    <Image 
                        source={require("../../assets/images/icons8-play-button-60.png")}
                    />
                </TouchableOpacity>
            </View>
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
    inline:{
        justifyContent:"space-between",
        flexDirection:"row",
    },
    name:{
        color:'#595758',
        fontSize:24,
        verticalAlign:'middle',
    },
    cardsList:{
        marginVertical:20,
    },
    iconsArea:{
        alignItems:'center'
    },
    buttons:{
        marginBottom:10
    }
})

Collection.propTypes = {
    route: PropTypes.object.isRequired,
    navigation: PropTypes.object
}