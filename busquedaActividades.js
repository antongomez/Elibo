function buscar(){
  $.post('baseDatosActividadesAnton.json', function(datos){
    var actividadesFiltradas = $(datos.Actividades).filter(function(idx) {
      if($("#txt_tipo").val() === "todo"){
        return datos.Actividades[idx].Titulo.includes($("#txt_buscador").val());
      } else {
        return datos.Actividades[idx].TipoActividade === $("#txt_tipo").val() && datos.Actividades[idx].Titulo.includes($("#txt_buscador").val());
      }
    });

    var taboa = '';
    $(actividadesFiltradas).each(function(){
      taboa += '<tr> <td>' + this.TipoActividade + '</td> <td>' + this.Data + '</td>'
            + '<td><a href="' + this.Enlace + '">' + this.Titulo + '</a> </td>'
            + '<td>' + this.Tempo + '</td> <td>' + this.Distancia + '</td> <td></td>'
            + '<td><a href="">Editar</a></td> + <td><a href="">Eliminar</a></td> </tr>\n';

    });

    var encabezado = $("table tr").has("th");
    $("table tr").not(encabezado).remove();
    encabezado.after(taboa);
  });
}

$(document).ready(function(){
  $("#boton_buscar").on('click', buscar);
  $("#txt_tipo").val("todo");
  $("#txt_buscador").val("");
  buscar();
});


// <tr class="odd">
//   <td>Carreira</td>
//   <td>mar.,07/03/2022</td>
//   <td>
//     <a href="html_Actividades\antongomezlopez\actividade_anton_1.html">Carreira de mañá</a>
//   </td>
//   <td>36:00</td>
//   <td>9,00 km</td>
//   <td></td>
//   <td><a href="">Editar</a></td>
//   <td><a href="">Eliminar</a></td>
// </tr>
