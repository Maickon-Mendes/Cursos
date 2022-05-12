class Aeronave {
    constructor(nome, qtPassageiros, velRecomendada){
        this.nome = nome
        this.qtPassageiros = qtPassageiros
        this.velRecomendada = velRecomendada
        this.velocidade = 0
    }
    acelerar(aceleração){
        this.velocidade +=aceleração
        if(this.velocidade > this.velRecomendada){
            console.log("Velocidade maxima ultrapassada")
        }
    }
}

class AeronaveBatalha extends Aeronave{     //extends == erdando inf da class Aeronave
    parar(){
        this.velocidade = 0
        console.log("Recolhendo arrmas, e parando Batalhas")
    }
} 

class AeronavePequisa extends Aeronave{     //extends == erdando inf da class Aeronave
    parar(){
        this.velocidade = 0
        console.log("Recolhendo equipamentos de amostra e parando nave")
    }
} 

let darwin = new AeronaveBatalha("darvin", 100, 1000)
let fenix = new AeronavePequisa("fenix", 4, 300)

darwin.acelerar(1050)
fenix.acelerar(200)


console.log(darwin)
console.log(fenix)