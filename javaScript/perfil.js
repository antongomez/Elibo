
var lista = document.getElementsByName("elemento_bio");
var campo;
var lapiz;
for (var i=0; i < 4; i++){
  //campo = lista[i].getElementsByTagName("input")[0];
  lapiz = lista[i].getElementsByTagName("button")[0];
  lapiz.addEventListener("click", bloq_desbloq);
  //campo.addEventListener("focusout", bloquear_campo);
}

function bloq_desbloq(){

  // Eliminamos la foto vieja
  var fig = this.firstElementChild;
  fig.removeChild(fig.firstElementChild);

  // Comprobamos el estado del campo de texto
  var deshabilitado = this.previousElementSibling.disabled;
  if(deshabilitado == true){
    // Habilitamos el campo
    this.previousElementSibling.disabled = false;
    // Creamos la nueva foto
    var nueva_foto = document.createElement("p");
    var texto_guardar = document.createTextNode("G");
    // Y la anhadimos
    nueva_foto.appendChild(texto_guardar);
    fig.appendChild(nueva_foto);
  }
  else{
    this.previousElementSibling.disabled = true;

    // Creamos la nueva foto
    nueva_foto = document.createElement("img");
    nueva_foto.setAttribute("src", "Imaxes/Logos/LogoEditarElibo.svg");
    nueva_foto.setAttribute("class", "fotoLapiz");
    // Y la anhadimos
    fig.appendChild(nueva_foto);

    //<img src="Imaxes\Logos\LogoEditarElibo.svg" class="fotoLapiz">
  }



}
