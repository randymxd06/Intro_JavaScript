/*let usuarioGitHub = {
    nombre: "Randy Martinez",
    nombre_usuario: "randymxd06",
    url_imagen: "https://img.favpng.com/7/5/8/computer-icons-font-awesome-user-font-png-favpng-YMnbqNubA7zBmfa13MK8WdWs8.jpg"
};

console.log(usuarioGitHub);
let textJSON = JSON.stringify(usuarioGitHub);
console.log(textJSON);

let usuarioGitHubJSON = `{
    "nombre": "Randy Martinez",
    "nombre_usuario": "randymxd06",
    "url_imagen": "https://www.google.com"
}`;

let ObjetoJSON = JSON.parse(usuarioGitHubJSON);
console.log(ObjetoJSON.nombre);
console.log(ObjetoJSON.nombre_usuario);
console.log(ObjetoJSON.url_imagen);

let miUsuarioJSON = `{
    "login": "randymxd06",
  "id": 55677075,
  "node_id": "MDQ6VXNlcjU1Njc3MDc1",
  "avatar_url": "https://avatars1.githubusercontent.com/u/55677075?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/randymxd06",
  "html_url": "https://github.com/randymxd06",
  "followers_url": "https://api.github.com/users/randymxd06/followers",
  "following_url": "https://api.github.com/users/randymxd06/following{/other_user}",
  "gists_url": "https://api.github.com/users/randymxd06/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/randymxd06/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/randymxd06/subscriptions",
  "organizations_url": "https://api.github.com/users/randymxd06/orgs",
  "repos_url": "https://api.github.com/users/randymxd06/repos",
  "events_url": "https://api.github.com/users/randymxd06/events{/privacy}",
  "received_events_url": "https://api.github.com/users/randymxd06/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Randy R. Martínez",
  "company": null,
  "blog": "https://codepen.io/randymxd06",
  "location": "Santiago de los Caballeros, República Dominicana",
  "email": null,
  "hireable": null,
  "bio": "Estudiante de Ing. en Sistemas Computacionales de UTESA & Estudiante de Tecnico en Informatica de INFOTEP",
  "public_repos": 2,
  "public_gists": 0,
  "followers": 1,
  "following": 10,
  "created_at": "2019-09-23T02:45:18Z",
  "updated_at": "2020-04-28T16:10:41Z"
}`;*/

//Seleccionar los elementos
const imgPerfil = document.querySelector(".imagen_perfil");
const tituloNombre = document.querySelector("h3.nombre");
const parrafoNombreUsuario = document.querySelector("p.nombre_usuario");
const spanSeguidores = document.querySelector(".seguidores");
const spanSiguiendo = document.querySelector(".siguiendo");
const parraroBio = document.querySelector(".bio");
const btnBuscar = document.querySelector("#buscar");
const barraBusqueda = document.querySelector("#barra_busqueda");

btnBuscar.addEventListener("click", function(){
    obtenerDatosGitHub();
});

//Pasos para obtener los datos:
//1. Crear una funcion asincrona
async function obtenerDatosGitHub(){

    let valor = barraBusqueda.value;
    //2. Ejecutar una petición y esperar por la respuesta
    let respuesta = await fetch("https://api.github.com/users/"+valor);

    //3. Verificar si la respuesta está bien
    if(respuesta.ok){

        //4. Convertir la respuesta y procesarla
        let datos = await respuesta.json();
        
        //Actualizar la información en la página
        imgPerfil.src = datos.avatar_url;
        tituloNombre.textContent = datos.name;
        parrafoNombreUsuario.textContent = datos.login;
        spanSeguidores.textContent = datos.followers;
        spanSiguiendo.textContent = datos.following;
        parraroBio.textContent = datos.bio;
        
    }else{
        console.log("Ocurrió un error");
    }

}