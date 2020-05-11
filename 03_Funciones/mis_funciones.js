/*function saludar(){
    document.write("Hola a todos!");
    console.log("Hola a todos!");
}
saludar();
saludar();
saludar();*/

function cambiarEstilo(){
    document.write("Soy un mensaje");
    document.body.style.backgroundColor = "red";
}

function imprimirMensajes(){
    alert("Hola, Bienvenido!");
    console.log("Soy una prueba más");
}

let clkdiv = document.querySelector("#div");

clkdiv.addEventListener("click", function(){
    cambiarEstilo();
});