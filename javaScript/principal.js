function cargarActividades(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var xmlDoc = this.responseXML;
      var acts = '';
      var actividades = xmlDoc.getElementsByTagName("ACTIVIDADE");
      var tipoActividade;

      for(var i = 0; i < actividades.length; i++){
        tipoActividade = actividades[i].getElementsByTagName("TIPOACTIVIDADE")[0].textContent;

        acts += '<article class="actividade">\n'
                            + '<header class="lista-flex div-center">\n'
                            + '<figure> <img class="fotoPerfil-actividade" src="';
        acts += actividades[i].getElementsByTagName("FOTOPERFIL")[0].textContent;
        acts += '"> </figure> <div> <h3>';
        acts += actividades[i].getElementsByTagName("USUARIO")[0].textContent;
        acts += '</h3> <p>';
        acts += actividades[i].getElementsByTagName("DATA")[0].textContent
                + ', ás ' + actividades[i].getElementsByTagName("HORA")[0].textContent
                + ' • ' + actividades[i].getElementsByTagName("LOCALIZACION")[0].textContent
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
        acts += '"> </figure> <h1>';
        acts += actividades[i].getElementsByTagName("TITULO")[0].textContent;
        acts += '</h1> </div> <ul class="lista lista-flex barra-actividade"> <li>'
              + '<div> <p>Distancia</p> <h2>'
              + actividades[i].getElementsByTagName("DISTANCIA")[0].textContent
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
              + actividades[i].getElementsByTagName("VELOCIDADE")[0].textContent
              + '</h2> </div> </li> <li> <div class="vlinha"></div> </li>'
              + '<li> <div > <p>Tempo</p> <h2>'
              + actividades[i].getElementsByTagName("TEMPO")[0].textContent
              + '</h2> </div> </li> </ul> <footer> <figure>'
              + '<img class="logoLike" src="imaxes/Logos/logo_like_elibo.svg">'
              + '</figure> <div> <p>'
              + actividades[i].getElementsByTagName("ELIS")[0].textContent
              + ' elis</p> </div> </footer> </article>';

      }
      document.getElementById("seccion_central").innerHTML = acts;
    }
  }
  xhttp.open("GET", "baseDatos/baseDatosActividades.xml", true);
  xhttp.send();
}

cargarActividades();
