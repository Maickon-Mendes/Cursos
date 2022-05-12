let carros = ["gol", "palio", "jetta"]
console.log(carros)
console.log(...carros)  //... = spread vai ler os elementos do array individualmente


let garagem = [...carros, "golf"]
console.log(garagem)


function acelerar(velocidade, aceleração){
    return velocidade += aceleração
}
let dados = [60, 40]
let vel = acelerar(...dados)
console.log(vel)