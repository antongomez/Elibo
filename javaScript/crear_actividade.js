
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
        crearActividade();
      }
  });

  prom.then(
    function() {
      $("#mensaje_error").addClass("texto_oculto");
      var actividade = new Object();
    //  actividade.distacia = $("#distancia").val();
      //console.log(actividade.distancia);
      //  console.log($("#distancia").val());
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
