import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchScreen';
import Recipe from '../screens/Recipe';


const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="Search" component={SearchScreen}/>
          <Stack.Screen name="Recipe" component={Recipe}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};