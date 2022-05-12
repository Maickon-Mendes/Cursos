 // arrays dentro de objeto
 
 let aronave = {lugares: 50, typo:"vooPrivado", tripulantes: ["marcelo", "marcos", "matheus"]}
 aronave.tripulantes.push("murilo")
 console.log(aronave)

 //objeto dentro de array

 let carros = [
    {modelo: "fox", cor:"branc0"},
    {modelo: "gol", cor:"vermelho"},
    {modelo:"jetta", cor:"preto"},
   { motoristas: ["marcelo", "marcos", "matheus"]}
 ]

 carros.forEach(Elementos => {
     console.log(`O carro ${Elementos.modelo} tem a cor ${Elementos.cor}`)
 })

 console.log(carros)
 console.log(carros[1].modelo)
console.log(carros[2].cor)


//objeto dentro de objeto

 let carro = {
     nome: "fiesta", cor:"verde", motorista: {nome:"marcelo", idade:"21"}
 }

 console.log(carro)
 console.log(carro.motorista.idade)