import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native'

import styles from '../styles/index';
import { TextInput } from 'react-native-gesture-handler';

export default class Login extends Component {

    clicou = () => {
        Alert.alert('Fillipe Anjos', 'Você clicou em mim!');
    }    

    state = {
        nome: ''
    }
        
    render() {
        return (
            <View style={styles.container}>
                
                <Image 
                    source={require('../assets/logoFillipe/fillipeAnjos.jpg')} 
                    style={styles.logoFillipe}
                />

                <TextInput 
                    style={styles.inputLogin}
                    onChangeText={ text => this.state.nome = text }
                    placeholder = 'Digite seu email: '
                />
                <TextInput 
                    style={styles.inputLogin}
                    secureTextEntry = {true}//Campo senha!!!
                    placeholder = 'Digite sua senha: '
                />

                <TouchableOpacity
                    style={styles.botaoLogin}
                    onPress={ () => { this.props.navigation.navigate('Home', {'nome': this.state.nome}) } }
                >
                    <Text style={styles.textoLogin}>Login</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

