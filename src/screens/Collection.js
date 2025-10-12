import { StyleSheet, Text, View, Image } from 'react-native';
import { PropTypes } from 'prop-types'
import { Cards } from '../data.js';
import AddButton from '../components/AddButton.js';

export default function Collection ({ route }) {
    const { id, name, cardCount} = route.params
    const cards = Cards.filter(card => card.collectionId === id)
    
    return(
        <View>
            <View style={styles.nameContainer}>
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
            <View>
                {cards.map(card => {
                    return(
                        <View>
                            <Text>{card.frontText}</Text>
                            <Text>{card.backText}</Text>
                        </View>
                    )
                })}
            </View>
            <AddButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    nameContainer:{
        justifyContent:"space-between",
        flexDirection:"row",
        margin:30
    },
    name:{
        color:'#595758',
        fontSize:24,
        verticalAlign:'middle',
    },
    iconsArea:{
        alignItems:'center'
    },

})

Collection.propTypes = {
    route: PropTypes.object.isRequired
};