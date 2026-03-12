const readline = require("readline-sync");

console.log("================================");
console.log("==== BEM VINDO AO RPG TEXT ====");
console.log("================================");

let nome = readline.question("Nome do seu personagem: ");

let vida = 100;
let vidaMax = 100;
let mana = 20;
let manaMax = 20;
let atk = 10;

let level = 1;
let xp = 0;
let xpProx = 50;

let classe = "iniciante";

let pocoes = 3;

function evoluirClasse() {

    if (classe == "iniciante" && level >= 5) {
        classe = "guerreiro";
        atk += 5;
        vidaMax += 20;
        console.log("Você evoluiu para GUERREIRO!");
    }

    else if (classe == "guerreiro" && level >= 10) {
        classe = "cavaleiro";
        atk += 10;
        vidaMax += 30;
        console.log("Você evoluiu para CAVALEIRO!");
    }

    else if (classe == "cavaleiro" && level >= 15) {
        classe = "paladino";
        atk += 15;
        manaMax += 10;
        console.log("Você evoluiu para PALADINO!");
    }

}

function criarInimigo() {

    let tipo = Math.floor(Math.random()*3)+1;

    if (tipo == 1){
        return {nome:"Goblin", vida:30, atk:5, xp:20}
    }

    if (tipo == 2){
        return {nome:"Esqueleto", vida:40, atk:7, xp:30}
    }

    if (tipo == 3){
        return {nome:"Orc", vida:60, atk:10, xp:50}
    }

}

while(true){

console.log("\n===============================");
console.log(`${nome} | Classe: ${classe} | Level: ${level}`);
console.log(`Vida: ${vida}/${vidaMax} | Mana: ${mana}/${manaMax}`);
console.log(`XP: ${xp}/${xpProx} | Poções: ${pocoes}`);
console.log("===============================\n");

let inimigo = criarInimigo();

console.log(`Um ${inimigo.nome} apareceu!`);

while(inimigo.vida > 0){

console.log(`\n${inimigo.nome} Vida: ${inimigo.vida}`);

let escolha = readline.question(
"[1] Atacar\n[2] Magia\n[3] Meditar\n[4] Usar Poção\nEscolha: "
);

let miss = Math.random();

if(escolha == 1){

    if(miss < 0.8){
        console.log(`Você causou ${atk} de dano`);
        inimigo.vida -= atk;
    }else{
        console.log("Você errou o ataque!");
    }

}

else if(escolha == 2){

    if(mana >= 10){

        if(miss < 0.9){
            console.log("Magia causou 25 de dano!");
            inimigo.vida -= 25;
            mana -= 10;
        }else{
            console.log("Magia falhou!");
            mana -= 10;
        }

    }else{
        console.log("Mana insuficiente!");
    }

}

else if(escolha == 3){

    console.log("Você meditou e recuperou mana");
    mana += 10;
    if(mana > manaMax) mana = manaMax;

}

else if(escolha == 4){

    if(pocoes > 0){
        console.log("Você usou uma poção!");
        vida += 30;
        pocoes--;

        if(vida > vidaMax) vida = vidaMax;
    }else{
        console.log("Você não tem poções!");
    }

    console.log("\n===============================");
    console.log(`${nome} | Classe: ${classe} | Level: ${level}`);
    console.log(`Vida: ${vida}/${vidaMax} | Mana: ${mana}/${manaMax}`);
    console.log(`XP: ${xp}/${xpProx} | Poções: ${pocoes}`);
    console.log("===============================\n");

}

if(inimigo.vida <= 0){
    console.log(`Você derrotou o ${inimigo.nome}!`);
    xp += inimigo.xp;
    break;
}

let missInimigo = Math.random();

if(missInimigo < 0.8){
    console.log(`${inimigo.nome} atacou e causou ${inimigo.atk}`);
    vida -= inimigo.atk;
}else{
    console.log(`${inimigo.nome} errou o ataque`);
}

if(vida <= 0){
    console.log("\nVOCÊ MORREU! FIM DE JOGO");
    process.exit();
}

}

if(xp >= xpProx){

    level++;
    xp = 0;
    xpProx += 30;

    vidaMax += 10;
    manaMax += 5;
    atk += 3;

    vida = vidaMax;
    mana = manaMax;

    console.log(`\nLEVEL UP! Agora você é nível ${level}`);

    evoluirClasse();

}

}