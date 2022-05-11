import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity,Image} from 'react-native';

export default function Header(){
    return(
        <View style={estilo.header}>
            <TouchableOpacity>
                <Image
                    source={require('../img/logo.png')}
                    style={estilo.logo}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('../img/send.png')}
                    style={estilo.send}
                />
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    header:{
        height: 55,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15, 
        paddingRight: 15,
        borderBottomWidth:0.2,
        shadowColor: '#000',
        elevation: 2,
        
    },
    send:{
        width: 23,
        height: 23,
    },
})