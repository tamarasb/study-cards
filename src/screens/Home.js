import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ListItem from '../components/ListItem.js';
import AddButton from '../components/AddButton.js';
import { Collections, Cards } from '../mockData.js';
import { useState } from 'react';
import AddCollectionModal from '../components/AddCollectionModal.js';

export default function Home () {
    const [isModalVisible, setIsModalVisible] = useState(false)
    
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
                {Collections.map(collection => {
                    let cardCount = Cards.filter(card => card.collectionId === collection.id).length;                
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