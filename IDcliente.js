const readline = require("readline-sync");

let nome = readline.question("Qual o seu nome ?");

let idade = readline.questionInt("Qual a sua idade ?");

let temCupom = true;

let preco_cheio = 30

if ( idade >= 60){
    preco_cheio = 30/2
}

else if (idade <= 18 && temCupom == true ){
    preco_cheio = (30*20)/100
}
else{
    preco_cheio = 30
}



if (idade <= 18 && temCupom == true){
    console.log(`Ola ${nome}, o valor do ingresso desse filme é de R$ ${preco_cheio}.`)
}
else if (idade >= 60){
    console.log(`Ola vovó ${nome}, o valor do ingresso desse longa metragem é de ${preco_cheio / 10} conto de reis.`)
}
else{
    console.log(`Ola ${nome}, o valor do ingresso é R$ ${preco_cheio}.`)
}