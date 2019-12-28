import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet, Image, Picker } from 'react-native'

export default class Profile extends Component {

    state = {
        programador: ''
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.profile}>Profile</Text>
                
                <Picker
                    style={styles.pickerComponente}
                    selectedValue={this.state.programador}
                    onValueChange={
                        (itemValor, itemIndex) =>
                            this.setState({
                                programador: itemValor
                            })
                    }
                >

                    <Picker.Item label="Escolha a profissão: " value="" />
                    <Picker.Item label="Desenvolvedor PHP" value="Desenvolvedor PHP" />
                    <Picker.Item label="Desenvolvedor JAVA" value="Desenvolvedor JAVA" />
                    <Picker.Item label="Desenvolvedor React Native" value="Desenvolvedor React Native" />
                    <Picker.Item label="Desenvolvedor Ionic" value="Desenvolvedor Ionic" />
                    <Picker.Item label="Desenvolvedor NodeJs" value="Desenvolvedor NodeJs" />
                    <Picker.Item label="Desenvolvedor Ruby" value="Desenvolvedor Ruby" />

                </Picker>

                <Text style={styles.textSelecionado}>
                    {this.state.programador}
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    profile: {
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
    pickerComponente: {
        width: 350,
    },
    textSelecionado: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
    },
})

