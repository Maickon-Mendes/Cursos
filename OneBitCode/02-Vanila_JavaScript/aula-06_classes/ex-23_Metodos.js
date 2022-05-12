class carro{
    constructor(modelo){
        this.modelo = modelo
        this.vel = 0
    }
    acelerar(acele){
        this.vel += acele
    }
}

let polo = new carro("Polo")

polo.acelerar(20)
polo.acelerar(60)

console.log(polo)