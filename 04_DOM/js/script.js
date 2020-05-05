/*let titulo1 = document.querySelector("h1");

titulo1.id = "titulo_principal";
titulo1.classList.add("resaltado");
titulo1.classList.add("color-red");
titulo1.innerHTML = "Datos desde JS";
titulo1.innerHTML = "Hola <i>a todos!</i>";

console.log(titulo1);

let h1 = {
    id: "titulo_principal",
    classList: ["resaltado", "color-red"],
    innerHTML: "Hola <i>a todos!</i>"
}

console.dir(document);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.links);
console.log(document.title);

document.title = "Titulo cambiado desde JS";
document.URL = "https://www.google.com";
document.body.value = "";

document.addEventListener("Click", function(){
    alert("Hola haz hecho click en el documento");
});*/

let inputNumero1 = document.querySelector("#numero1");

let inputNumero2 = document.querySelector("#numero2");

let btnCalcular = document.querySelector("#calcular");

btnCalcular.addEventListener("click", function(){
    let valor1 = Number(inputNumero1.value);
    let valor2 = Number(inputNumero2.value);
    let suma = valor1+valor2;
    alert(`La suma de ${valor1} y ${valor2} es igual a ${suma}`);
    console.log(suma);
});
