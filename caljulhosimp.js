function calculaJurosimples(capital, taxa, tempo){
    let juros = capital * (taxa / 100) * tempo;
    let montante = capital + taxa;

    return montante;
}
let conta1 = calculaJurosimples(5000, 4, 6);

console.log("O teu montante é :" + conta1 );
