const readline = require("readline-sync");

let vetor = [];

let broderagem = [];

let numero = 0;


vetor.push( readline.question("Digite seu nome: ") );

let amigos = readline.question("Quantos amigos você tem? ");

while (numero < amigos) {
    broderagem.push( readline.question("Digite o nome do seu amigo: ") );
    amigos--;
}

console
console.log(`Esses são os amigos do(a) ${vetor}: ${broderagem}`);


