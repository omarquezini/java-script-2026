let nota1 = 5;

let nota2 = 3;

let nota3 = 5;

let nota4 = 7;


const nomeAluno = "Wellberton";

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log ("O aluno: " + nomeAluno);
console.log ("Tem a media: " + media);

if (media >= 7){
    console.log("O aluno"+ nomeAluno + "está aprovado, agora caia fora seu misereval");
}
if (media >= 5 && media < 7){
    console.log("mediocre, vai pro inferno ( se liga ).");

}
if (media < 5){
    console.log("**suspiro**...como, COMO! você pode ser tão burro.");
}
