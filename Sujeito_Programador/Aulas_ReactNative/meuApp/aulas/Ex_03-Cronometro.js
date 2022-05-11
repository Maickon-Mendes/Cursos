import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native'; 

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

function App() {

  const [numero, setNumero] = useState('00:00:00');
  const [botao, setBotao] = useState('Iniciar')
  const [resultado, setResultado] = useState(null)

  function iniciar(){
    if(timer !== null){
      clearInterval(timer); // parar o timer
      timer = null;
      setBotao('iniciar');
    }else{
      timer = setInterval(()=>{
        ss++;
        
        if(ss == 60){
          ss = 0;
          mm++
        }
  
        if(mm == 60){
          mm=0;
          hh++
        }
  
        let format = 
        (hh < 10 ? '0' +hh : hh ) + ':'
        +(mm < 10 ? '0' + mm : mm ) + ':'
        +(ss < 10 ? '0' + ss : ss )// if (ss < 10) { ss = 0 + ss}else{ss}
  
        setNumero(format);
        
      },1000);
      setBotao('Parar');
    }
  }

  function limpar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
    }

    setResultado(numero);

    setNumero('00:00:00');
    ss= 0; 
    mm = 0; 
    hh = 0;
    setBotao('Iniciar')
  }

  return (

   <View style={estilo.container}>
     <Image
     source={require('./src/cronometro.png')}  
     />

     <Text style={estilo.timer}>{numero}</Text>

    <View style={estilo.btnArea}>
      <TouchableOpacity style={estilo.btn} onPress={iniciar}>
        <Text style={estilo.btnTexto}>{botao}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.btn} onPress={limpar}>
        <Text style={estilo.btnTexto}>Limpar</Text>
      </TouchableOpacity>
      
    </View>

    <View style={estilo.campoResposta}>
      <Text style={estilo.textoCampRes}>
        {resultado ? 'Ultimo tempo: ' + resultado : ''}
      </Text>
    </View>

   </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42b3f5'
  },
  timer:{
    fontSize: 45,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
  },
  btn:{
    backgroundColor: 'white',
    width: 100,
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  btnTexto:{
    fontSize: 25,
    color: '#42b3f5',
    padding: 5,
    fontWeight: 'bold'
  },
  campoResposta:{
    flex: 1,
  },
  textoCampRes:{
    fontSize: 25,
    color: 'white',
    fontStyle: 'italic'
  },
})
export default App;
