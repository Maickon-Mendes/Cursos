// get
class caçamba{
    constructor(nome, cargaMes){
        this.nome = nome
        this.cargaMes = cargaMes
    }
    get cargaSem(){
        return this.cargaMes / 4
    }
}

let bobcat = new caçamba("bobcat", 1000)

console.log(bobcat.cargaSem)
console.log(bobcat)