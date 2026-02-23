function calMC(peso, altura){

    let imc = peso / (altura ** 2);

    if (imc < 18.5){
        console.log("seu imc é, " + imc);
    }
    else if(imc >= 18.5 && imc <= 29.9){
       console.log("seu imc é, " + imc);
    }
    else{
       console.log("seu imc é, ** BOOOM! **");
    }


    if (imc < 18.5){
        console.log("clasificação = magrelo, raquitico, desgraçado ")
    }
    else if(imc >= 18.5 && imc <= 29.9){
        console.log("clasificação = gordo, obeso, miseravel.")
    }
    else{
        console.log("clasificação = quebrou a balança.")
    }
}
calMC(168, 2.00)
