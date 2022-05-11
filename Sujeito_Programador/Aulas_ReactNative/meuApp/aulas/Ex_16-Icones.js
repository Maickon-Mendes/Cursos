import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'; 

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {

  return (

   <View style={estilo.container}>
     <Text>Sujeito Programador</Text>

     <FontAwesome name="home" size={25} color={'#11118c'}/>
     <FontAwesome name="user" size={25} color={'#54a300'}/>

     <Feather name="gift" size={25} color={'#7665ff'}/>

    <TouchableOpacity style={estilo.btnYoutube}>
     <FontAwesome name="youtube" size={25} color={'#fff'}/>
     <Text style={estilo.btnTexto}>Acessar Canal</Text>
    </TouchableOpacity>
   </View>  
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  btnYoutube:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    padding: 5,
    backgroundColor: 'red'
  },
  btnTexto:{
    paddingLeft: 10,
    color: '#fff'
  },
})
