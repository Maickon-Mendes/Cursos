let carros = ["fiesta", "fox", "gol", "palio"]

let nome = carros.filter( elemento => {return elemento.length >= 4})
console.log(nome)// o .find() tem a mesma função só que só retorna o primeiro elemanto que atende a essa condição