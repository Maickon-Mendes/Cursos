let mustang = {
    nome: "mustang",
    velocidade: 80,
    aceleração: 10
}

let vel = (velocidade, aceleração)=> {
    new Promise((resolve, reject) => {
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

vel (mustang.velocidade, mustang.aceleração)

console.log("executando promises")












/*const vel25seg = (velocidade, aceleração) =>{
new Promise(function(resolve, reject){
    setTimeout(() =>{
    if(aceleração > 0){
        velocidade += aceleração * 2
        console.log(`Nova velocidade: ${velocidade}`)
        resolve(velocidade)
    }else{
        console.log("Aceleração invalida")
        reject("Não possue aceleração")
    }
},2000)
})
}

vel25seg(mustang.velocidade, mustang.aceleração)

console.log("execução de promises")*/