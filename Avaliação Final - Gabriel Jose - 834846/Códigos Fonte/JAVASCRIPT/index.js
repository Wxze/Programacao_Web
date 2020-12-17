    // Aluno: Gabriel Jose da Silva dos Santos
    // RA: 834846


    
// function cpf(){
//     var cpf, x, digito1, digito2, soma1=0, soma2=0, multipli1=10, multipli2=11, resto, condic1, condic2;

//     var cpf=document.getElementById("cpf");

//    for(x=0;x<=8;x++){
//         soma1 += parseInt(cpf.charAt(x)) * (multipli1);
//         multipli1--;
//    }

//    if((soma1 % 11) < 2){
//         digito1 = 0;
//    }else{
//         digito1 = 11 - (soma1 % 11);
//    }

//    for(x=0;x<=9;x++){
//         soma2 += parseInt(cpf.charAt(x)) * (multipli2);
//         multipli2--;
//    }

//    if((soma2 % 11) < 2){
//         digito2 = 0;
//    }else{
//         digito2 = 11 - (soma2 % 11);
//    }

//    condic1 = parseInt(cpf.charAt(9));
//    condic2 = parseInt(cpf.charAt(10));

//    if(digito1 == condic1 && digito2 == condic2){
//        return 1;
//    }else{
//        return 0;
//    }
// }

function verifica(){
    var cpf=document.getElementById("cpf");
    var senha=document.getElementById("senha");
    cpfValor = cpf.value;
    // var valido = cpf();

    if(cpf.value == "" || senha.value == "" || cpfValor.length != 11){
        window.alert("Preencha todos os campos. (Dica: CPF deve conter 11 algarismos)");
    }/*else if(valido == 0){
        window.alert("Informe um CPF válido");*/
    else{
        location.replace("../HTML/visualizarmultas.html");
    }
}

