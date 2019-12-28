import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet } from 'react-native'

export default class Lista extends Component {

    render() {
    
        return (
            <View style={styles.container}>
                <Text style={styles.lista}>Lista</Text>

                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
    lista: {
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    
})

