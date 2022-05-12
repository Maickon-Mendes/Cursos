/*High Order Function*/
function dobrarVelocidade(velocidade, print){
    console.log("Entrei em dobro de velocidade")
    let multVel = velocidade * 2
    print(multVel)
    return multVel
}

let res = dobrarVelocidade(60, velo=>{
    console.log(`velocida duplicada para ${velo}`)
})

/*Função de alta classe    colback */