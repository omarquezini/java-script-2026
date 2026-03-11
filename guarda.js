const readline = require("readline-sync");

let semaforo = "amarelo";


let veiculoEmergencia = false

if (veiculoEmergencia == true){
    console.log("ALERTA: Ambulância detectada! Todosos sinais fechados. CRUZAMENTO LIVRE.")
}

if (semaforo == "verde" ){
    console.log("Sinal verde, fique na paz agora.")
}
else if (semaforo == "amarelo" ){
    console.log("Sinal amarelo, atenção! Prepare-se para parar e rebolar.")
}
else if (semaforo == "vermelho"){
    console.log("Sinal vermelho, pare agora imediatamente! Procure ajuda.")
}
