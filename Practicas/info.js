//1. Crea un array con los días de la semana que el usuario digite.
//=================================================================================================================\\
//Declaro el Array para los días de la semana//
let diasSemana = [];
//Declaro una variable para dejar de digitar días de la semana //
let confirmarSalida;

/*
Abro un do-while para preguntarle al usuario
si quiere dejar de digitar días de la semana
*/
do{
    //Le pido al usuario que digite un dia de la semana para asignarselo al Array//
    diasSemana.push(prompt("Digite un día de la semana"));

    //Se le pregunta al usuario si quiere seguir digitando semanas//
    alert("Desea seguir digitando más días de la semana?");

    //Declaro una variable para detectar si hay una respuesta que no corresponde//
    let error = false;

    while(error!=true){//Mientras que el error no sea verdadero haz lo siguiente//

        //confirmo que el usuario quiera salir//
        confirmarSalida = prompt("S = si ó N = no");

        //Me aseguro que solo pueda digitar una S o N//
        if(confirmarSalida=="s" || confirmarSalida=="S"){
            confirmarSalida = true;
            error = true;
        }
        else if(confirmarSalida=="n" || confirmarSalida=="N"){
            confirmarSalida = false;
            error = true;
        }
        else{//Caso contrario me sale una alerta//
            error = false;
            alert("Error, solo puede digitar S o N");
        }

    }

}while(confirmarSalida!=false);//El ciclo se reperirá hasta el usuario confirme que quiere salir//










//2. Crea un array con 3 nombres de los miembros de familia que el usuario digite.
//=================================================================================================================\\

//Declaro un array para guardar los miembros de mi familia//
let miembrosFamilia = [];

do{
    //Asigno los valores a las diferentes posiciones del array//
    miembrosFamilia[0] = prompt("Digita un nombre de uno de los miembros de tu familia");
    miembrosFamilia[1] = prompt("Digita otro nombre de uno de los miembros de tu familia");
    miembrosFamilia[2] = prompt("Digita un ultimo nombre de uno de los miembros de tu familia");

    //Le pregunto al usuario si desea digitar todo de nuevo//
    alert("Deseas digitar los miembros de tu familia de nuevo?");

    //Declaro una variable para detectar si hay una respuesta que no corresponde//
    let error = false;

    while(error!=true){//Mientras que el error no sea verdadero haz lo siguiente//

        //confirmo que el usuario quiera salir//
        confirmarSalida = prompt("S = si ó N = no");

        //Me aseguro que solo pueda digitar una S o N;
        if(confirmarSalida=="s" || confirmarSalida=="S"){
            confirmarSalida = true;
            error = true;
        }
        else if(confirmarSalida=="n" || confirmarSalida=="N"){
            confirmarSalida = false;
            error = true;
        }
        else{//Caso contrario me sale una alerta//
            error = false;
            alert("Error, solo puede digitar S o N");
        }

    }

}while(confirmarSalida!=false);//El ciclo se reperirá hasta el usuario confirme que quiere salir//










/*
3. Crea un objeto llamado datosPersonales y pídele al usuario que digite la siguiente información:
(Recuerda convertir a los tipos de datos String, Number, Boolean)
- Nombre completo
- Fecha de nacimiento
- Lugar de nacimiento
- Edad
- 3 Comidas favoritas
- 5 Países que le gustaría visitar
- Si posee licencia para conducir
- Si está en la universidad*/
//=================================================================================================================\\

//Declaro un objeto para guardar mis datos personales//
let datosPersonales = {
    nombre: "",
    fechaNacimiento: "",
    lugarNacimiento: "",
    edad: null,
    comidaFavorita: ["","",""],
    paisesVisitar: ["","","","",""],
    poseeLicencia: false,
    estaEstudiando: false
};

do{
    //Asigno los valores a las diferentes propiedades del objeto//
    datosPersonales.nombre = prompt("Digita tu nombre completo");

    datosPersonales.fechaNacimiento = prompt("Digita tu fecha de nacimiento");

    datosPersonales.lugarNacimiento = prompt("Digita tu lugar de nacimiento");

    datosPersonales.edad = Number(prompt("Digita tu edad"));

    datosPersonales.comidaFavorita[0] = prompt("Digita una comida favorita");
    datosPersonales.comidaFavorita[1] = prompt("Digita otra comida favorita");

    datosPersonales.comidaFavorita[2] = prompt("Digita una ultima comida favorita");
    datosPersonales.paisesVisitar[0] = prompt("Digita un país que quieras visitar");
    datosPersonales.paisesVisitar[1] = prompt("Digita un país que quieras visitar");
    datosPersonales.paisesVisitar[2] = prompt("Digita un país que quieras visitar");
    datosPersonales.paisesVisitar[3] = prompt("Digita un país que quieras visitar");
    datosPersonales.paisesVisitar[4] = prompt("Digita un país que quieras visitar");

    datosPersonales.poseeLicencia = confirm("Posees licencia?");

    datosPersonales.estaEstudiando = confirm("Estas estudiando?");

    //Le pregunto al usuario si desea digitar todo de nuevo//
    alert("Deseas modificar algo que hayas escrito?");

    //Declaro una variable para detectar si hay una respuesta que no corresponde//
    let error = false;

    while(error!=true){//Mientras que el error no sea verdadero haz lo siguiente//

        //confirmo que el usuario quiera salir//
        confirmarSalida = prompt("S = si ó N = no");

        //Me aseguro que solo pueda digitar una S o N;
        if(confirmarSalida=="s" || confirmarSalida=="S"){
            confirmarSalida = true;
            error = true;
        }
        else if(confirmarSalida=="n" || confirmarSalida=="N"){
            confirmarSalida = false;
            error = true;
        }
        else{//Caso contrario me sale una alerta//
            error = false;
            alert("Error, solo puede digitar S o N");
        }

    }

}while(confirmarSalida!=false);//El ciclo se reperirá hasta el usuario confirme que quiere salir//










/*
4. Crea un objeto con los datos personales del artista favorito del usuario.
Pide la información que encuentres relevante (por ejemplo: nombre, edad, canciones, etc).*/
//=================================================================================================================\\

let Artista = {};

do{
    //Asigno los valores a las diferentes propiedades del objeto//
    Artista.nombre = prompt("Digita el nombre de tu artista favorito");
    Artista.edad = Number(prompt("Digita la edad que crees que tiene tu artista favorito"));
    Artista.cancion = prompt("Digita tu cancion favorita de ese artista");
    Artista.confesion = prompt("Si pudieras decirle algo a ese artista que le dirías?");

    //Le pregunto al usuario si desea digitar todo de nuevo//
    alert("Deseas modificar algo de lo que haz escrito de nuevo?");

    //Declaro una variable para detectar si hay una respuesta que no corresponde//
    let error = false;

    while(error!=true){//Mientras que el error no sea verdadero haz lo siguiente//

        //confirmo que el usuario quiera salir//
        confirmarSalida = prompt("S = si ó N = no");

        //Me aseguro que solo pueda digitar una S o N;
        if(confirmarSalida=="s" || confirmarSalida=="S"){
            confirmarSalida = true;
            error = true;
        }
        else if(confirmarSalida=="n" || confirmarSalida=="N"){
            confirmarSalida = false;
            error = true;
        }
        else{//Caso contrario me sale una alerta//
            error = false;
            alert("Error, solo puede digitar S o N");
        }

    }

}while(confirmarSalida!=false);//El ciclo se reperirá hasta el usuario confirme que quiere salir//










/*
5. Imprime la siguiente información por la consola:
- Nombre Completo
- Fecha de nacimiento
- El primer país que le gustaría visitar
- 4 datos del artista favorito*/
//=================================================================================================================\\

console.log(datosPersonales.nombre);
console.log(datosPersonales.fechaNacimiento);
console.log(datosPersonales.paisesVisitar[0]);
console.log(`1- Su nombre es: ${Artista.nombre}
2- Tiene ${Artista.edad} años de edad
3- Mi canción favorita es ${Artista.cancion}
4-Me gustaria decirle a ${Artista.nombre} que ${Artista.confesion}`);


