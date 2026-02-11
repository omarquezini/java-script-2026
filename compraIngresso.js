let sadoConta = 500;

let precoIngreed = 9000;

console.log("tentando comprar um rim, quer dizer ingresso.")

if (sadoConta >= precoIngreed){
    let troco = sadoConta - precoIngreed;
    console.log("compra realizada, boa refeiç... show, aproveite o show.")
    console.log("Seu troco senhor R$:" + troco)
}

else {
    console.log("saldo insuficiente seu miseravel, pobre e impotente. faltam R$: " + (precoIngreed - sadoConta) + " seu merdinha calvo!")
}