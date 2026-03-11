const readline = require("readline-sync");

let vidada = 100;
let ATK = 10;
let mana = 5;
level = 1;

let inimigoVida1 = 30;
let inimigoATK1 = 3;


console.log("[]=============================[]");
console.log("[]==== BEM VINDO AO RPG! ======[]");
console.log("[]=============================[]");

let nome = readline.question("Digite o nome do seu personagem: ");

let classe = "iniciante";

while (true) {


    let miss = Math.floor(Math.random() * 2) + 1; // Número aleatório entre 1 e 2

    let missenimigo = Math.floor(Math.random() * 2) + 1; // Número aleatório entre 1 e 2
    let inimigoEscolha = Math.floor(Math.random() * 2) + 1; // Número aleatório entre 1 e 2

     let inimigo = Math.floor(Math.random() * 5) + 1; // Número aleatório entre 1 e 5

    console.log(`${nome} = Vida: ${vidada} || Mana: ${mana}`);
    console.log("");

    let escolha = readline.question("Escolha uma ação: [1] Atacar, [2] Usar Magia || [3] Meditar, [4] Curar: ");
    console.log("");
    console.log("");

    if (escolha == 1 || miss == 1) {
        console.log(`${nome} atacou o inimigo e causou ${ATK} de dano!`);
    } 
    else if (escolha == 1 || miss == 2) {
            console.log("Mas o ataque errou!");
        } 

    else if (escolha == 2 || miss == 1) {
        if (mana >= 5) {
            console.log(`${nome} usou magia e causou 20 de dano!`);
            mana -= 5;
        } 
        else if (escolha == 2 || miss == 2) {
            console.log("Mas a magia falhou!");
        }
        else {
            console.log("Mana insuficiente para usar magia!");
        }
    }

    if (escolha == 3) {
        console.log(`${nome} está meditando e recuperando mana.`);
        mana += 5;
    }

    if (escolha == 4) {
        console.log(`${nome} usou uma poção de cura e recuperou 20 de vida!`);
        vidada += 20;
    }

    console.log("");


    if (inimigo == 1) {
        console.log("Um goblin apareceu!");

        if (inimigoEscolha == 1 || missenimigo == 1) {
            console.log("O goblin atacou e causou 3 de dano!");
            vidada -= inimigoATK1;
        } 

        else if (inimigoEscolha == 1 || missenimigo == 2) {
            console.log("Mas o ataque do goblin errou!");
        }
        if (inimigoEscolha == 2) {
            console.log("O goblin usou magia e causou 10 de dano!");
            vidada -= 10;
        }

        else if (inimigoEscolha == 2 || missenimigo == 2) {
            console.log("Mas a magia do goblin falhou!");
        }
    }
}