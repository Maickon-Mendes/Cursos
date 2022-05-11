import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch } from 'react-native';

import { Picker } from '@react-native-picker/picker';

import Slider from '@react-native-community/slider';


export default function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [inputNome, setInputNome] = useState('')
  const [inputIdade, setInputIdade] = useState('')

  const [sexoSelecionado, setSexoSelecionado] = useState('')
  const [selectedSexo, setSelectedSexo] = useState("");

  const [valorSelecionado, setValorSelecionado,] = useState('')
  const [valor, setValor] = useState(500);

  const [statusSelecionado, setStatusSelecionado] = useState('')
  const [status, setStatus] = useState(false)

  function cadastrar() {
    setNome(inputNome)
    setIdade(inputIdade)
    setSexoSelecionado(selectedSexo)
    setValorSelecionado(valor.toFixed(2))
    setStatusSelecionado(status)
  }

  return (

    <View style={estilo.container}>
      <View style={estilo.header}>
        <Text style={estilo.textoHeader}>Banco do Brasil</Text>
      </View>

      <View style={estilo.areaCadastro}>

        <TextInput
          style={estilo.input}
          placeholder='Digite o seu nome'
          onChangeText={(texto) => setInputNome(texto)}
        />
        <TextInput
          style={estilo.input}
          placeholder='Digite a sua idade'
          onChangeText={(texto) => setInputIdade(texto)}
        />

        <Picker
          selectedValue={selectedSexo}
          style={estilo.sexoCamp}
          onValueChange={(itemValue, itemIndex) => setSelectedSexo(itemValue)}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Outro Genero" value="Outro Genero" />

        </Picker>

        <Slider
          minimumValue={0}
          maximumValue={5000}
          value={valor}
          onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
          minimumTrackTintColor='blue'
          maximumTrackTintColor='red'
          thumbTintColor='blue'
        /><Text> R$: {valor.toFixed(2)}</Text>

        <Switch
          value={status}
          onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
          trackColor={'#909090'}
          thumbColor={status ? 'green' : 'gray'}
        />
        <Text style={estilo.texto}>
          Estudante: {status ? 'Sim' : 'Não'}
        </Text>

        <View style={estilo.centralizarBtn}>
          <TouchableOpacity style={estilo.btnCadastrar} onPress={(cadastrar)}>
            <Text style={estilo.btnCadastrarText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>

      </View>

      <View style={estilo.formulario}>

        <Text style={estilo.resultado}>Nome: {nome} </Text>
        <Text style={estilo.resultado}>Idade: {idade} </Text>
        <Text style={estilo.resultado}>Sexo:  {sexoSelecionado} </Text>
        <Text style={estilo.resultado}>Limite:  {valorSelecionado} </Text>
        <Text style={estilo.resultado}>Estudante:  {statusSelecionado} </Text>

      </View>

    </View>
  );


}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    height: 60,
  },
  textoHeader: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    marginTop: 5,
    paddingLeft: 10,
  },
  centralizarBtn: {
    alignItems: 'center',
    marginTop: 20,
  },
  btnCadastrar: {
    width: 110,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnCadastrarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  areaCadastro: {
    flex: 3,
    textAlign: 'center'
  },
  formulario: {
    flex: 1,
    backgroundColor: 'blue'
  },
  resultado: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})



