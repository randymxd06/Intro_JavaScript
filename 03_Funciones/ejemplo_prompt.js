/*
let nom = prompt("Digita tu nombre");
let edad = prompt("Digita tu edad");
let estadoCivil = prompt("Digita tu estado civil");
*/
    
/*
console.log(nom);
console.log(edad);
console.log(estadoCivil);
*/

//Estudiante

/*
let estudiante = {
    nombre: prompt("Cómo te llamas?"),
    edad: prompt("Qué edad tienes?"),
    curso: prompt("Cuál es tu curso?")
};

console.log(estudiante);
*/

/*
let estudiante = {}

estudiante.nombre = prompt("Dime tu nombre");
estudiante.edad = prompt("Dime tu edad");
estudiante.curso = prompt("Dime tu curso");

console.log(estudiante.edad);

estudiante.edad = Number.parseInt(estudiante.edad);

console.log(estudiante.edad);
*/

let nombre = prompt("Como te llamas");
let edad = prompt("Que edad tienes");
let monto = Number.parseInt(prompt("Que cantidad tienes en peso?"));

console.log(typeof monto);
//monto = Number.parseInt(monto);

//convertir la edad en numero
edad = Number.parseInt(edad);

let tasaDollar = 54.3;
let conversionDollar = monto / tasaDollar;
console.log(`La conversion es ${conversionDollar.toFixed(2)}`);