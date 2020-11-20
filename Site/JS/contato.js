//Nome: Gabriel Jose da Silva dos Santos     Código: 834846

function valida(){
    var v_nome = document.getElementById("nome").value;
    var v_email = document.getElementById("email").value;
    var v_checkbox = document.getElementById("confirma").value;

    if(v_nome == '' || v_email == ''|| v_checkbox == 'Não'){
        alert("Preencha todos os campos");
    }else{
        document.getElementById("form").submit()
    }
}