import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet, Image } from 'react-native'

export default class Settings extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Image 
                    source={require('../assets/logoFillipe/fillipeAnjos.jpg')} 
                    style={styles.logoFillipe}
                />

                <Text style={styles.textoHome}>Settings</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoHome: {
        color: '#fff',
    },
    logoFillipe: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
})

