    // Aluno: Gabriel Jose da Silva dos Santos
    // RA: 834846

function verifica(){
    var placa = document.getElementById("placa");
    var data = document.getElementById("data");
    var hora = document.getElementById("hora");
    var matricula = document.getElementById("matricula");
    var infracao = document.getElementById("infracao");

    if( placa.value == "" || data.value == "" || hora.value == "" || matricula.value == "" || infracao.value == ""){

        window.alert("Preencha todos os campos");

    }else if(placa.value.length != 7 || matricula.value.length != 6 || infracao.value.length!= 5){

        window.alert("Preencha os campos corretamante - placa (7 caracteres), matricula (6 algarismos) e infracao (5 algarismos)");

    } else{

        window.alert("Multa aplicada!");
        document.getElementById("formulario").submit();

    }   
}