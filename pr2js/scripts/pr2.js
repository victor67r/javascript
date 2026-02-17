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