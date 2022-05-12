let aeronaves = [["fenix", 4, true], ["golias", 15, true], ["helmet", 6 , true], ["elemantal", 3, false], ["darvin", 20, true]] 

let filtro = aeronaves.filter(elementos => { return elementos[1] > 9}).map(pos => {return pos[0]})

let pendende = aeronaves.findIndex(elemen => {return elemen[2] == false})

let letras = aeronaves.map(element => { return element[0].toUpperCase()})

console.log(filtro)
console.log(pendende)
console.log(letras)
        