/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styles from './styles/index';
import Welcome from './components/Welcome';
import Login from './components/login';

const App: () => React$Node = () => {
  return (
  
  /*
    <Welcome 
    titulo = "Aprendendo React Native"
    slogan = "Fillipe dos Anjos"
    />
  */
    <Login>
      
    </Login>
  
    
  );
};

export default App;
