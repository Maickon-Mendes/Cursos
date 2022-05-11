import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native'; 

import Header from './src/header';
import List from './src/list';

function App() {

  const[feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Maickon Mendes',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      curtiu: true,
      likers: 1
    },
    {
      id: '2',
      nome: 'Matheus',
      descricao: 'Isso sim é ser raiz',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      curtiu: false,
      likers: 0
    },
    {
      id: '3',
      nome: 'Jose Augusto',
      descricao: 'Começando um projeto novo',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      curtiu: false,
      likers: 3
    },
    {
      id: '4',
      nome: 'Gustavo Henrique',
      descricao: 'Isso sim é TI',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      curtiu: false,
      likers: 1
    },
    {
      id: '5',
      nome: 'Guilherme',
      descricao: 'Boa tarde galera do insta...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      curtiu: false,
      likers: 32
    }
  ])

  return (

   <View style={estilo.container}>
     <Header/>

     <FlatList
        keyExtractor={ (item) => item.id /*garantir que ele ache qual é o id de cada post */}
        data={feed}
        renderItem={ ({ item }) => <List data={item}/>}
        showsVerticalScrollIndicator={false}
     />
   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default App;