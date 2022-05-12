let carro = {
    nome: "gol",
    roda: 20,
    cor: "preto"
}
let modelo = carro.nome
let pigimentação = carro.cor
console.log(modelo, pigimentação)

let avião = {
    nome: "boing737",   
    tamanho: 80,
    empresa: "avianca"
}
let {nome: nomeAvi, tamanho} = avião
console.log(nomeAvi, tamanho)


let marcas = ["gol", "palio"]
let = [volks, Fiat] = marcas
console.log(volks, Fiat)