let saldo = 100;

let saque = 120;

if (saque <= saldo) {
    saldo -= saque;
}
else {
    console.log("Saldo insuficiente");
}