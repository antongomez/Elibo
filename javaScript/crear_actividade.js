
function comprobarCampos(){
  var error = false;

  let prom = new Promise(function(crearActividade, mostrarErro){

    $(".campo_obligatorio").each(function(){
      var texto = $(this).val().trim();
      $(this).removeClass("borde_rojo");
      if (texto.length == 0){
        error = true;
        $(this).addClass("borde_rojo");
      }
    });

      if(error === true){
        mostrarErro();
      } else {
        var actividade = new Object();
        actividade.distacia = $("#distancia").val();
        actividade.duracion = $("#duracion").val();
        actividade.deporte = $("#deporte").val();
        actividade.material = $("#material").val();
        actividade.data = $("#data").val();
        actividade.hora = $("#hora").val();
        actividade.ubicacion = $("#ubicacion").val();
        crearActividade(actividade);
      }
  });

  prom.then(
    function(actividade) {
      $("#mensaje_error").addClass("texto_oculto");
      // Enviariamos a informacion ao servidor para que a engada a base de datos
      window.location.replace("perfil.html");

    },
    function(){
      $("#mensaje_error").removeClass("texto_oculto");
      $(document).scrollTop("0");
    }
  );

}

$(document).ready(function(){
  $("#mensaje_error").addClass("texto_oculto");
  $("#btn-crear").on('click', comprobarCampos);
});
