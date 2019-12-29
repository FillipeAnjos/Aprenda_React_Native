import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet, Image, Picker, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';//V: 0.60+ do React Native

export default class Profile extends Component {

    state = {
        programador: ''
    }

    constructor(props){
        super(props);
        this.state = {
            total: 0
        }
    }

    gravarTotal = async () => {

        try{

            await AsyncStorage.setItem("@chave_API", this.state.total);

            Keyboard.dismiss();//Fechar teclado do app

            Alert.alert("Sucesso", 'Salvo com sucesso!');
        
        }catch(e){
            alert(e);
        }

    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.profile}>Profile</Text>

                <TextInput 
                    style={styles.input}
                    placeholder='Informe qtd registro para a API'
                    onChangeText={ (text) => this.setState({total:text}) }
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={ this.gravarTotal }
                >
                    <Text style={styles.textBotao}>Gravar</Text>
                </TouchableOpacity>
                
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
        fontSize: 26
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

    input: {
        marginTop: 30,
        width: 300,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 4,
    },  
    botao: {
        width: 100,
        height: 42,
        backgroundColor: '#0000FF',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    textBotao: {
        color: '#fff'
    },
})

