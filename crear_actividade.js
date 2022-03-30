/*function engadirActividade() {

}*/
// Facer esta funcion en perfil igual que en principal e despois
// aqui comporbar que todos os campos estan ben e redireccionar a perfil
// e ali meter a actividade a pelo. Polo tanto isto xa non e json
// polo que podo mirar de meter algo de algun evento distinto ou
// jQuery ou javascript 6


function comprobarCampos(){
  var error = false;
  $(".campo_obligatorio").each(function(){
    var texto = $(this).val().trim();
    $(this).removeClass("borde_rojo");
    if (texto.length == 0){
      error = true;
      $(this).addClass("borde_rojo");
    }
  });
  if (error == true){
    $("#mensaje_error").removeClass("texto_oculto");
    $(document).scrollTop("0");
  }
  else{
    $("#mensaje_error").addClass("texto_oculto");
    //Programar la creacion de la actividad


  }


}

$(document).ready(function(){
  $("#mensaje_error").addClass("texto_oculto");
  $("#btn-crear").on('click', comprobarCampos);


});
