import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SpashScreen from './src/screens/SpashScreen';
import LoginScreen from './src/screens/LoginScreen';
import SocialMediaScreen from './src/screens/SocialMediaScreen';
import CodeConfirmScreen from './src/screens/CodeConfirmScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();
  
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Splash" 
                    component={SpashScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="SocialMedia" 
                    component={SocialMediaScreen} 
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="CodeConfirm"
                    component={CodeConfirmScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
  
export default App;