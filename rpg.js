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

    if (classe == "iniciante" && level >= 20) {
        classe = "guerreiro";
        console.log(`Parabéns! Você evoluiu para a classe ${classe}!`);
    }
    else if (classe == "guerreiro" && level >= 40) {
        classe = "cavaleiro";
        console.log(`Parabéns! Você evoluiu para a classe ${classe}!`);
    }
    else if (classe == "cavaleiro" && level >= 60) {
        classe = "paladino";
        console.log(`Parabéns! Você evoluiu para a classe ${classe}!`);
    }
    else if (classe == "paladino" && level >= 80) {
        classe = "santo";
        console.log(`Parabéns! Você evoluiu para a classe ${classe}!`);
    }


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

    if (inimigo == 2) {
        console.log("Um esqueleto apareceu!");
        
        if (inimigoEscolha == 1 || missenimigo == 1) {
            console.log("O esqueleto atacou e causou 5 de dano!");
            vidada -= 5;
        }
        else if (inimigoEscolha == 1 || missenimigo == 2) {
            console.log("Mas o ataque do esqueleto errou!");
        }
        if (inimigoEscolha == 2) {
            console.log("O esqueleto usou magia e causou 15 de dano!");
            vidada -= 15;
        }
        else if (inimigoEscolha == 2 || missenimigo == 2) {
            console.log("Mas a magia do esqueleto falhou!");
        }
    }

    if (vidada <= 0) {
        console.log(`${nome} foi derrotado! Fim de jogo.`);
        break;
    }

    console.log("");
    
    if (inimigoVida1 <= 0) {
        console.log("O inimigo foi derrotado!");
        level += 10;
        ATK += 5;
        mana += 2;
        inimigoVida1 = 30 + (level * 2);
        inimigoATK1 = 3 + (level * 1);
        console.log(`Parabéns! Você subiu para o nível ${level}!`);
        console.log(`Seu ataque aumentou para ${ATK} e sua mana aumentou para ${mana}.`);
    }

    if (classe == "santo" && level >= 100) {
        console.log("Parabéns! Você atingiu o nível máximo e se tornou um santo lendário!");
        break;
    }
}