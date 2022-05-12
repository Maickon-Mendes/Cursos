//introdução a arrays
let aeronaves = ["boing", "airbus","f500"]
console.log(aeronaves)
aeronaves.push("transAtlantico")//adiciona o elemento
console.log(aeronaves)
console.log(aeronaves.length)//quantos itens tem na array
let posAeronave = aeronaves.indexOf("airbus")//Procurar item especifico dentro da array  OBS, se não encontrar o elemento ele retorna-1
console.log(posAeronave)


//pop() remove o ultimo elemento do array
//shift() remove o primeiro elemento do array
//unshift() adiciona no primeiro elemento do array