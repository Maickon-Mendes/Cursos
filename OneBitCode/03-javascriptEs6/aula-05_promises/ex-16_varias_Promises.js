let carro = function (Velocidade){
    return new Promise((resolve, reject)=>{
        if(Velocidade <= 0){
            reject("carro parado")
        }else{
            resolve( Velocidade * 0.9)
        }
    })
}

let consuBat = function(Velocidade, potBat){
    return new Promise((resolve, reject)=>{
        let porceBat = Velocidade + potBat / 1000
        if(porceBat <= 0){
            reject("Bateria sem carga")
        }else{
            resolve(porceBat)
        }
    })
}


let velocida = 70

let porceBtr = consuBat(velocida, 80)

Promise.all([velocida, porceBtr]).then((verdaddeiro)=>{
    console.log(verdaddeiro)
}).catch((falso)=>{
    console.log(falso)
})

/*let Velocidade = 70

let velAdicio = carro(Velocidade)
let porceBateria = consuBat(80, Velocidade)

Promise.all([velAdicio,porceBateria]).then((consults)=>{  //Promise.all = se uma das duas cair em erro a outra não vai ser executada
    console.log(consults)
}).catch(erros => {
    console.log(erros)
})*/