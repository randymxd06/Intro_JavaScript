/*
let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles"
];

console.table(diasSemana);

diasSemana[4] = "Jueves";
diasSemana[5] = "Viernes";
diasSemana[6] = "Sabado";

console.table(diasSemana);

let meses = ["Enero"];
meses[1] = "Febrero";
meses[2] = "Marzo";

//push
meses.push("Abril");
meses.push("Mayo");
meses.push("Junio");
meses.push("Julio");
meses.push("Diciembre");

console.table(meses);

meses[10] = "Octubre";
console.table(meses);

console.log(meses[8]);
console.log(meses[9]);
console.log(meses[100]);

meses[0] = "January";
meses[2] = "February";

console.table(meses);
*/

let nombre = prompt("Dime tu nombre");
let edad =Number.parseInt(prompt("Dime tu edad"));
let coloresFavoritos = [];

console.log(nombre);
console.log(edad);

//forma 1
/*
coloresFavoritos[0] = prompt("Dime tu primer color favorito");
coloresFavoritos[1] = prompt("Dime tu segundo color favorito");
coloresFavoritos[2] = prompt("Dime tu tercer color favorito");
console.log("Despues");
console.table(coloresFavoritos);
*/

//forma 2
/*
coloresFavoritos.push = prompt("Dime tu primer color favorito");
coloresFavoritos.push = prompt("Dime tu segundo color favorito");
coloresFavoritos.push = prompt("Dime tu tercer color favorito");
console.log("Despues");
console.table(coloresFavoritos);
*/

//forma 3
let color1 = prompt("Dime tu primer color favorito");
let color2 = prompt("Dime tu segundo color favorito");
let color3 = prompt("Dime tu tercer color favorito");

color1 = `El primer color es ${color1}`;

coloresFavoritos[0] = color1;
coloresFavoritos[1] = color2;
coloresFavoritos[6] = color3;
coloresFavoritos[7] = "Los de abajo...";

/*
coloresFavoritos.push(color1);
coloresFavoritos.push(color2);
coloresFavoritos.push(color3);
*/
coloresFavoritos[10] = 'Chocolate';
console.table(coloresFavoritos);


//console.log(`Tu primer color favorito es: ${coloresFavoritos[0]}`);