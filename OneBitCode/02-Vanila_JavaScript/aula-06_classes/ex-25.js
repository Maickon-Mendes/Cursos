/*class capitao{
    constructor(nome, idade, HorasVoo){
        this.nome = nome
        this.idade = idade
        this.HorasVoo = HorasVoo
    }
}

class Aeronave{
    constructor(nome, qtdTripulantes, nomeCapitao, idadeCapitao, HorasVooCapitao){
        this.nome = nome
        this.qtdTripulantes = qtdTripulantes
        this.capitao = new capitao(nomeCapitao, idadeCapitao, HorasVooCapitao)
    }
}

let aeronave = new Aeronave("Artemis", 13, "Will Grey", 45, 1500)
console.log(aeronave)*/

class piloto{
    constructor(nome, idade, horasVoo){
    this.nome = nome
    this.idade = idade
    this.horasVoo = horasVoo
    }
}

class aeronave{
    constructor(nome, qtdTripulantes, nomePiloto, idadePiloto, horasVooPiloto){
        this.nome = nome
        this.qtdTripulantes = qtdTripulantes
        this.piloto = new piloto(nomePiloto, idadePiloto, horasVooPiloto)
    }
}

let Piloto = new aeronave("Colosus", 200, "Maickon", 26, 5000)
console.log(Piloto)