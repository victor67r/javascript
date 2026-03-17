//EASY MODE
//Crea un objeto con 3 propiedades y muéstralas
let ticher = {
    nombre: "German",
    edad: 33,
    genero: "calvo"
};
//Agrega una nueva propiedad, luego elimínala, y modifica alguna de las otras 3.
ticher.pies = 2;

console.log(ticher);
delete ticher.edad;
console.log(ticher);

ticher.genero= "calvisimo";
console.log(ticher);

//Comprueba si alguna propiedad existe o no dentro de tu objeto.
console.log("nombre" in ticher);     
console.log("altura" in ticher);   


//NORMAL MODE
//Añade una función dentro de tu objeto y que use alguna propiedad de dicho objeto como variable de entrada.
function saludar () {
    return "Hola soy "+ticher.nombre + ", soy discapacitado, estoy "+ ticher.genero
    
};

let subnormal =saludar()
console.log(subnormal)

//Muestra a través de iteraciones tanto las claves de tu objeto como las propiedades de las mismas.
for (let clave in ticher) {
    console.log("Clave:", clave);
    console.log("Valor:", ticher[clave]);
}

//Crea dos objetos que tengan alguna anidación
let alumno1 = {
    nombre: "Luis",
    edad: 20,
    datos_interes: {   
        nacionalidad: "Peruano a tiempo completo",
        palomas_amaestradas: 10,
        ciudad: "Chachapoyas"
    }
};
let alumno2 = {
    nombre: "Marcelino",
    edad: 23,
    datos_interes: {   
        nacionalidad: "Judio",
        circuncidado: false,
        ciudad: "New York"
    }
};

//HARD MODE
//Crea un Array con 3 objetos.

let alumnos = [
    {
        nombre: "Luis",
        edad: 20,
        ciudad: "Chachapoyas"
    },
    {
        nombre: "Marcelino",
        edad: 23,
        ciudad: "New York"
    },
    {
        nombre: "Rafel",
        edad: 20,
        ciudad: "Chino"
    }
];

console.log(alumnos);

//Itera sobre dicho Array mostrando las propiedades de todos los objetos.
alumnos.forEach((alumno, index) => {
    console.log(`Alumno ${index + 1}:`);
    for (let propiedad in alumno) {
        console.log(propiedad + ": " + alumno[propiedad]);
    }
    console.log("--------");
});

//Ahora haz lo mismo pero usando document.write para crear una tabla con los datos, si no te ves preparado hazlo en una lista desordenada.
// Crear tabla
