let planetJson = '{"colaboradores":['+   //arquivo em JSON
'{"nome":"Bruno","salario":1000,"idade":40},'+
'{"nome":"Bruno","salario":1000,"idade":40},'+
'{"nome":"Bruno","salario":1000,"idade":40},'+
'{"nome":"Bruno","salario":1000,"idade":40},'+
'{"nome":"Bruno","salario":1000,"idade":40}'+
']}'


let bruno = [       //array objeto
{"nome":"Bruno" ,"salario":1000,"idade":40},
{"nome":"Bruno","salario":1000,"idade":40},
{"nome":"Bruno","salario":1000,"idade":40},
{"nome":"Bruno","salario":1000,"idade":40},
{"nome":"Bruno","salario":1000,"idade":40}
]

let planeta =  JSON.parse(planetJson)      //parse converte de json para objeto

let convJSON = JSON.stringify(bruno)        //stringfy converte objeto para json 

console.log(planeta)  

console.log(convJSON)