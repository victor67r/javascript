//BUCLES EASY MODE
//Crea un bucle que imprima numeros del 1-20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log("------------");

//Crea un bucle que sume los numeros del 1-100 y muestre el resultado
let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log("La suma es:", suma);
console.log("------------");
//Crea un bucle que imprima todos los números pares entre 1 y 50
    /**for (let i = 2; i <= 50; i+=2) {
    console.log(i);
    */
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("------------");
//Dado un array de nombres, usa un bucle para imprimir cada nombre en consola
let nombres = ["Luis", "Nerea", "Naye"];
for (let i=0; i<nombres.length; i++){
    console.log(`${nombres}`)
}
console.log("------------");

//Escribe un bucle que cuente el número de vocales en una cadena de texto
//Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros2 = [1,7,9,5,6,7];
let producto = 1;

for (let i = 0; i < numeros2.length; i++) {
  producto *= numeros2[i];
}
console.log("El producto total es:", producto);
console.log("------------");

//NORMAL MODE
//Escribe un bucle para hacer la tabla de multiplicar del 7
let multiplicar = 7;
for (let i = 1; i <= 10; i++) {
  let resultado = multiplicar*i;
console.log(`${multiplicar} x ${i} = ${resultado}`);
}
console.log("------------");
//Crea un bucle que genere los 10 primeros números de la secuencia de Fibonacci
let Fibonacci = [0,1];
for (let i=2; i<10; i++){
    Fibonacci[i]=Fibonacci[i-1]+Fibonacci[i-2];
}
console.log(Fibonacci);
console.log("------------");


//Haz un bucle para invertir una cadena de texto o un array lo que más coraje te de
let texto = "Hola";
let invertido = "";
for (let i=texto.length-1; i>=0; i--){
    invertido +=texto[i]
}
console.log("Texto normal: "+texto);
console.log("Texto invertido: "+ invertido);

console.log("------------");

//PATERN PRINT
//TRIANGULO DE ASTERISCOS
let asteriscos1 = 5;
for (let i=1; i<=asteriscos1; i++){
    let fila="";
    for (let j=1; j<=i; j++){
        fila += "*";
    }
    console.log(fila);
}
console.log("------------");
//TRIANGULO INVERTIDO DE ASTERISCOS
let asteriscos2 = 5;
for (let i=asteriscos2; i>=1; i--){
    let fila="";
    for (let j=1; j<=i; j++){
        fila += "*";
    }
    console.log(fila);
}
console.log("------------");
//CUADRADO DE ASTERISCOS 5X5
let asteriscos3 = 5;

for (let i = 0; i < asteriscos3; i++) {
  let fila = "";
  for (let j = 0; j < asteriscos3; j++) {
    fila += "*";
  }
  console.log(`${fila} \n`);
}
console.log("------------");

//NUMEROS EN ORDEN ASCENDENTE
let numeros3 = 5;

for (let i = 1; i <= numeros3; i++) {
  let fila = "";
  for (let j = 1; j <= i; j++) {
    fila += j; 
  }
  console.log(fila);
}
console.log("------------");

//NUMEROS EN ORDEN DESCENDIENTE
let numeros4 = 5;

for (let i = numeros4; i >= 1; i--) {
  let fila = "";
  
  for (let j = 1; j <= i; j++) {
    fila += j;
  }
  
  console.log(fila);
}