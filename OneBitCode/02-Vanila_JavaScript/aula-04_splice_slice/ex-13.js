//splice =emendar ou conturar

let carros = ["onix", "fox","fiesta", "gol", "palio"]
console.log(carros)

let subsCarros = carros.splice(1, 3, "peugeot 206", "golf", "strada") // = apartir da casa 1 remova 3 elementos do array, e adiocione os seguintes elementos
console.log(carros)
console.log(subsCarros)//vai imprimir os itens que removeu