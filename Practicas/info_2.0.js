/*Declaro un Array para los dias de la semana y una
variable para la cantidad de dias que quiero digitar*/
let diasSemana = [];
var cantDias = Number(prompt("Escriba la cantidad de días que usted desee digitar"));
//Verifico que la cantidad de dias no sea Negativa o Cero//
while(cantDias<=0){
    if(cantDias<=0){
        alert("Error, los días no pueden ser negativos o cero");
        //Hasta que no digites una cantidad que sea mayor a 0 no saldrá del ciclo//
        cantDias = Number(prompt("Escriba la cantidad de días que usted desee digitar"));
    }
}
//El for es para digitar los días de la semana//
for(var i = 0 ; i < cantDias ; i++){
    diasSemana[i] = prompt("Digite el día de la semana");
}

//Declaro un Array para almacenar los miembros de la familia//
var miembroFamilia = [];
//El for es para ir pidiendo los familiares//
for(i = 0 ; i <= 2 ; i++){
    miembroFamilia[i] = prompt("Digita el nombre de tu familiar");
    //En dado caso que dejes el campo vacío te dará un error//
    while(miembroFamilia[i] == ''){
        if(miembroFamilia[i] == ''){
            alert("Error, campo vacío porfavor digite de nuevo");
            //No saldrá del ciclo hasta que el campo de texto tenga algo escrito//
            miembroFamilia[i] = prompt("Digita el nombre de tu familiar");
        }
    }
}

//Declaro un objeto para los datos personales//
let datosPersonales = {
    comidaFavorita: [],
    paisesVisitar: []
};
//Voy añadiendo datos al objeto datosPersonales//
datosPersonales.nombre = prompt("Escribe tu nombre completo");
datosPersonales.fechaNacimiento = prompt("Escribe tu fecha de nacimiento");
datosPersonales.lugarNacimiento = prompt("Escribe tu lugar de nacimiento");
datosPersonales.edad = Number(prompt("Escribe tu edad actual"));
for(var i = 0 ; i <= 2 ; i++){
    datosPersonales.comidaFavorita[i] = prompt("Escribe una comida favorita");
}
for(i = 0 ; i <= 4 ; i++){
    datosPersonales.paisesVisitar[i] = prompt("Escribe un país que te gustaría visitar");
}
datosPersonales.poseeLicencia = confirm("Tienes licencia?");
datosPersonales.estaEstudiando = confirm("Estas estudiando en la universidad?");

//Declaro un objeto para almacenar los datos del artista//
let artista = {
    canciones: []
};
//Voy añadiendo datos al objeto artista//
artista.nombre = prompt("Digita el nombre de tu artista favorito");
artista.edad = Number(prompt("Digita la edad que crees que tiene tu artista favorito"));
let cantCanciones = prompt(`Cuantas canciones favoritas de ${artista.nombre} tienes?`);
for(var i = 0 ; i < cantCanciones ; i++){
    artista.canciones[i] = prompt(`Escribe el nombre una cancion de ${artista.nombre}`);
}
artista.confesion = prompt("Si pudieras decirle algo a ese artista que le dirías?");

/*Imprimo mi nombre completo, fecha de nacimiento,
el pais que me gustaria visitar y 4 datos sobre mi artista favorito*/
console.log(`Nombre completo: ${datosPersonales.nombre}`);
console.log(`Fecha de nacimiento: ${datosPersonales.fechaNacimiento}`);
console.log(`Primer país que te gustaría visitar: ${datosPersonales.paisesVisitar[0]}`);
console.log(`Datos de mi artista favorito:
1- Su nombre es: ${artista.nombre}
2- Tiene ${artista.edad} años de edad
3- Mis canciones favoritas son ${artista.canciones}
4- Algo que siempre he querido decirle: ${artista.confesion}`);