const readline = require("readline-sync");



const notas = [7.5, 8.0, 6.0, 9.5, 5.0];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

const media = soma / notas.length;



console.log(`A soma das notas é: ${soma.toFixed(2)}`);
console.log(`A média das notas é: ${media.toFixed(2)}`);
