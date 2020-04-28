//1. Crea un array con los días de la semana.
const diasSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];

/*2. Crea un array con los nombres de los miembros de tu familia
(Padre, Madre, Hermanos/as ) desde el mas viejo al mas joven;*/
const miembrosFamilia = ["Milagros","Rafael","Randy","Raymi"];

//3. Crea un objeto llamado datosPersonales y que contenga la siguiente información: 
let datosPersonales = {
    nombreCompleto: "Randy R. Martínez Cepeda",
    fechaNacimiento: "06/07/2000",
    lugarNacimiento: "Santiago",
    edad: 19,
    comidasFavoritas: ["Pizza","Pollo Frito","Tacos"],
    paisesPorVisitar: ["Suiza","Estados Unidos","Japon","España","Inglaterra"],
    poseesLicencia: false,
    estasEnUniversidad: true
};

//4. Crea un objeto con los datos personales de tu primer artista favorito.
let datosArtista = {
    nombre: "Benito Antonio Martínez Ocasio",
    apodo: "Bad Bunny",
    edad: 26,
    fechaNacimiento: "10/03/1994",
    lugarNacimiento : "Sanjuan, Puerto Rico", 
    temasConocidos: ["Soy Peor","Amorfoda","Callaíta"]
};


//5. Imprime la siguiente información por la consola:

    //- Tu Nombre Completo
    console.log("Mi nombre completo es: "+datosPersonales.nombreCompleto);

    //- Fecha de nacimiento
    console.log("Mi fecha de nacimiento es: "+datosPersonales.fechaNacimiento);

    //- El primer país que te gustaría visitar
    console.log("El primer pais que me gustaria visitar es: "+datosPersonales.paisesPorVisitar[2]);

    //- 4 datos de tu artista favorito
    console.log("Mi artista favorito en la actualidad se llama "+datosArtista.nombre+
    " su nombre artistico es "+datosArtista.apodo+
    " tiene "+datosArtista.edad+" años de edad"+
    " algunas de sus canciones más reconocidas son "
    +datosArtista.temasConocidos[0]+
    ", "+datosArtista.temasConocidos[1]+
    ", "+datosArtista.temasConocidos[2]);

    //- El día de la semana en que naciste
    console.log("yo nací un "+diasSemana[4]);