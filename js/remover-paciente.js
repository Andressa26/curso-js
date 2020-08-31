var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    alvoEvento.parentNode.classList.add("fadeOut");

    setTimeout(function(){
         alvoEvento.parentNode.remove();
    }, 500);
  
    //event.target.parentNode.remove();
})
