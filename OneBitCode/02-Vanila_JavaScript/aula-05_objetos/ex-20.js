//funções dentro de ojetos

let carros = {
    modelo: "fox", cor:"branco", stat: function(){console.log("ligando a nave")}
}

carros.velocidade = 0

carros.aceleracao = function( aceler){
    this.velocidade += aceler
}

console.log(carros)

console.log(carros.aceleracao( 10))

console.log(carros)

