import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'; 

function App() {

  return (

   <View style={estilo.container}>
     <ScrollView horizontal={true} /*showsVerticalScrollIndicator={false para não aparecer a barra de scroll} showsHorizontallScrollIndicator para scroll na lateral*/> 
      <View style={estilo.box1 /**/}></View>
      <View style={estilo.box2}></View>
      <View style={estilo.box3}></View>
      <View style={estilo.box4}></View>
    </ScrollView>
   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  box1: {
    width: 150,
    height: 250,
    backgroundColor: 'red'
  },
  box2: {
    width: 150,
    height: 250,
    backgroundColor: 'green'
  },
  box3: {
    width: 150,
    height: 250,
    backgroundColor: 'blue'
  },
  box4: {
    width: 150,
    height: 250,
    backgroundColor: 'yellow'
  },
})
export default App;