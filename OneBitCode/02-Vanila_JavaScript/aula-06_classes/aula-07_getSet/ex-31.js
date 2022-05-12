//get
class Aeronave{
    constructor(nome, maxVel){
        this.nome = nome
        this.maxVel = maxVel
        this.velocidade = 0
    }
    set Veloc(newVelo){
        if(newVelo > 120){
            this.velocidade = 120
        }else{velocidade = newVelo
        }
    }
}

let aeronave = new Aeronave("transport", 50)

aeronave.Veloc = 100

console.log(aeronave)

/*class carro {
    constructor(nome){
        this.nome = nome
        this.vel = 0
    }
    set veloc(newVel){
        if(newVel > 120){
            this.Vel = 120
        }else{
            vel = newVel
        }
    }
}

let boxter = new carro("boxter")
boxter.veloc = 100
console.log(boxter)*/