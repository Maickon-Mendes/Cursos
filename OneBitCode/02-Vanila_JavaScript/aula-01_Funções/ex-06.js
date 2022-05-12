/*Funções anonimas*/
let velocicidade = function(vel){
    return vel*2
}
let novaVel = velocicidade(20)
console.log(novaVel)

let acele = function(velo){
    return velo * 2 
}
console.log(acele(60))

/*As funções normais são lidas antes d tudo no codigo então se o console log chamando a função estiver acima da função ele vai funcionar normalmente [  Ja a s funções anonimas são lidas nas ordens, então a chamada precisa estar sempre a baixo delas para que não ocorra problemas*/