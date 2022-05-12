let planet = {
    name: "terra",
    caracteristicas: {
        areaSuperf: 510072000,
        diametro: 12756.2
    }, 
    cor: ["azul", "branco", "marrom"],
    inicioRot: "00:00",
    fimRot: "23:59"
}
let plan = JSON.parse(planet)  //não funcionou
console.log(plan)

