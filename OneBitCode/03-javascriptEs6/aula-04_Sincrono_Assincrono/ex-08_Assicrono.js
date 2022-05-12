function step02(){
    console.log("Passo 02");
}

console.log("passo 01")
step02()
console.log("passo 03")

console.log("passo 04")

setTimeout(()=> {           //atributo assincrono
    console.log("passo 05")
},1000)

console.log("passo 06")