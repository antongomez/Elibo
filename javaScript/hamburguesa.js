const menu = document.getElementById("boton_hamburguesa");

 function animacion(x){
   menu.classList.toggle("change-boton_hamburguesa");
   x.classList.toggle("change");
 }

const btn = document.querySelector(".btn_menu_desplegable");
const menu_desplegable = document.querySelector(".lista_enlaces");

btn.addEventListener("click", () => {
  menu_desplegable.classList.toggle("lista_enlaces_visible");
});
