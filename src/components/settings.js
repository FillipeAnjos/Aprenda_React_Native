import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet, Image, FlatList } from 'react-native'

export default class Settings extends Component {

    render() {
        /*
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
            Testeeeeeeeeeeeeeeeeeeeeeee
        */
        dados = [
            {key: 'Linha 1'},
            {key: 'Linha 2'},
            {key: 'Linha 3'},
            {key: 'Linha 4'},
            {key: 'Linha 5'},
            {key: 'Linha 6'},
            {key: 'Linha 7'},
            {key: 'Linha 8'},
            {key: 'Linha 9'},
            {key: 'Linha 10'},
            {key: 'Linha 11'},
            {key: 'Linha 12'},
            {key: 'Linha 13'},
            {key: 'Linha 14'},
            {key: 'Linha 15'},
            {key: 'Linha 16'},
            {key: 'Linha 17'},
            {key: 'Linha 18'},
            {key: 'Linha 19'},
            {key: 'Linha 20'}
        ]

        return (
            <View style={styles.container}>
                <Text style={styles.settings}>Settings</Text>

                <FlatList
                    data={dados}
                    renderItem={( {item} ) => <Text style={styles.textoItem}>{item.key}</Text> }
                >
                    
                </FlatList>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
    },
    settings: {
        color: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    logoFillipe: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    textoItem: {
        fontSize: 15,
        color: '#34495e',
        padding: 18,
        borderBottomWidth: 1,
        borderRightColor: '#ccc'
    },
})

