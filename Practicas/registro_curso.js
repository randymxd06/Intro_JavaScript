let curso = {};

curso.nombre = prompt("Cómo se llama el curso?");
curso.profesor = prompt("Cómo se llama el profesor?");
curso.participante = [];
curso.participantes.push(prompt("1er participante"));
curso.participantes.push(prompt("2do participante"));
curso.participantes.push(prompt("3er participante"));
curso.estaIniciado = confirm("El curso está iniciado");

console.dir(curso);
console.log(curso);