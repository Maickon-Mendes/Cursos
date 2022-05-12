/*export default User             //precisa declarar nome
import user from'arquivo.js'

export function user(){}                     // precisa usar nome da função
import {user} from'arquivo.js'*/


export default class superHero {
    constructor (nome, poder){
        this.nome = nome
        this.poder = poder
    }
}

export function printNome(heroi){
    console.log(`super herói ${heroi.nome}`)
}

export function printPoder(heroi){
    console.log(`Poder de ${heroi.poder}`)
}