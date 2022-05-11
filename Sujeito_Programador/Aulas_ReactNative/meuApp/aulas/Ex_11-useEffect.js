import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from 'react-native'; 

export default function App() {
  const [contador, setContador] = useState(0);
  const [renderizado, setRenderizado] = useState(false)


  /*useEffect = quando o APP for montado na tela chama a função dentro dos {} */
  useEffect(()=> {

    console.log('mudou')
    /*setTimeout(()=>{
      setContador(350)
    },3000)*/
  } , [contador]);
/*colocando o valor da const dentro de [] o useEffect vai ser chamado*/
  return (

   <View style={estilo.container}>
     <Button title='Almentar' onPress={()=> setContador(contador + 1)}></Button>
     <Text style={{fontSize:30,padding: 20,}}>{contador}</Text>
     <Button title='Diminuir' onPress={()=> setContador(contador - 1)}></Button>

     <Button title='Mostrar Nome' onPress={ () => setRenderizado(true)}/>

    {renderizado && <Nome/> /*se renderizado estiver false não vai mostrar */}

   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#959595',
  },
})

function Nome(){
  useEffect(()=>{
    console.log('ok')

    return() => console.log('componente desmontado')//isso só ira ser chamado quando o componente for des,ontado

  }, [])
  return <Text>Maickon</Text>
}