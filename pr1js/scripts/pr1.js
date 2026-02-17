//ejercicio 1.

let alto = Number(prompt("Añada el alto (del objeto)"));
let ancho = Number(prompt("Añada el ancho (del objeto)"));
let superficie = ancho * alto;

console.log(superficie);
document.body.innerHTML = "<h1> El resultado es: " + superficie + "</h1>";

//ejercicio 2.

let peso = prompt("Añada el peso (en kg)");
let altura = prompt("Añada la altura (en cm)");
let imc = peso / (((altura/100)**2));

alert("Su índice de masa muscular es: " + imc);

//ejercicio 3
let totalSegundos = parseInt(prompt("Introduce el número de segundos:"));

let horas = Math.floor(totalSegundos / 3600);
let minutos = Math.floor((totalSegundos % 3600) / 60);
let segundos = totalSegundos % 60;

alert(`Han pasado ${horas} horas, ${minutos} minutos, ${segundos} segundos`);

//ejercicio 4
let nombre = prompt("Introduce tu nombre:");
let apellido = prompt("Introduce tu apellido:");

let saludo = `¡Hola, ${nombre} ${apellido}! Bienvenido a esta mierda`;

document.body.innerHTML = `<h1>${saludo}</h1>`;
let numeroLetras = saludo.replace(/\s+/g, '').length;
console.log(`Número de letras en la frase de bienvenida (sin espacios): ${numeroLetras}`);
document.body.innerHTML += `<p>La frase de bienvenida tiene ${numeroLetras} letras.</p>`;

let correo = nombre.charAt(0).toLowerCase() + '.' + apellido.toLowerCase() + '@atlantidaformacionprofesional.es';
alert(`Tu correo electrónico es: ${correo}`);
document.body.innerHTML += `Tu correo electrónico es: ${correo}`;



