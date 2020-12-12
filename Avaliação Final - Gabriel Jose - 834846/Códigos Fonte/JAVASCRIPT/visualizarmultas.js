function consulta(){
    var cpf = document.getElementById("cpf");
    cpfValor = cpf.value;

    if(cpf.value =="" || cpfValor.length != 11){
        window.alert("Preencha todos os campos. (Dica: CPF deve conter 11 algarismos)");
    }else{
        document.getElementById("multas").innerHTML = "<table class='table1' style='margin-left: auto; margin-right: auto;'> <tr class='tr1'><th class='th1'>Número da multa</th><th class='th1'>Placa</th><th class='th1'>Data</th><th class='th1'>Hora</th><th class='th1'>Policial</th><th class='th1'>Infração</th><th class='th1'>Situção</th><th class='th1'>Recurso</th></tr><tr class='tr1'><td class='td1'>1124</td><td class='td1'>ABC-1234</td><td class='td1'>11/12/2020</td><td class='td1'>11:11</td><td class='td1'>212334</td><td class='td1'>516-91</td><td class='td1'>Aguardando pagamento</td><td class='td1'><button class='bt2' onclick='recurso()'>Clique aqui</button></td></tr></table><br><br><br>" 
    }
}

function recurso(){
    var recurso = window.prompt("Informe os motivos");
}