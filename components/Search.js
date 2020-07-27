import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchList } from '../store/recipes'
import { ListItem } from 'react-native-elements'
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, Linking, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'


const key = 'b241188b7089df35b3304b1ad7584eb9';
const Id = '92ec50d4'
// `https://api.edamam.com/search?q=chicken&q=avocado&q=pita&app_id=92ec50d4&app_key=b241188b7089df35b3304b1ad7584eb9&from=0&to=3&ingr=6&calories=500-600&diet=balanced`

const Item = (props) => {
    console.log("Hellooooo", props.item.recipe.image)
    return (
        <View style={styles.container2}>
            <Text style={styles.recipe} onPress={async () => await Linking.openURL(`${props.item.recipe.url}`)}>{props.item.recipe.label}</Text>
            <Image source={{ uri: `${props.item.recipe.image}` }}/>
        </View>
    )
};

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state= {
            ingredient: "",
            recipes: []
        }
        this.handlePress = this.handlePress.bind(this)
    }

    async handlePress(query){
        const {data} = await axios(`https://api.edamam.com/search?q=${query}&app_id=92ec50d4&app_key=b241188b7089df35b3304b1ad7584eb9&from=0&to=3&ingr=4&calories=500-600&diet=balanced`)
        if(data.hits.length === 0){
            Alert.alert("Sorry, no results were found")
        }
        this.setState({recipes: data.hits})
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView >
                   
                    <Text style={styles.title}> Look for Simple Recipes</Text>

                    <View style={styles.search}>
                        <View style={styles.searchInput}>
                        <TextInput style={styles.input} onChangeText={(e) => this.setState({ingredient:e})}>Search ingredients...</TextInput>
                    </View><View style={styles.searchButton}>
                        <TouchableOpacity
                            style={styles.button2}>
                            <Text style={styles.buttonText} onPress={() => this.handlePress(this.state.ingredient)}>Go</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    {
                        this.state.recipes.map((recipe, i) => (
                            <Item title={recipe.label} key={i} item={recipe} />
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        marginTop: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,

    },
    header: {
        backgroundColor: '#99ccff',
        borderRadius: 5,
    },
    subheader: {
        color: '#888',
        fontSize: 20,
        marginHorizontal: 20,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: 'center',

    },
    recipe: {
        color: '#888',
        fontSize: 15,
        marginHorizontal: 20,
        marginBottom: 5,
        textAlign: 'center',

    },
    categories: {
        color: '#fff',
        backgroundColor: "red",
        padding: 5,
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
    },
    title: {
        color: 'red',
        fontSize: 25,
        fontWeight: "bold",
        marginHorizontal: 20,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },

    buttonRecipes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        color: '#888',
        textAlign: 'center',
        alignItems: 'center',

    },
    search: {
        flexDirection: 'row',
        marginHorizontal: 16,
        justifyContent: 'space-between',
        color: '#888',
        textAlign: 'center',

    },
    searchInput: {
        flex: 80,

    },
    searchButton: {
        flex: 20,
        
    },
    button: {
        backgroundColor: 'red',
        padding: 6,
        borderRadius: 3,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 10,
        width: 130,

    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#fff',
    },
    button2: {
        backgroundColor: 'red',
        padding: 6,
        borderRadius: 3,
        marginBottom: 30,
        width: 50,

    },
    buttonContainer: {
        flex: 2,
        justifyContent: "center"
    },
    input: {
        padding: 6,
        color: '#888',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#888',
        marginBottom: 10,

    },
    
});


