import React, { Component } from 'react'
import { Text, View, Alert, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native'

export default class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        }
    }

    loadUsers = () => {
        fetch("https://randomuser.me/api/?results=1000")
            .then( res => res.json() )
            .then( res => {
                this.setState({
                    data: res.results || [],
                    loading: false
                })
            })
    }

    //O methodo componentDidMount() é chamado apenas uma vez, acada vez que roda a aplicação
    componentDidMount() {
        this.loadUsers();
    }

    render() {

        if(this.state.loading){

            return (
                <View style={styles.containerLoading}>
                    <ActivityIndicator 
                        size= 'large'
                        color = '#2E64FE'
                    />
                    <Text>Aguarde, carregando os dados da API ...</Text>
                </View>
            )

        }else{
    
            return (
                <View style={styles.container}>
                    <Text style={styles.lista}>Lista</Text>

                    <FlatList
                        data={this.state.data}
                        renderItem={({item}) => (

                            <View style={styles.line}>
                                <Image 
                                    source={{ uri: item.picture.thumbnail }}
                                    style={styles.avatar}
                                />

                                <View style={styles.info}>
                                    <Text style={styles.email}>{item.email}</Text>
                                    <Text style={styles.name}>{item.name.first} {item.name.last}</Text>
                                </View>
                            </View>

                        )}
                        keyExtractor={ item => item.email }
                    />

                </View>
            )

        }
    }
}

const styles = StyleSheet.create({
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    line: {
        height: 50,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
        alignSelf: 'center'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    name: {
        fontSize: 12, 
    },
    email: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

