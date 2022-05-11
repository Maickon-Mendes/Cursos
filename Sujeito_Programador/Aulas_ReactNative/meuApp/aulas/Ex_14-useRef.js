import React, {useState, useEffect, useMemo, useRef } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity,} from 'react-native'; 

import AsyncStorage from '@react-native-async-storage/async-storage';

/*Biblioteca para armazenar dados */
export default function App() {

  const [input, setInput] = useState('')
  const [nome, setNome] = useState('')

  const inputRaf = useRef(null)

  useEffect(()=>{
    async function carregarNomeUser(){
      await AsyncStorage.getItem('@nome').then((value)=>{
        setNome(value)
      })
    }

    carregarNomeUser()

  },[]);

  async function gravarNome(){ /*Funções assincronas só vão deixar o program a baixo ser executado quando elas forem concluidas */
   await AsyncStorage.setItem('@nome', input)
    /*primeiro é o id, o segundo é qual valor que vai receber */
    setNome(input);

    setInput('');
  }
/* useMemo para fazer algo apenas quando pedir pra fazer algo */
  const letrasNome = useMemo(()=>{
    return nome.length
  }, [nome])

  function chamarIput(){
    //inputRaf.current.focus();
    inputRaf.current.clear();

    /*referencia a algo, nesse caso vai focar no imput do nome */
  }

  return (

   <View style={estilo.container}>

      <View style={estilo.viewImput}>
        <TextInput
        style={estilo.input}
        value={input}
        onChangeText={ (texto) => setInput(texto)}
        ref={inputRaf}
        />

        <TouchableOpacity onPress={gravarNome}>
          <Text style={estilo.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={estilo.nome}>{nome}</Text>
      <Text style={estilo.nome}>Seu nome Posuie {letrasNome} letras</Text>

    <TouchableOpacity onPress={chamarIput}>
      <Text>Limpar input</Text>
    </TouchableOpacity>

   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 35,
  },
  viewImput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width: 350,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  botao:{
    backgroundColor: '#222',
    color: 'white',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome:{
    marginTop:15,
    fontSize: 30
  }
})
