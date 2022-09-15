import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Search from '../screens/Search';
import Recipe from '../screens/recipe';


const Stack = createNativeStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Log In">
          <Stack.Screen name="LoginScreen" component={LoginScreen}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="Search" component={Search}/>
          <Stack.Screen name="Recipe" component={Recipe}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};