/*function engadirActividade() {

}*/
// Facer esta funcion en perfil igual que en principal e despois
// aqui comporbar que todos os campos estan ben e redireccionar a perfil
// e ali meter a actividade a pelo. Polo tanto isto xa non e json
// polo que podo mirar de meter algo de algun evento distinto ou
// jQuery ou javascript 6


/*function crearActividad(){

  $(".elemento_formulario input").each(function(){
    console.log($(this));
  });

}*/
function comprobarCampos(){
  var distancia = $("#campo_distancia")
  $("#mensaje_error").removeClass("texto_oculto");
  $(document).scrollTop("0");

}

$(document).ready(function(){
  $("#mensaje_error").addClass("texto_oculto");
  $("#btn-crear").on('click', comprobarCampos);


});
