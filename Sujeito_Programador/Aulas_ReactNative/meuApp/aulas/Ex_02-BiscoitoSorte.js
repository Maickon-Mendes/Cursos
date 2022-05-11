import React, {useState} from 'react'; //Importando a biblioteca react
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'; //importando Componentess da biblioteca

function App() {

  const[img, setImg] = useState(require('./src/biscoito.png'))
  const[textoFrase, setTextoFrse] = useState('')

  let frases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.'
  ];

  function quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    
    setTextoFrse('" ' + frases[numeroAleatorio] + '" ');

    setImg(require('./src/biscoitoAberto.png'))
  }

  function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'))
    setTextoFrse('')
  }

  return (

   <View style={estilo.container}>

    <Image
    source={img}
    style={estilo.img}
    />

      <Text style={estilo.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={estilo.botao} onPress={(quebrarBiscoito)}>
        <View style={estilo.btnArea}>
          <Text style={estilo.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[estilo.botao, { marginTop:15, borderColor: '#121212' }]} onPress={(reiniciarBiscoito)}>
        <View style={estilo.btnArea}>
          <Text style={[estilo.btnTexto, {color: '#121212'}]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>

   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    textAlign: 'center',
    margin: 30,
    fontStyle: 'italic',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius:25,
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  }

})
export default App;