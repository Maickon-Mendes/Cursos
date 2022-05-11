import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'; 

import Slider from '@react-native-community/slider';

function App() {
  const [ valor, setValor ] = useState(50);
  return (

   <View style={estilo.container}>
     <Slider
      minimumValue={0} /*Valor minimo */
      maximumValue={100} /* Valor maximo */
      value={valor} /*Valor selecionado */
      onValueChange={(valorSelecionado)=> setValor(valorSelecionado)} /* Pegar o valor que está selecionado */
      minimumTrackTintColor='blue'
      maximumTrackTintColor='red'
      thumbTintColor='blue'
     />

    <Text> {valor.toFixed(0)}%</Text>

   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#959595',
  },
})
export default App;