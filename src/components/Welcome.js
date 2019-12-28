import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from '../styles/index';

export default class Welcome extends Component {

        //--------- Exemplo de Starte //---------
        state = {
            slogan: 'Fillipe dos Anjos Siqueira'
        }

        alterar = () => {
            this.setState({
                slogan: this.state.slogan ? '' : 'Fillipe dos Anjos Siqueira'
            })
        }
        //-----------------------------------------
        
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.botao} onPress={this.alterar}>
                    <Text style={styles.textoState}>
                        {this.state.slogan}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>
                    {this.props.titulo}
                </Text>
                <Text style={styles.slogan}>
                    {this.props.slogan}
                </Text>
            </View>
        )
    }
}

