import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Modal} from 'react-native'; 

export default function App() {
  
  const [modalVisible, setModalVisible] = useState(false)


  function abrirModal(){
    setModalVisible(true)
  }

  return (

   <View style={estilo.container}>
     <Button title='Abrir Modal' onPress={ abrirModal }/>
     <Modal  animationType='fade' visible={modalVisible} /*o sisible é obrigatório se for true, ele abre, se for falso ele fica fechado  (transparent={true}) deixaria ele flutuando*/>
       <View style={estilo.viewModal}>
         <Text>Seja bem vindo</Text>
         <Button title='Fechar Modal' onPress={ () => setModalVisible(false) }/>
       </View>

     </Modal>
   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewModal:{
    flex: 1,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
