import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {GetStarted, Welcome, Home, Recipes, MyList, Search} from './index'

const Stack = createStackNavigator();
const Bot = createBottomTabNavigator()

export default function Navigate() {
  return (

     <NavigationContainer>
      <Bot.Navigator>
      <Bot.Screen name="Start" component={GetStarted}/>
      <Bot.Screen name="Home" component={Home}/>
      <Bot.Screen name="My Recipes" component={Recipes}/>
      <Bot.Screen name="My List" component={MyList}/>
      <Bot.Screen name="Search" component={Search}/>

      </Bot.Navigator>
      </NavigationContainer> 
  );
}