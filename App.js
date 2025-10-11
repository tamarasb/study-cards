import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home.js';
import Collection from './src/screens/Collection.js';
import Study from './src/screens/Study.js';

const Stack = createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Collection" component={Collection}/>
        <Stack.Screen name="Study" component={Study}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
