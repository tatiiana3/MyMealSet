import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchList } from '../store/recipes'
import { ListItem } from 'react-native-elements'

import { Image, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { breakfast } from '../DummyData';
import { TextInput } from 'react-native-gesture-handler';
import meal from '../assets/meal.png'
import meal2 from '../assets/meal2.png'

function getRange(obj) {
    let calories = 0
    if (obj.sex === "male") {
        calories += 200
    }
    if (obj.age === '18-25') {
        calories = 1800
    }
    else if (obj.age === '26-30') {
        calories = 1800
    }
    else if (obj.age === '31-50') {
        calories = 1700
    }
    else if (obj.age === '51-60') {
        calories = 1700
    }
    else if (obj.age === '61-75') {
        calories = 1600
    }
    else {
        calories = 1600
    }

    if (obj.active === 'moderate') {
        calories += 200
    }
    else if (obj.active === 'active') {
        calories += 400
    }

    return calories
}

const Item = (props) => (
    <Text>{props.title}</Text>
);

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredient: ""
        }
        this.getRange = this.getRange.bind(this)
    }

    getRange(obj) {
        let calories = 0
        if (obj.sex === "Male") {
            calories += 200
        }
        if (obj.age === '18-25') {
            calories = 1800
        }
        else if (obj.age === '26-30') {
            calories = 1800
        }
        else if (obj.age === '31-50') {
            calories = 1700
        }
        else if (obj.age === '51-60') {
            calories = 1700
        }
        else if (obj.age === '61-75') {
            calories = 1700
        }
        else {
            calories = 1700
        }

        if (obj.active === 'moderate') {
            calories += 200
        }
        else if (obj.active === 'active') {
            calories += 400
        }

        return calories
    }

    render() {
        let calories
        if (this.props.route.params) {
            calories = this.getRange(this.props.route.params.items)
        }
        else {
            calories = "N/A"
        }
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <View style={styles.header}>
                        <Text style={styles.title}> Your Meal Suggestions</Text>

                    </View>
                    <Text style={styles.subheader}> Welcome Human!</Text>
                    <View style={styles.image}>
                        <Image source={meal} style={styles.logo} />
                    </View>
                    <Text style={styles.categories}> {calories} kcal average</Text>

                    <Text style={styles.subheaders}> This plan is calculated via calories based on the information you provided</Text>
                    <View style={styles.image}>

                        <Image source={meal2} style={styles.logo2} />
                    </View>
                    <Text style={styles.subheaders}> Take a look at your list and recipes</Text>

                    <View style={styles.buttonRecipes}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('My List')}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Grocery List</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('My Recipes')}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Recipes</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Get Started')}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Reset Meals</Text>
                        </TouchableOpacity> */}
                    </View>
                    <Button title="Look For Additional Recipes" color="red" onPress={() => this.props.navigation.navigate('Search')} />

                </ScrollView>
            </SafeAreaView>
        )
    }
}


// const mapStateToProps = state => {
//     return {
//         mealSet: state.recipes
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchList: (obj) => dispatch(fetchList(obj))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        justifyContent: 'center',
        marginTop: 20,

    },
    header: {
        borderRadius: 5,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
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
    image: {
        alignItems: "center",

    },
    subheader: {
        color: '#888',
        fontSize: 20,
        marginHorizontal: 20,
        fontWeight: "bold",
        marginBottom: 5,
        textAlign: 'center',

    },
    subheaders: {
        color: '#888',
        padding: 5,
        fontSize: 18,
        marginHorizontal: 20,
        marginBottom: 10,       
         marginTop: 10,

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
        fontSize: 18,
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
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10,
        alignItems: "center"

    },
    logo2: {
        width: 305,
        height: 159,
        marginBottom: 10,
        alignItems: "center"

    },
});

// const applicationK = 'b241188b7089df35b3304b1ad7584eb9';
// const Id = '92ec50d4'
//     `https://api.edamam.com/search?q=chicken&q=avocado&q=pita&app_id=92ec50d4&app_key=b241188b7089df35b3304b1ad7584eb9&from=0&to=3&ingr=6&calories=500-600&diet=balanced`
