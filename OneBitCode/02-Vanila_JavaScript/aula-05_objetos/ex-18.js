//objetos
//objetos tbm podem ser declarados vazios

let gol = {tipo:"popular", cor:"branco", motor:1.0}
gol.arCondicionado = true  //formas de adicionar externamente informção a um ojeto
gol["bancos"] = "couro"     //formas de adicionar externamente informção a um ojeto
console.log(gol)
console.log(gol.cor)//duas formas diferentes de acessar o item dentro do objeto
console.log(gol["cor"]) //usar essa forma quando precisa procurar algum número ou propriedade com espaço no nome