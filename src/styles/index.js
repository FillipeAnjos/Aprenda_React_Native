import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
/* *** Container geral *** */    
container:{
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: 'center',
    alignItems: 'center'
},

/* *** Componente Welcome *** */
titulo: {
    color: '#fff',
    fontSize: 18
},

slogan: {
    color: '#f0f0f0',
    fontSize: 18
},

botao: {
    backgroundColor: '#FFF',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
},

textoState: {
    color: '#6E6E6E',
},

/* *** Componente login *** */

textoLogin: {
    fontSize: 24,
    color: '#fff',
},
logoFillipe: {
    width: 150,
    height: 150,
    borderRadius: 100,
},

inputLogin: {
    marginTop: 10,
    width: 300,
    padding: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 4,
},

botaoLogin: {
    width: 300,
    height: 42,
    backgroundColor: '#39B3DB',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
},

textoLogin: {
    fontSize: 16,
    color: '#fff',
},


});


export default styles;