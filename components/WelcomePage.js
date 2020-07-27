import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import logo from '../assets/logo.png'


export default function Welcome (props) {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>Welcome to MealSet</Text>
            <Image source={logo} style={styles.logo} />
            <StatusBar style="auto" />
        </View>



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
  
})

