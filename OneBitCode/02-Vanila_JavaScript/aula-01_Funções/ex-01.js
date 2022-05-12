function medidorVel (velocidade, aceleracao){
    return velocidade + aceleracao
}
console.log(medidorVel(10,30))
console.log(medidorVel(20,50))
console.log(medidorVel(50, 60))

function comprimentar (nome , mensagem = "ola"){
    return mensagem + ", " + nome 
}
console.log(comprimentar("Bem vindo", "Maickon"))
console.log(comprimentar("Maickon"))

function balaca(pValor, sValor, medida = " quilos"){//o parametro com a valor já atribuido precisa ficar por ultimo para não mudar a ordem 
    return pValor + sValor +medida
}
console.log(balaca(20,30," toneladas"))
console.log(balaca(20,30,))
