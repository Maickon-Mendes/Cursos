class Spaçonave{
    constructor(nome, capaMaxima, maxVel) {
        this.nome = nome
        this.capaMaxima = capaMaxima
        this.maxVel = maxVel
        this.velAtual = 0
    }


acelerar(aceleração){
    this.velAtual += aceleração
    if(this.velAtual > this.maxVel){
        console.log("velocidade máxima ultrapassada")
    }
}
}

class SpaçonaveTransport extends Spaçonave {
    acelerar(){
        console.log("Naves de transporte só aumentam em um km por segundo")
    this.velAtual += 1
}
}

let spaçonaveTransport = new SpaçonaveTransport("transportador", 4, 100)

console.log(spaçonaveTransport.acelerar())
/*
class aeronave {  
    constructor(nome){
        this.nome = nome
        this.vel = 0
    }
    acelerar(aceleração){
        this.vel += aceleração
    }
}

class AeronaveTranport extends aeronave{
    acelerar(){
        console.log("Naves de transporte só aceleram 1 km/s")
        this.vel += 1
    }
} 

let nave = new AeronaveTranport("nave")

nave.acelerar(50)*/
