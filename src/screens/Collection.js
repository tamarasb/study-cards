import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PropTypes } from 'prop-types'
import AddButton from '../components/AddButton.js';
import CardInfo from '../components/CardInfo.js';
import AddCardModal from '../components/AddCardModal.js';
import { useState } from 'react';

export default function Collection ({ route, cards, addCard}) {
    const navigation = useNavigation()
    const { id, name, cardCount} = route.params
    const collectionCards = cards.filter(card => card.collectionId === id)
    const [keyCount, setKeyCount] = useState(cards.length+1);
    const [isModalVisible, setIsModalVisible] = useState(false)

    function changeModalVisibility(){
        setIsModalVisible(!isModalVisible)
    }

    return(
        <View style={styles.container}>
            <View style={styles.inline}>
                <View style={styles.info}>
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
            <ScrollView style={styles.cardsList}>
                {collectionCards.map(card => {
                    return(
                        <CardInfo 
                            key={card.id} {...card}
                        />
                    )
                })}
            </ScrollView>
            <View style={[styles.inline, styles.buttons]}>
                <AddButton onPress={changeModalVisibility}/>
                <TouchableOpacity
                    disabled={cardCount === 0}
                    onPress={() => navigation.navigate("Study", cards.map(card => card.id))}
                    style={cardCount === 0 && styles.playButtonDisabled}
                >
                    <Image 
                        source={require("../../assets/images/icons8-play-button-60.png")}
                    />
                </TouchableOpacity>
            </View>
            <AddCardModal
                isModalVisible={isModalVisible}
                changeModalVisibility={changeModalVisibility}
                keyCount={keyCount}
                setKeyCount={()=>{setKeyCount(keyCount+1)}}
                collectionId={id}
                addCard={addCard}
            />
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
    info:{
        flex:1
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
    },
    playButtonDisabled:{
        opacity:.3
    }
})

Collection.propTypes = {
    route: PropTypes.object.isRequired,
    cards: PropTypes.array.isRequired,
    addCard: PropTypes.func.isRequired
}