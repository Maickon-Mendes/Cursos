let  p = new Promise((resolve, reject) => {
    let res = 2 + 3
    if(res == 4){
        resolve("Susseço! ")
    }else{
        reject("Falha! ")
    }
})

p.then((mensagem)=>{  // o then se referencia ao resolve
    console.log(" esse é o then " + mensagem)
})
p.catch((erro)=>{       // o catch se referencia ao reject
    console.log("esse é o catch " + erro) //promise tbm faz gerar falha no console
})