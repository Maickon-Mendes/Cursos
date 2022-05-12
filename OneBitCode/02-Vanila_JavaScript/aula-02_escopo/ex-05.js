let nome = "maickon"/*como a let esta fora da função ela atua com escolpo globabal.. se estivesse dentro da função não funsionaria nos console fora da função*/
function mudarNome(){
    nome = "Adriele"
}
console.log(nome)
mudarNome()
console.log(nome)

function teste(){
    let velocidade = 50
    if(velocidade == 50){
        velocidade = 60
        var nomeNove = "elemental"
        let typoNave = "batalha"
    }
    console.log(velocidade)
    console.log(nomeNove)
    //console.log(typoNave)  daria um erro pois a variavel foi declarada com let assim ficando fora de escolpo de onde a função esta sendo chamda, nesse caso usar o var
}
teste()