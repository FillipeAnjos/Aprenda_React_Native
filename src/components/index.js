import React, { Component } from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Login from './login';
import Home from "./home";
import Profile from './profile';
import Settings from "./settings";

//Arquivo responsavel pela ROTA - NAVEGAÇÃO POR TABS
const myTabNavigator = createBottomTabNavigator(
    {
        Home: Home,
        Profile: Profile,
        Settings: Settings
    },
    {
        tabBarOptions:{
            activeTintColor: '#34495e',
            inactiveTintColor: '#bdc3c7',
            style: {
                backgroundColor: '#ecf0f1'
            },
            showLabel: true
        },
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const {routeName} = navigation.state;
                let IconComponent = FontAwesome5;
                let iconName;

                if(routeName === 'Home')
                    iconName = 'home';
                else if(routeName === 'Profile')
                    iconName = 'user-alt';
                else if(routeName === 'Settings')
                    iconName = 'cog';

                return <IconComponent name={iconName}
                                      size={20}
                                      color={tintColor}
                        />
            }   
        })
    }
)

export default createAppContainer(myTabNavigator);

//Arquivo responsavel pela ROTA - NAVEGAÇÃO POR BOTÃO
/*
    const MainNav = createStackNavigator(
        {
            Login: {
                screen: Login,
                navigationOptions: {
                    header: null
                }
            },
            Home: {
                screen: Home,
                navigationOptions: {
                    headerTitle: 'Home - Página inicial'
                }
            }
        }
    )


export default createAppContainer(MainNav);
*/

