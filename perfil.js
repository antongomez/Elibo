
var lista = document.getElementsByName("elemento_bio");

var campo;
var lapiz;
for (var i=1; i < 4; i++){
  campo = lista[i].getElementsByTagName("input")[0];
  lapiz = lista[i].getElementsByTagName("button")[0];
  lapiz.addEventListener("click", desbloquear_campo);
  campo.addEventListener("focusout", bloquear_campo);
}

function desbloquear_campo(){
  this.previousSibling.previousSibling.disabled = false;
}
function bloquear_campo(){
  this.disabled = true;
}
