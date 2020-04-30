let usuario = {};

usuario.nombre = prompt("Como te llamas?");
usuario.email = prompt("Dime tu correo");
usuario.tieneTikTok = confirm("Tienes TikTok? "+
"(Aceptar = si / Cancelar = no)");

console.log(usuario);

let cerrarVentana = confirm("Cerrar Ventana");
if (cerrarVentana){
    window.close();
}