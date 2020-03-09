import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about';
import { Header } from '../shared/header';


const Stack = createStackNavigator();

function AboutStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="About" component={About} options={{headerTitle: () => <Header />}} 
                
                />
            </Stack.Navigator>
    )
};
export default AboutStack;