const inputColor = document.querySelector("#color");
const parrafo = document.querySelector("#parrafoColor");
const div = document.querySelector("#changeColor");
const span = document.querySelector("#valor");

parrafo.addEventListener("click", function(){
    div.style.backgroundColor = inputColor.value; 
    span.innerHTML = inputColor.value;
});