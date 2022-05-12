// Metodos estaticos

class cacamba{
    constructor(nome, cargamens){
        this.nome = nome
        this.cargamens = cargamens
    }

    static cargaHoras(cargamens, horas){
        return cargamens / 720 * horas
    }
}

let processo = new cacamba("gaia", 2000)
//processo.cargaHoras(processo.cargamens, 10) o static não pode ser chamado assim

let totalPro = cacamba.cargaHoras(processo.cargamens,10)

console.log(totalPro)