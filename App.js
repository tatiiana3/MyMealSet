import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux'
import store from './store'
import { Image, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {GetStarted, Welcome, Home, Recipes} from './components'
import Navigation from './components/Navigation'
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
     <Navigation />
     </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  title: {
    color: '#888',
    fontSize: 25,
    marginHorizontal: 20,
    marginBottom: 20,

  },
  button: {
    backgroundColor: '#99ccff',
    padding: 16,
    borderRadius: 5,
    marginBottom: 20,

  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    padding: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#888',
    height: 40,
    marginBottom: 10,

  }
})

