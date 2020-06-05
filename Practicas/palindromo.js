//Palabras palíndromas

//Declaro tres variables
let palabra = [];
let auxiliar = 0;
let cont = 0;

//Le pido al usuario que digite una palabra
palabra = prompt("Digite una palabra");
let l = palabra.length;//Tomo el tamaño de la palabra digitada por el usuario

//Hago un ciclo for para recorrer la palabra desde su ultima letra hasta la primera
for(let i = l-1; i >= 0; i--){
    //Hago una condicion que si las letras coinciden entonces el contador se aumenta en 1
    if(palabra[i] == palabra[auxiliar]){
        cont++;
    }
    //Voy incrementando la variable auxiliar mientras la variable i va decreciendo
    auxiliar++;
}

/*Si la cantidad de letras de la palabra coincide con
la cantidad del contador quiere decir que son iguales
por lo tanto es palíndroma*/
if(palabra.length == cont){
    alert(palabra + " es una palabra palíndroma");
}
/*Caso contrario si no tienen la misma cantidad de letras no son iguales
por lo tanto no es palíndroma*/
else{
    alert(palabra + " no es una palabra palíndroma");
}