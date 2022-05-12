let carros = ["fiesta", "focus", "gol", "palio"]

let CarrosLetMaisc = carros.map(function(uper){//map percorre todos os itens e fas a alteração pedida na função
    let saveAlt = uper.toUpperCase()
    return saveAlt
})

console.log(CarrosLetMaisc)