import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'; 

function App() {
  const [nome , setNome] = useState('Maickon Mendes')
  const [cargo, setCargo] = useState('Programdor')
  return (

   <View style={estilo.container}>
     <Text style={estilo.msgSaudacao}>Sejá bem vindo!</Text>
      <View style={estilo.viewDados}>
        <Text style={estilo.dadosTexto}> Nome: {nome} </Text>
        <Text style={estilo.dadosTexto}> Cargo: {cargo} </Text>
      </View>  
   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#959595',
  },
  msgSaudacao:{
    textAlign: 'center',
    height: 50,
    backgroundColor: 'white',
    paddingTop: 13,
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewDados: {
    height: 200,
    backgroundColor: '#000242',
    paddingTop: 50,
  },
  dadosTexto: {
    fontSize: 25,
    color: '#fff',
    

  },
})
export default App;