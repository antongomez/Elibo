function buscar(){
  $.post('baseDatosActividadesAnton.json', function(datos){
    var actividadesFiltradas = $(datos.Actividades).filter(function(idx) {
      if($("#txt_tipo").val() === "todo"){
        return datos.Actividades[idx].Titulo.includes($("#txt_buscador").val());
      } else {
        return datos.Actividades[idx].TipoActividade === $("#txt_tipo").val() && datos.Actividades[idx].Titulo.includes($("#txt_buscador").val());
      }
    });

    $(actividadesFiltradas).each(function(){
        
    });

  });
}

$(document).ready(function(){
  $("#boton_buscar").on('click', buscar);
});
