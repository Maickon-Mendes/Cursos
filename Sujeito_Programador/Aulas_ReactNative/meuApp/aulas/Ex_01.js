import React, {useState} from 'react'; //Importando a biblioteca react
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'; //importando Componentess da biblioteca

function App() {
  const[nome, setNome] = useState('')
  const[input, setInput] = useState('')

  
  function entrar(){
    if(input === ''){
      alert('precisa digitar algo')
      return // o return é para o programa parar e não descer para as linhas a baixo
    }
    setNome(input)
  }

  return (
   <View style={estilos.container}>
     <TextInput
      style={estilos.input}
      placeholder="Digite o seu nome"
      onChangeText={(text)=> setInput(text) }
     />

    <Button title='Entrar' onPress={ entrar }></Button>
    <Text style={estilos.texto}>{nome}</Text>
   </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
  },
})

export default App;
