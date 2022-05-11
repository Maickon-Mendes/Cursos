import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Switch} from 'react-native'; 

export default  function App() {
  const [status, setStatus] = useState(false)
  return (

   <View style={estilo.container}>
     <Switch
      value={status} /*Estas duas propriedades são obrigatorias */
      onValueChange={ (valorSelecionado)=> setStatus(valorSelecionado)} /*Estas duas propriedades são obrigatorias */
      trackColor={{false: 'red', true: 'blue'}}
      thumbColor={status ? 'green' : 'gray'}
     />
      <Text style={ estilo.texto}>
        status: {status ? 'Ativo' : 'Inativo'}
      </Text>
   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#959595',
  },
  texto:{
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center'
  },
})


function cadastrar() {
  setNome(inputNome)
  setIdade(inputIdade)
 
}