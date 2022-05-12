const Aeronave = { 
    nome: "rontaro",
    quantBateria: 50,
    consumo:0.00008
}

const updateBateria = function(quantConsumo){
    return new Promise((resolve, reject) => {
        Aeronave.quantBateria -= quantConsumo
        if(Aeronave.quantBateria > 0){
            resolve(Aeronave.quantBateria)
        }else{
            reject("Bateria esgotada! Nave se desligara em alguns segundos.")
        }
    })
}

const Calculo = function(Velocidade, segundos){
    return new Promise((resolve, reject)=>{
        if(Aeronave.consumo <= 0 || Velocidade <= 0){
            reject("nave esta parada")
        }else{
            let quantConsu = Aeronave.consumo * Velocidade * segundos
            resolve(quantConsu)
        }
    })
}

Calculo(90, 300).then(quantConsu => {
    updateBateria(quantConsu).then(newQuant => {
        console.log(`Carga atual: ${newQuant}`)
    }).catch(error => {
        console.log(error)
    })
}).catch(error => {
    console.log(error)
})
