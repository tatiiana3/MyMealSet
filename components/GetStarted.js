import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Keyboard, StatusBar } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import logo from '../assets/logo.png'


export default class GetStarted extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: '',
            sex: '',
            active: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <FormLabel>Name</FormLabel>
                <FormInput onChangeText={() => console.log("HI")}/>
                <FormValidationMessage>Error message</FormValidationMessage> */}
                 <Text style={styles.title}>Welcome to MealSet</Text> 
                <Image source={logo} style={styles.logo} /> 
                <Text style={styles.subheader}>Please fill out the following!</Text>

                <Text style={styles.categories}>Your Age:</Text>
                <View style={styles.input} >
                    <RNPickerSelect
                        onValueChange={(value) => this.setState({ age: value })}
                        items={[
                            { label: '18-25', value: '18-25' },
                            { label: '26-30', value: '26-30' },
                            { label: '31-50', value: '31-50' },
                            { label: '51-60', value: '51-60' },
                            { label: '61-75', value: '61-75' },
                            { label: '76 & up', value: '76 & up' },
                        ]}
                    />
                </View>

                <Text style={styles.categories}>Your Sex:</Text>
                <View style={styles.input} >
                    <RNPickerSelect
                        onValueChange={(value) => this.setState({ sex: value })}
                        items={[
                            { label: 'Female', value: 'Female' },
                            { label: 'Male', value: 'Male' },

                        ]}
                    />
                </View>

                <Text style={styles.categories}>How active are you?</Text>
                <View style={styles.input} >
                    <RNPickerSelect
                        onValueChange={(value) => this.setState({ active: value })}
                        items={[
                            { label: 'sedentary', value: 'sedentary' },
                            { label: 'moderate', value: 'moderate' },
                            { label: 'active', value: 'active' },


                        ]}
                    />
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', { items: this.state })}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View >
        )
    }
}



const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        color: 'red',
        fontSize: 25,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginBottom: 20,

    },
    subheader: {
        color: '#888',
        fontSize: 20,
        marginHorizontal: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    categories: {
        color: '#888',
        fontSize: 15,
        marginHorizontal: 20,
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'red',
        padding: 12,
        borderRadius: 5,
        marginBottom: 20,

    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    input: {
        padding: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#888',
        marginBottom: 10,

    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 10
    },

})

