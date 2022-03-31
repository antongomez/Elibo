
// Ao non xestionar un usuario, o usuario sera sempre Anton
var usuario = new Object();
usuario.nome = 'Antón Gómez López';
usuario.fotoPerfil = 'imaxes/deportistas/antongomezlopez/perfil/perfil_anton.jpg';

cargarActividades();

var lista = document.getElementsByName("elemento_bio");
var campo;
var lapiz;
for (var i=0; i < 4; i++){
  lapiz = lista[i].getElementsByTagName("button")[0];
  lapiz.addEventListener("click", bloq_desbloq);
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
    var nueva_foto = document.createElement("img");
    nueva_foto.setAttribute("src", "Imaxes/Logos/logo_gardar.svg");
    nueva_foto.setAttribute("class", "fotoGardar");
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

  }

}

function cargarActividades(){
  fetch('baseDatos/baseDatosActividadesAnton.json').then(function(response){
    response.json().then(mostrarActividades);
  });
}

function mostrarActividades(jsonObj){

  let acts = '';
  for(x in jsonObj.Actividades){
    tipoActividade = jsonObj.Actividades[x].TipoActividade;

    acts += '<article class="actividade">\n'
                        + '<header class="lista-flex div-center">\n'
                        + '<figure> <img class="fotoPerfil-actividade" src="';
    acts += usuario.fotoPerfil;
    acts += '"> </figure> <div> <h3>';
    acts += usuario.nome;
    acts += '</h3> <p>';
    acts += jsonObj.Actividades[x].Data
            + ', ás ' + jsonObj.Actividades[x].Hora
            + ' • ' + jsonObj.Actividades[x].Localizacion
    acts += '</p> </div> </header>';

    acts += '<div class="lista-flex div-center barra-actividade"> <figure> '
          + '<img class="logoActividade" src="';
    switch (tipoActividade) {
      case 'natacion':
        acts += 'imaxes/Logos/logo_natacion.svg';
        break;
      case 'ciclismo':
        acts += 'imaxes/Logos/logo_ciclismo.svg';
        break;
      default:
        acts += 'imaxes/Logos/logo_correr.svg';
    }
    acts += '"> </figure> <h1><a href="' + jsonObj.Actividades[x].Enlace + '">';
    acts += jsonObj.Actividades[x].Titulo;
    acts += '</a></h1> </div> <ul class="lista lista-flex barra-actividade"> <li>'
          + '<div> <p>Distancia</p> <h2>'
          + jsonObj.Actividades[x].Distancia
          + '</h2> </div> </li> <li> <div class="vlinha"></div> </li> <li> <div>'
          + '<p>';
    switch (tipoActividade) {
      case 'natacion':
        acts += 'Ritmo';
        break;
      case 'ciclismo':
        acts += 'Velocidade media';
        break;
      default:
        acts += 'Ritmo';
    }
    acts += '</p> <h2>'
          + jsonObj.Actividades[x].Velocidade
          + '</h2> </div> </li> <li> <div class="vlinha"></div> </li>'
          + '<li> <div > <p>Tempo</p> <h2>'
          + jsonObj.Actividades[x].Tempo
          + '</h2> </div> </li> </ul> <footer> <figure>'
          + '<img class="logoLike" src="imaxes/Logos/logo_like_elibo.svg">'
          + '</figure> <div> <p>'
          + jsonObj.Actividades[x].Elis
          + ' elis</p> </div> </footer> </article>';

  }
  document.getElementById("seccion_central").innerHTML = acts;
}
