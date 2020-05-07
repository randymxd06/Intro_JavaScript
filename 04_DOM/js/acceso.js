let div = document.querySelector("div");
let p = document.querySelector("p");
/*
console.dir(div);
console.log(p);
*/

function cambiarColor(){
    div.style.color = "red";
}
function cambiarTexto(){
    p.innerHTML = "Oops! El texto cambió";
}

div.addEventListener("click", cambiarTexto);
div.addEventListener("mouseover", cambiarColor);
div.addEventListener("dblclick", function(){
    confirm("Estas seguro de irte?");
});