/* high order function */
function dobroVelocidade (velocidade, print){
    console.log("Entrei em dobro de velocidade")
    let newVelocidade = velocidade * 2
    print(newVelocidade)
    return newVelocidade
}

let printVelocidade = velocidade =>{
    console.log(`nova velocidade: ${velocidade} km/s`)
}

let newVel = dobroVelocidade(60, printVelocidade)
console.log(newVel)