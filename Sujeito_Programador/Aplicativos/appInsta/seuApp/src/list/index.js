import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function List(props) { /*Recebe via Propriedades */

    function carregaIcone(curtiu){
        return curtiu ? require('../img/likeada.png') : require('../img/like.png')
    }

    function mostraLikes(likers){
        if(likers === 0){
            return;
        }
        return(
            <Text style={estilo.likes}>{likers} {likers > 1 ? 'curtidas' : 'curtida'}</Text>
        )
    }

    return (
        <View>
            <View style={estilo.viewPerfil}>
                <Image
                    source={{ uri: props.data.imgperfil }}
                    style={estilo.fotoPerfil}
                />
                <Text style={estilo.nomeUsuario}> {props.data.nome} </Text>
            </View>

            <Image
            resizeMode='cover'
            source={{ uri: props.data.imgpublicacao }}
            style={estilo.fotoPuplicacao}
            />

            <View style={estilo.areaBtn}>
                <TouchableOpacity>
                    <Image
                    source={carregaIcone(props.data.curtiu)}
                    style={estilo.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={estilo.btnSend}>
                    <Image
                    source={require('../img/comment.png')}
                    style={estilo.iconeLike}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={estilo.btnSend}>
                    <Image
                    source={require('../img/send.png')}
                    style={estilo.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            {mostraLikes(props.data.likers)}

            <Text style={estilo.nomeRodape}> {props.data.nome}</Text>
            <Text style={estilo.descRodape}> {props.data.descricao}</Text>

        </View>
    )
}

const estilo = StyleSheet.create({
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nomeUsuario: {
        paddingLeft: 5,
        fontSize: 22,
        color: '#000'
    },
    fotoPuplicacao:{
        height: 400,
        alignItems: 'center'
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike:{
        width: 25,
        height: 25
    },
    btnSend:{
        paddingLeft: 5,
    },
    likes:{
        fontWeight: 'bold',
        marginLeft: 5,
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5
    },
    descRodape:{
        marginLeft: 5,
        paddingBottom: 10,
        fontSize: 15,
    },
});

//rever sobre o data 
// rever sobre props