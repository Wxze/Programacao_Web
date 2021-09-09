<?php

//  Atividade 1  - Programação Web 2
//  Aluno: Gabriel Jose da Silva dos Santos
//  Código: 834846
//  Professor: Fabiano Gonçalves dos Santos

// questão 1 e 2;
class Usuario{

    private $nome;
    private $sobrenome; 

    public function setNome($nome){
        $this->nome = $nome;
    }

    public function getNome(){
        return $this->nome;
    }

    public function setSobrenome($sobrenome){
        $this->sobrenome = $sobrenome;
    }

    public function getSobrenome(){
        return $this->sobrenome;
    }

    // questão 3, 9, 14
    private $string;
    public function ola(){
        
        echo "\nOlá, ".$this->nome." ".$this->sobrenome." !\n\n";
        
        $this->string = "Ola, ".$this->nome;
        return $this;
    }

    // questão 12, 15
    public function registrar(){
        
        $this->string .= " >> registrado";
        return $this;
    }

    //questão 13
    public function email(){
        $this->string .= " >> email enviado";
        return $this->string;
    }
}

// questão 4
$usuario01 = new Usuario();

// questão 5
$usuario01->setNome("Gabriel");
$usuario01->setSobrenome("Jose");

// questão 6
echo "\nNome: ".$usuario01->getNome()."  Sobrenome: ".$usuario01->getSobrenome()."\n";

// questão 7
$usuario01->ola();

// questão 8
$usuario02 = new Usuario();
$usuario02->setNome("Johnny");
$usuario02->setSobrenome("Walker");
$usuario02->ola();

// questão 10
$usuarioRambo = new Usuario();
$usuarioRambo->setNome("Sylvester");
$usuarioRambo->setSobrenome("Stallone");

// questão 11
//echo $usuarioRambo->ola();
$usuarioRambo->ola();

// questão 16
$usuarioJair = new Usuario();
$usuarioJair->setNome("Jair");
echo $usuarioJair->ola()->registrar()->email();

?>
