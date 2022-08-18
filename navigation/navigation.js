import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { Menu } from 'react-native-paper';


const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Pagina principal"
                    component={HomeScreen}
                />
                  <Stack.Screen
                    name="Menu"
                    component={Menu}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};