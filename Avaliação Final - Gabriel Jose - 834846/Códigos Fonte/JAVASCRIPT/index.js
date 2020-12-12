// Aluno: Gabriel Jose da Silva dos Santos
// RA: 834846

function verifica(){
    var cpf=document.getElementById("cpf");
    var senha=document.getElementById("senha");
    cpfValor = cpf.value;

    if(cpf.value == "" || senha.value == "" || cpfValor.length != 11){
        window.alert("Preencha todos os campos. (Dica: CPF deve conter 11 algarismos)");
    }else{
        location.replace("../HTML/visualizarmultas.html");
    }
}