import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native'; //Hoock para importar a navegação

export default function Home(){

    function IrparaSobre(){
        navigation.navigate('Sobre')
    }

    const navigation = useNavigation();
    return(
        <View style={estilo.container}>
            <Text>Tela Home</Text>
            <Button title='Sobre' onPress={IrparaSobre}/>
        </View>
    )
}       

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})