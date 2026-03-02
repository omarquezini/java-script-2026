const readline = require('readline-sync');

let listFinal = "";

let contador = 0;

let continuar = "s";

console.log("cadrasto de miseraveis."/n);

while (continuar === "s"){
    contador++;

    let nome = readline.question(`[digite o nome do desgraçado] ${contador}:`);
    let idade = readline.question(`[digite a idade do convidado] ${nome}:`/n);

    listFinal += `${contador}, nome: ${nome}, idade: ${idade}.`;

    continuar = readline.question("deseja cadastrar mais alguem??? (s/n):"/n)
}
console.log("CONVIADOS (não sou homofobico, tenho até amigos que são.):"/n);

if (listFinal === ""){
    console.log("você adiquiriu depreção");
}
else{
    console.log(listFinal);
}