const readline = require("readline-sync");

let compras = ["banana", "maçã", "laranja", "pera"];

console.log("Lista de compras: ", compras);

console.log("o primeiro item da lista é: "+ compras[0]);

console.log("o ultimo item da lista é: "+ compras[3]);

compras[2] = "abacaxi";

console.log("Lista de compras atualizada: "+ compras);

compras.push("SPRITE");
compras.push("FANTA");

console.log("Lista de compras atualizada: "+ compras);

compras.pop();
compras.pop();
compras.pop();

console.log("Lista de compras atualizada: "+ compras);
