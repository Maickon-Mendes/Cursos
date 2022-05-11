/**
 * App()
 * 
 * 
 * 
 * import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home'
import Sobre from './src/pages/sobre'
import Contato from './src/pages/contatos';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Home"
          component={Home}
          options={{
            title: 'Inicio',
            headerStyle:{
              backgroundColor: '#999999'
            },
            headerTintColor: '#fff',
            headerShown: false,
          }}
          />
        <Stack.Screen 
        name="Sobre" 
        component={Sobre}
        options={{
          title: 'Pagina Sobre'
        }}
          />
          <Stack.Screen 
        name="Contato" 
        component={Contato}
        options={{
          title: 'Pagina Contato'
        }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}




*Home

import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    function navegarSobre(){
        navigation.navigate('Sobre', {nome: 'Maickon', email: 'maickon@gmail.com'})/*Passando um objeto para sobre 
    }

   

    return(
        <View style={estilo.container}>
            <Text>Tela home</Text>
            <Button style={estilo.btn} title='Sobre' onPress={navegarSobre}/>
            

        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        marginTop: 20 ,
        backgroundColor: 'red'
    }
})









 * Sobre





 * import React, {useLayoutEffect} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';

/*import { useRoute } from '@react-navigation/native';
const route = useRoute();
tbm Poderia ser usado assim para pegar o parametro(o const preciasa ir a baixo do export) 

export default function Sobre({ route }){ /*route é para 'importar' o obj  

function navegarContato(){
    navigation.navigate('Contato')
}

    const navigation = useNavigation();

useLayoutEffect(()=>{ /*useLayoutEffect quando terminar de exibir ai sim ele vai renderizar 
    navigation.setOptions({ /*setOptions é uma propiedade para mudar estli do header pq ja vem header padrão
        title: route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome
        /*Se veio alguma informação pelo route exiaba o que veio, se não veio exiba Pagina Sobre  
    })
},[navigation])// as []são chamadas de dependencias 

    return(
        <View style={estilo.container}>
            <Text>Tela Sobre</Text>
            <Text>{route.params?.email/*o ponto de (?) é para caso não encontre não venha vazio e sim apenas fique em branco}</Text>
            <Button title='Voltar' onPress={()=> navigation.goBack() } /*goBack Voltar tela/>
            <Button style={estilo.btn} title='Contato' onPress={navegarContato}/>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
 * 


contato


import React from 'react';
import {View, Text, Button} from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato(){
    const navigation = useNavigation();

    function voltarHome(){
        navigation.dispatch(StackActions.popToTop())// para limpar todas as pilhas e ir para home
    }
    return(
        <View>
            <Text>Pagina Contato</Text>
            <Button title='Home' onPress={voltarHome}/>
        </View>
    )
}

*/