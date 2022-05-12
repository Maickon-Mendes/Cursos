// Classes
class carros{
    constructor (bancos, cavalos){
        this.bancos = bancos
        this.cavalos = cavalos}
    }
let garagem = new carros("couro", "175")
console.log(garagem)



class naves {
    constructor (nome, tipo = "batalha"){
        this.nome = nome
        this.categoria = tipo
    }
}

let colosus = new naves ("colosus" , "passeio")

let Darvin = new naves ("Darvin")

console.log(colosus)

console.log(Darvin)