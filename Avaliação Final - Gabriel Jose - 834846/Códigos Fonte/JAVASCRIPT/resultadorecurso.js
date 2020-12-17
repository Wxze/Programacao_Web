    // Aluno: Gabriel Jose da Silva dos Santos
    // RA: 834846

function consulta(){
    var cpf = document.getElementById("cpf");
    cpfValor = cpf.value;
    
    if(cpf.value =="" || cpfValor.length != 11){
        window.alert("Preencha corretamente o campo CPF, deve conter 11 algarismos");
    }else{
        document.getElementById("resultado").innerHTML = ' <table class="table1" style="margin-left: auto; margin-right: auto;"><tr class="tr1"><th class="th1">N° do Recurso</th><th class="th1">Data de entrada</th><th class="th1">Data do julgamento</th><th class="th1">N° da multa</th><th class="th1">Parecer do juiz</th></tr><tr class="tr1"><td class="td1">37542</td><td class="td1">23/11/2020</td><td class="td1">02/12/2020</td><td class="td1">1376</td><td class="td1">Recurso aprovado, acusação retirada.</td></tr></table> '; 
    }
}