//Variaveis státicas
/*class Aeronave {
    static get desaleração(){
        return 0.15
    }
    constructor(nome, veloReco){
        this.nome = nome
        this.veloReco = 0
    }
    acelerar(aceleração){
        this.veloReco += (aceleração * (1 - Aeronave.desaleração))
    }
}

let aeronave = new Aeronave("boing737")
aeronave.acelerar(100)
console.log(aeronave)*/

class carro {
     static get desaleração(){
         return 0.15
     }
    constructor(nome, velocidade) {
        this.nome = nome
        this.velocidade = 0
    }
    acelerar(aceleração){
        this.velocidade += (aceleração * (1 - carro.desaleração))
    }
}

let camaro = new carro("camaro")
camaro.acelerar(100)
console.log(camaro)