var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso =  paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc")


var pesoEhValido = true;
var alturaEhValida = true;

if(peso<=0 || peso>=1000){
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
}
if(altura<=0 || altura>=3.0){
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida";
}
if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
}




console.log(paciente);
console.log(peso);
console.log(tdPeso);
console.log(tdAltura);
console.log(altura);
console.log(imc);