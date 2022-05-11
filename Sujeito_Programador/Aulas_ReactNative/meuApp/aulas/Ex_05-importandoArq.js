/*
 * Arquivo a ser exportado
 */
import React , {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

function Pessoa(props){
    return(
      <View style={estilo.areaPessoa}>
        <Text style={estilo.testoPessoa}>{props.data.nome}</Text>
        <Text style={estilo.testoPessoa}>{props.data.idade} anos</Text>
        <Text style={estilo.testoPessoa}>{props.data.email}</Text>
  
      </View>
    )
  }

  const estilo = StyleSheet.create({    
    areaPessoa:{
        backgroundColor: '#121212',
        height: 200,
        marginBottom: 15,  
        justifyContent: 'center'
      },
      testoPessoa:{
        color: 'white',
        fontSize: 20
      },
  })

export default Pessoa;

/**
 * App que faz rodar 
 */

 import React, {useState} from 'react';
 import {View, Text, StyleSheet, FlatList} from 'react-native'; 
 
 import Pessoa from './src/Pessoa';
 
 export default function App() {
 
   const [feed, setFeed] = useState([
     {id: '1', nome: 'Maickon', idade:27, email: 'maickonmmendes@gmail.com'},
     {id: '2', nome: 'Adri', idade:30, email: 'Adri@gmail.com'},
     {id: '3', nome: 'Henrique', idade:1, email: 'Henriquemendes@gmail.com'},
     {id: '4', nome: 'Luanna', idade:4, email: 'Luannamendes@gmail.com'},
     {id: '5', nome: 'gus', idade:6, email: 'gus@gmail.com'}
   ])
 
   return (
 
    <View style={estilo.container}>
      <FlatList 
       showsVerticalScrollIndicator={false}/*Não aparecer a barra de rolagem */
       keyExtractor={(item)=> item.id}/*Estraia para mim uma função (a função pega o id*/
       /**se for uma lista com id não é nescessario o  keyExtractor*/
       data={feed} /* de onde está vindo os dados da lista*/
       renderItem={({item}) => <Pessoa data={item}/>/* responsavel por renderizar os itens */} 
      />
    </View>
   );
 }
 
 
 const estilo = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#959595',
   },
  
 })
 
 