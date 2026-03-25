const readline = require("readline-sync");

const notas = [];
let soma = 0;

let numeros = parseInt(readline.question("Quantas materias você tem? "), 10); // converter para número

for (let i = 0; i < numeros; i++) {
    let nota = parseFloat(readline.question("Digite sua nota: ")); // converter para número decimal
    notas.push(nota);
    soma += nota; // somando já os números
}

const media = soma / notas.length;

console.log(`A soma das notas é: ${soma.toFixed(2)}`);
console.log(`A média das notas é: ${media.toFixed(2)}`);
