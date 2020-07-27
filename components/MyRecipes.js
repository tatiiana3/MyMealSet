import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, Linking, SafeAreaView, ScrollView } from 'react-native';
import { breakfast, lunch, dinner} from '../DummyData'

const Item = (props) => {
    return (
        <View style={styles.container2}>
            <Text style={styles.recipe} onPress={async () => await Linking.openURL(`${props.item.link}`)}>{props.item.title}</Text>
            <Image source={{ uri: `${props.item.imageUrl}` }} style={styles.image} />
        </View>
    )
};

export default class Recipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            breakfast,
            lunch, 
            dinner
        }
    }


    render() {
        console.log("PROP", this.props.route.params)
        // const items =  this.props.route.params.items
        // const meal = this.props.route.params.meal
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View syle={styles.header}>
                    <Text style={styles.title}> Your Meals For This Week</Text>
                    </View>
                    <Text style={styles.subheader}> Here you can find our suggested recipes for you to try</Text>
                    <Text style={styles.categories}> Breakfast</Text>

                    {
                        this.state.breakfast.map(item => (
                            <Item title={item.category} key={item.id} item={item} />
                        ))
                    }
                    <Text style={styles.categories}> Lunch</Text>
                    {
                        this.state.lunch.map(item => (
                            <Item title={item.category} key={item.id} item={item} />
                        ))
                    }
                    <Text style={styles.categories}> Dinner</Text>
                    {
                        this.state.dinner.map(item => (
                            <Item title={item.category} key={item.id} item={item} />
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
    image: {
        width: 193,
        height: 110,
        padding: 20,
    }
})

