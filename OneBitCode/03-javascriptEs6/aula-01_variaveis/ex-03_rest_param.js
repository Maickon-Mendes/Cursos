function comprimentar(menssagem , nomes){
    nomes.forEach(nome => {
        console.log(`${menssagem}, ${nome}`)
    })
}
comprimentar("ola", ["marcos", "marcelo", "mateus"])


function garragem(msg, ...carros){  // o rest Params precisa ficar em ultimo ligar no parametro
    carros.forEach(carro => console.log(`${msg}, ${carro}`))
}

garragem("item", "jetta", "golf", "palio")