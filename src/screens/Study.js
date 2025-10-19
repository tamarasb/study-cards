import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { PropTypes } from 'prop-types'
import { Cards } from '../mockData.js';
import Card from '../components/Card.js';

export default function Study ({route}) {
    const cardIds = route.params
    const card = Cards.find(card => card.id===cardIds[0]);
    
    return(
        <View style={styles.container}>
            <Card 
                text={card.frontText} 
                side={'FRONT'}
                n={1}
                total={cardIds.length}
            />
            <TouchableOpacity>
                <Image 
                    source={require("../../assets/images/icons8-rotate-50.png")}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:30,
        backgroundColor:"#ffffff",
        justifyContent:'space-evenly',
        alignItems:'center',
        height:'100%'
    },
})

Study.propTypes = {
    route: PropTypes.array.isRequired
}