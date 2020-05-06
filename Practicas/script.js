let h1_text = document.querySelector(".cambio");
let divText = document.getElementById("ocultar");
let btnOcultar = document.querySelector("#boton");

btnOcultar.addEventListener("dblclick", function(){
    //divText.style.display = "none";
    divText.classList.add("d-none");
    h1_text.style.color = "red";
    h1_text.innerHTML = "<i>Haz hecho doble click</i>";
});