import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SpashScreen from './src/screens/SpashScreen';  
const Stack = createStackNavigator();
  
function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SpashScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}
  
export default App;