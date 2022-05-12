/*class Spaçonave{
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
class naveTransport extends Spaçonave{
    constructor(nome, capaMaxima, maxVel, maxPeso){
        super(nome, capaMaxima, maxVel)     //super()Ta se referindo ao construtor da primeira class declarada
        this.maxPeso = maxPeso       
    }
    acelerar(aceleração){
        aceleração /= 2
        console.log(`incrementando velocidade em ${aceleração} km/s`)
        super.acelerar(aceleração)
    }
}

let nave = new naveTransport("transportadora", 4, 100, 400)

console.log(nave)
nave.acelerar(210)*/

class Aeronave{
    constructor(nome, pesoMax, maxVel) {
        this.nome = nome
        this.pesoMax = pesoMax
        this.maxVel = maxVel
        this.velocidade = 0
    }
    acelerar(aceleração){
        this.velocidade += aceleração
        if(this.velocidade > this.maxVel){
            console.log("limite de velocidade ultrapassado")
            
        }
    }
}

class AeronaveTransort extends Aeronave{
    constructor(nome, pesoMax, maxVel, maxtripul){
        super(nome, pesoMax, maxVel)
        this.maxtripul = maxtripul
    }
    acelerar(aceleração){
        aceleração /= 2
        console.log(`incrementando velocidade em ${aceleração}`)
        super.acelerar(aceleração)      //para reaproveitar a classe
    }
}

let avião = new AeronaveTransort("bong 737", "15 Toneladas", 800, 150)

avião.acelerar(400)

console.log(avião)



class HitchPlatform {
    constructor(maxWeight) {   
     this.maxWeight = maxWeight   
    }  
   }
   class SmallSpaceshipPlatform extends HitchPlatform {  
    constructor(maxWidth) { 
     super() 
     this.maxWidth = maxWidth 
    } 
   }
   let smallPlatform = new SmallSpaceshipPlatform(10.3)
   
   console.log(smallPlatform)



   class Spaceship {
    constructor() { 
      alert("Nave espacial instanciada!") 
     } 
    }    
    class BattleSpaceship {    
    constructor() {    
      this.spaceship = new Spaceship()    
      alert("Nave espacial de batalha instanciada!")    
    }    
    }




    