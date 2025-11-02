import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Collections as MockCollections, Cards as MockCards} from './src/mockData.js';
import Home from './src/screens/Home.js';
import Collection from './src/screens/Collection.js';
import Study from './src/screens/Study.js';
import { useState } from 'react';

const Stack = createNativeStackNavigator()

export default function App() {
    const [collections, setCollections] = useState(MockCollections)
    const [cards, setCards] = useState(MockCards);

    const addCollection = (collection)=>{setCollections([...collections, collection])}
    const addCard = (card)=>{setCards([...cards, card])}

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home">
                    {(props) => (
                        <Home 
                            {...props} 
                            collections={collections} 
                            cards={cards} 
                            addCollection={addCollection} 
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="Collection">
                    {(props) => (
                        <Collection 
                            {...props} 
                            cards={cards} 
                            addCard={addCard} 
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="Study">
                    {(props) => (
                        <Study 
                            {...props} 
                            cards={cards}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
