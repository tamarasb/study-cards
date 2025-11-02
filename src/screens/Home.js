import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ListItem from '../components/ListItem.js';
import AddButton from '../components/AddButton.js';
import { useState } from 'react';
import AddCollectionModal from '../components/AddCollectionModal.js';
import PropTypes from 'prop-types';

export default function Home (props) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [keyCount, setKeyCount] = useState(10)
    
    function changeModalVisibility(){
        setIsModalVisible(!isModalVisible)
    }
    return(
        <View style={styles.container}>
            <View style={styles.titleSection}>
                <Text style={styles.title}>My Collections</Text>
                <AddButton onPress={changeModalVisibility} />
            </View>
            <ScrollView>
                {props.collections.map(collection => {
                    let cardCount = props.cards.filter(card => card.collectionId === collection.id).length;
                    return(
                        <ListItem 
                            key={collection.id} 
                            id={collection.id} 
                            name={collection.name} 
                            cardCount={cardCount}
                        />
                    )
                })}
            </ScrollView>
            <AddCollectionModal 
                isModalVisible={isModalVisible} 
                changeModalVisibility={changeModalVisibility}
                addCollection={props.addCollection}
                keyCount={keyCount}
                setKeyCount={()=>{setKeyCount(keyCount+1)}}
            />
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
        fontSize:28
    },
})

Home.propTypes = {
    collections: PropTypes.array.isRequired,
    cards: PropTypes.array.isRequired,
    addCollection: PropTypes.func.isRequired
};