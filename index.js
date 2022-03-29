document.getElementById("boton_acceder").addEventListener("click", acceder);

function acceder() {
  if ((document.getElementById("txtNomeUsuario").value === "") || (document.getElementById("txtContrasinal").value === "")) {
    console.log("Debe cubrir ambos campos");
  } else {
    window.location.replace("principal.html");
  }

}
