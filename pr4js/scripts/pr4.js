//FUNCIONES+DOM

//NORMAL MODE 1
console.log("---Ejercicio 1---")
function contarCaracteres(texto) {
    return texto.length;
}

let resultado = contarCaracteres("Luis Peruano");
console.log(resultado); 
console.log("---Ejercicio 2---")

//NORMAL MODE 2
function multiplicacion(num1, num2){
    return num1*num2;
}
let resultado1= multiplicacion(6,9);
console.log(resultado1);
console.log("---Ejercicio 3---")
//NORMAL MODE 3
function contarVocales(texto) {
    const vocales = "aeiouAEIOU";
    let contador = 0;

    for (let letra of texto) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("Luis NO es peruano")); 
console.log("---Ejercicio 4---")

//NORMAL MODE 4
function encontrarMaximo(array) {
    let maximo = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo) {
            maximo = array[i];
        }
    }
    return maximo;
}

const numeros = [5, 12, 8, 44, 2, 30];
console.log(encontrarMaximo(numeros)); 
console.log("---Ejercicio 5---")

//NORMAL MODE 5
function sumarPares(array) {
    let suma = 0; 

    for (let numero of array) {
        if (numero % 2 === 0) {
            suma += numero; 
        }
    }
    return suma;
}

const misNumeros = [1, 2, 3, 4, 5, 6, 8]; 
console.log(sumarPares(misNumeros));
console.log("---Ejercicio 6---")

//NORMAL MODE 6
function contarLetra(frase, letra) {
    frase = frase.toLowerCase();
    letra = letra.toLowerCase();
    let contador = 0;

    for (let caracter of frase) {
        if (caracter === letra) {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetra("German, calvo", "g"));
console.log(contarLetra("Luis aleman ario", "a"));
console.log("---Ejercicio 7---")
//NORMAL MODE 7
function genContrasena(longitud) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let contrasena = "";

    for (let i = 0; i < longitud; i++) {
        let indiceAzar = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAzar);
    }
    return contrasena;
}

console.log(genContrasena(12));

//INTERACCION CON HTML 
//1
let textoEnlace = prompt("Introduce el texto: ");
let direccionWeb = prompt("Introduce una web: ");
let enlace = document.createElement("a")

enlace.textContent = textoEnlace;
enlace.href = direccionWeb;
enlace.target = "_blank";

document.body.appendChild(enlace);

//2
const urlImagen = prompt("Introduce la URL de la imagen:");
const urlDestino = prompt("Introduce la dirección web a la que debe dirigir (ej: https://google.com):");


const contenedor = document.createElement("p"); 
const enlace1 = document.createElement("a");    
const imagen = document.createElement("img"); 

imagen.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/330px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg";
imagen.style.maxWidth = "100%"; 

enlace1.href = urlDestino;
enlace1.target = "_blank"; 

contenedor.style.textAlign = "center";

enlace1.appendChild(imagen);    
contenedor.appendChild(enlace1);  
document.body.appendChild(contenedor);

//3
let datos = ["agua", "zumo", "pepsi", "cocacola", "sprite", "german"];
const desplegable = document.createElement("select");

for (let bebida of datos) {
    const opcion = document.createElement("option");

    opcion.textContent = bebida;
    opcion.value = bebida; 

    desplegable.appendChild(opcion);
}

document.body.appendChild(desplegable);