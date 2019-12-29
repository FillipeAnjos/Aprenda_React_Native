import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet, Image, StatusBar } from 'react-native'

export default class Home extends Component {

    render() {

        const { navigation } = this.props;
        const nomeUsuario = navigation.getParam('nome');

        //Alert.alert("Nome: " + nomeUsuario);

        return (
            <View style={styles.container}>

                <StatusBar 
                    barStyle="dark-content"
                    backgroundColor="#fff"
                    hidden={false}
                />                

                <Image 
                    source={require('../assets/logoFillipe/fillipeAnjos.jpg')} 
                    style={styles.logoFillipe}
                />

                <Text style={styles.textoHome}>Ola Fillipe {nomeUsuario}!!!</Text>
                <Text style={styles.textoHome}>Home</Text>                
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

