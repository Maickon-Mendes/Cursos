// cláusula throw  forma de lançar um erro
/*class arma{
    constructor(nome, munição) {
        this.nome = nome
        this.munição = 5
    }
    atirar(){
        if(this.munição > 0){
            console.log("bang")
            this.munição -= 1
        }else{
            throw new Error(`Arma ${this.nome} sem munição`)
        }
    }
    recarregar(){
        this.munição = 5
    }
}

let scar = new arma("scar")
try{
scar.atirar()
scar.atirar()
scar.atirar()
scar.atirar()
scar.atirar()
scar.atirar()
}catch(e){
    console.log(e.message)
    scar.recarregar()
} finally{
    console.log("Só capão ----------------------------amarelo")
}
console.log(scar)*/


class arma {
    constructor(nome, munição) {
        this.nome = nome
        this.munição = 5
    }
    atirar(){
        if(this.munição > 0){
            console.log("bang")
            this.munição -= 1
        }else{
            throw new Error(`${this.nome} sem munição`)
        }
    }
    recarregar(){
        this.munição = 5
    }
}

let awm = new arma("awm")
try{
    awm.atirar()
    awm.atirar()
    awm.atirar()
    awm.atirar()
    awm.atirar()
    awm.atirar()
}catch(e){
    console.log(e.message)
    awm.recarregar()
}finally{
    console.log("só capa de 150")
}

console.log(awm)