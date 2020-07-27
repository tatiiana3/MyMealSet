import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchList } from '../store/recipes'
import { ListItem } from 'react-native-elements'
import { ingredients } from '../DummyData'
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';



const Item = (props) => (
    <Text style={styles.categories}>{props.title}</Text>
);

export default class MyList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients
        }
    }

    render() {
        console.log("PARAMS", this.props)
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <Text style={styles.title}> Your Grocery List</Text>
                    <Text style={styles.subheader}> Here's a simple list that won't cost you a fortune!</Text>

                    <View>
                        {

                            this.state.ingredients.map(item => (
                                <Item key={item.id} title={item.name} />
                            ))
                        }
                      


                    </View>
                </ScrollView >
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

        marginTop: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
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
    categories: {
        color: '#888',
        padding: 5,
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 10,
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

