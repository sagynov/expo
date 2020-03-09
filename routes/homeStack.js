import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import Home from  '../screens/home';
import ReviewDetail from  '../screens/reviewDetail';
import Header from '../shared/header';


const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={({navigation}) => { return { headerTitle: () => <Header navigation={navigation} />} }} />
            <Stack.Screen name="ReviewDetail" component={ReviewDetail} options={{title: 'Review Detail',  }} />
        </Stack.Navigator>
    )
};
export default HomeStack;