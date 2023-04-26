import React, { Component } from "react";
import { Text,View, StyleSheet } from "react-native-elements";
import HomeScreen from "../Screens/Home";
import IssLocation from "../Screens/IssLocation";
import Meteor from "../Screens/Meteor";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator()

export default class StackNavigator extends Component{
    render(){
        return(
           <NavigationContainer>
            
            <Stack.Navigator>

                <Stack.Screen name="home"component={HomeScreen}/>
                <Stack.Screen name="meteor"component={Meteor}/>
                <Stack.Screen name="IssLocation"component={IssLocation}/>
            </Stack.Navigator>

           </NavigationContainer>
        )
    }
}