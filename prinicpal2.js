document.getElementById("boton").addEventListener("click", cargaActividade);

function cargaActividade(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      var xmlDoc = this.responseXML;
    }
  }
  xhttp.open("GET", "fileXML.xml", true);
  xhttp.send();
}
