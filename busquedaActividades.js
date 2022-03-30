function buscar(){
  $.post('baseDatosActividadesAnton.json', function(datos){
    var actividadesFiltradas = $(datos.Actividades).filter(function(idx) {
      if($("#txt_tipo").val() === "todo"){
        return datos.Actividades[idx].Titulo === $("#txt_buscador").val();
      } else {
        return datos.Actividades[idx].TipoActividade === $("#txt_tipo").val();
      }
    });

    $(actividadesFiltradas).each(function(){
        console.log(this);
    });

  });
}

$(document).ready(function(){
  $("#boton_buscar").on('click', buscar);
});
