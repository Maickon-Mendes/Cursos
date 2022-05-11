import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'; 

import {Picker} from '@react-native-picker/picker';
/* O piker(selecionador) serve para pegarmos os valores que estão selecionados */

function App() {

  const [carroSelecionado, setCarroSelecionado ] = useState(0);
  const[carros, setCarros] = useState([
    {key: 1, nome: 'Golf 1.6', valor: 62.000},
    {key: 2, nome: 'Saveiro', valor: 29.300},
    {Key: 2, nome: 'Gol 1.0', valor: 25.200}
  ])

  let carrosItem = carros.map((value, key) =>{
    return <Picker.Item key={key} value={key} label={value.nome}/>
  })

  return (

   <View style={estilo.container}>

    <Picker 
      selectedValue={carroSelecionado}
      onValueChange={(itemValue, itemIndex) => {
        setCarroSelecionado(itemValue)
      }}
    >  
      {carrosItem}

    </Picker>

    <Text style={estilo.carros}> {carros[carroSelecionado].nome/*o carroselecionado vem com o index do array */} </Text>
    <Text style={estilo.carros}> {carros[carroSelecionado].valor.toFixed(3)/*toFixed = quantas casas decimais mostrar depois do ponto */} </Text>

   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  carros:{
    marginTop: 30,
    fontSize: 25,
    color: 'white'
  },
})
export default App;