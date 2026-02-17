//PR2-CONDICIONALES.

//EASY MODE 1.
let numero = Number(prompt("Dime un número"));

if (numero % 2===0){
    console.log("El resultado es par.")
    document.body.innerHTML += "<h1>El resultado es par</h1>"
}
else {
    console.log("El resultado es impar")
    document.body.innerHTML += "<h1>El resultado es impar</h1>"
}

//EASY MODE 2.
let edad = Number(prompt("Dime tu edad, payaso."));
if (edad>=18){
    console.log("Puedes entrar en la discoteca.")
    document.body.innerHTML += "<h1>Anda, tira padentro.</h1>"
}
else if (edad >= 16 && edad <= 17){
    console.log("Te queda poco, llama a tu mami.")
    document.body.innerHTML += "<h1>Te queda poco, llama a tu mami.</h1>"
}
else if (edad <16){
    console.log("Vete de aqui, enano.")
    document.body.innerHTML += "<h1>Vete de aqui, enano.</h1>"
}

 //EASY MODE 3.
 let semana = Number(prompt("Dime un número del 1 - 7"));
 switch (semana){
    case 1 :
        console.log("Lunes");
        document.body.innerHTML += "<h1>Lunes</h1>"
    break;
    case 2 :
        console.log("Martes");
        document.body.innerHTML += "<h1>Martes</h1>"
    break;
    case 3 :
        console.log("Miercoles");
        document.body.innerHTML += "<h1>Miercoles</h1>"
    break;
    case 4 :
        console.log("Jueves");
        document.body.innerHTML += "<h1>Jueves</h1>"
    break;
    case 5 :
        console.log("Viernes");
        document.body.innerHTML += "<h1>Viernes</h1>"
    break;
    case 6 :
        console.log("Sabado");
        document.body.innerHTML += "<h1>Sabado</h1>"
    break;
    case 1 :
        console.log("Domingo");
        document.body.innerHTML += "<h1>Domingo</h1>"
    break;
    default:
        console.log("No válido")
        document.body.innerHTML += "<h1>No válido</h1>"
 }   

 //EASY MODE 4.
 let numero1 = Number(prompt("Dime el primer número"));
 let numero2 = Number(prompt("Dime el segundo número"));

if (numero1>numero2){
    console.log(numero1 + "es mayor que "+ numero2)
    document.body.innerHTML += "<h1>"+numero1 +">"+numero2+"</h1>";
}
else if (numero1<numero2){
    console.log(numero1 + "es menor que "+ numero2)
    document.body.innerHTML += "<h1>"+numero1 +"<"+numero2+"</h1>";
}
else if(numero1=numero2){
    console.log(numero1 + "es igual que "+ numero2)
    document.body.innerHTML += "<h1>"+numero1 +"="+numero2+"</h1>";
}

//EASY MODE 5.
let edad1 = Number(prompt("Dime tu edad"));
let resultadoEdad = edad1>=18 ? "Adulto" : "Menor";
console.log(resultadoEdad);
document.body.innerHTML += "<h1>"+resultadoEdad+"</h1>";

//NORMAL MODE 1.
let numeroRandom = Math.floor(Math.random()*6)+1;
let adivinarNumero = Number(prompt("Adivina el número del dado (1-6)"));

if (numeroRandom===adivinarNumero){
    alert("HAS ACERTADO");
}
else {
    alert("FALLASTE, EL NUMERO ES "+numeroRandom);
}

//NORMAL MODE 2.
let pregunta = prompt("Haz tu pregunta RANDOM:");
let numero5 = Math.floor(Math.random() * 8);
let respuesta;

switch (numero5) {
  case 0:
    respuesta = "Sí, pero no se lo digas a nadie.";
    break;
  case 1:
    respuesta = "No cuentes con ello, crack.";
    break;
  case 2:
    respuesta = "Tal vez... después de comer.";
    break;
  case 3:
    respuesta = "Claramente sí. Clarísimamente.";
    break;
  case 4:
    respuesta = "Ni en tus mejores sueños.";
    break;
  case 5:
    respuesta = "Pregunta otra vez, que ahora mismo estoy jugando al LOL.";
    break;
  case 6:
    respuesta = "Las probabilidades dicen que sí… mi corazón dice que no.";
    break;
  case 7:
    respuesta = "Error 404: respuesta no encontrada.";
    break;
}

alert("Pregunta: " + pregunta + "\n\nRespuesta: " + respuesta);

//EASY MODE 3.
let sueldo = Number(prompt("Introduce tu sueldo mensual (€):"));
let impuesto = 0;

if (sueldo < 1000) {
  impuesto = 0;
} else if (sueldo >= 1000 && sueldo <= 2000) {
  impuesto = sueldo * 0.10;
} else if (sueldo > 2000) {
  impuesto = sueldo * 0.20;
}
let sueldoFinal = sueldo - impuesto;

alert(
  "Sueldo: " + sueldo + "€\n" +
  "Impuestos: " + impuesto + "€\n" +
  "Sueldo final: " + sueldoFinal + "€"
);

//HARD MODE 
let peso = Number(prompt("Introduce tu peso en kg:"));
let altura = Number(prompt("Introduce tu altura en metros (ej: 1.75):"));

let imc = peso / (altura * altura);
let mensaje;

if (imc < 0 || imc > 50 || peso <= 0 || altura <= 0) {
  mensaje = "Es imposible";
} else if (imc < 18.5) {
  mensaje = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
  mensaje = "Peso normal";
} else if (imc >= 25 && imc <= 29.9) {
  mensaje = "Sobrepeso";
} else {
  mensaje = "Obesidad";
}

alert(
  "IMC: " + imc.toFixed(2) + "\n" +
  "Resultado: " + mensaje
);

