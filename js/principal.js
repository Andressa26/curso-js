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
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
}
if(altura<=0 || altura>=3.0){
    alturaEhValida = false;
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
}
if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
}
else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}




console.log(paciente);
console.log(peso);
console.log(tdPeso);
console.log(tdAltura);
console.log(altura);
console.log(imc);