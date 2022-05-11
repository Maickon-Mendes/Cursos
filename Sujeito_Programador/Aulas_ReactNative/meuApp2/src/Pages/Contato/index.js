import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Contato(){

    return(
        <View style={estilo.container}>
            <Text>Tela Contato</Text>
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