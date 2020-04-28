/*
let persona = {
    nombre: "Randy",
    apellido: "Martinez",
    edad: 19,
    tieneCarro: false,
    tieneTrabajo: false,
    ciudadOrigen: "Santiago",
    coloresFavoritos: ["Rojo", "Azul", "Blanco", "Gris"]
};

let cosas = ["Randy", 19, true, null];

let informacion = {
    nombre: "Randy",
    edad: 19,
    tieneCarro: false,
    billetera: null
};

console.table(informacion);

let btnMostrar = document.querySelector("#mostrar");

btnMostrar.addEventListener("click", function(){
    let inputNombre = document.querySelector("input.nombre");
    //document.write(inputNombre.value);
    console.log(inputNombre.value);
    document.title = inputNombre.value;
});

let perro = {
    nombre: "Scott",
    cantidadDePatas: 4,
    raza: "Pitbull",
    color: "blanco"
};

let empleado = {
    nombre: "Juan Perez",
    codigo: 1234567,
    sucursalAsignada: "Central",
    fechaIngreso: "13/2/2020",
    sueldoInicial: 30000,
    poseeCorreo: false,
    tieneSeguroPremium: true
};

let empleado2 = {
    nombre: "Maria Garcia",
    codigo: 1234123,
    sucursalAsignada: "Sur",
    fechaIngreso: "20/5/2021",
    sueldoInicial: 15000,
    poseeCorreo: true,
    tieneSeguroPremium: false
};
*/
let estudiante = {
    nombre: "randy",
    matricula: 2180300,
    fechaIngreso: "6/9/2010",
    curso: "Informatica"
};

/*
console.log(estudiante.nombre);
estudiante.nombre = "Silverio";
console.log(estudiante.nombre);
*/

console.log(estudiante.nombre);
const btnCambiarNombre = document.querySelector("#mostrar");
const textNombre = document.querySelector("input.nombre");

console.log(btnCambiarNombre);
console.log(textNombre);

btnCambiarNombre.addEventListener("click", function(){
estudiante.nombre = textNombre.value;
console.log(estudiante.nombre);
});

let empleado = {
    empleado.nombre = "Cristian",
    empleado.fechaIngreso = "7/7/2007",
    empleado.poseeCorreo = true;
    empleado.codigo = 9248720
};