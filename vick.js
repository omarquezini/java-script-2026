const readline = require("readline-sync");

let vetor = [];

let numero = 0;


vetor.push( readline.question("Digite seu nome: ") );

let amigos = readline.question("Quantos amigos você tem? ");

while (numero < amigos) {
    vetor.push( readline.question("Digite o nome do seu amigo: ") );
    amigos--;
}

console.log("Seus amigos são: "+ vetor);
