let mustang = {
    nome: "mustang",
    velocidade: 80,
    aceleração: 0
}

let vel = (velocidade, aceleração)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(aceleração > 0){
                velocidade += aceleração
                console.log(`Velocidade de ${velocidade}`)
                resolve(velocidade)
            }else{
                console.log("Veiculo sem aceleração")
                reject("Falha na ação")
            }
        }, 2000);
    })
}

vel (mustang.velocidade, mustang.aceleração).then(velocidade => { //so vai executar depois que a promise for executada
    mustang.velocidade = velocidade
    console.log(`depois de acelerar ${mustang}`)
}).catch(menssagem =>{      //o catch vai pegar a mensagen do reject
    console.log(`mustang: ${menssagem}`)
})

console.log("executando promises")

