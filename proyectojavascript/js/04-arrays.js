
let variableA = "valor varA";
let variableB = "valor varB";
let variableC = "valor varC";

let ejercicio6 = {};

ejercicio6.variableA = variableA;
ejercicio6.variableB = variableB;
ejercicio6.variableC = variableC;

console.log(ejercicio6);

let numeros = [10, 20, 30, 40, 50];

console.log("MI PRIMER ARRAY", numeros);
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo");
console.table(meses);

const diaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes",];
console.table(diaSemana);

console.log("ACCEDIENDO A LOS VALORES DEL ARRAY CON EL INDICE 2", numeros[2]);

console.log("ACCEDIENDO A LOS VALORES DEL ARRAY CON EL INDICE lunes", diaSemana[0]);
console.log("ACCEDIENDO A LOS VALORES DEL ARRAY CON EL INDICE jueves", diaSemana[3]);

let finde = {
    prop1: "string",
    prop2: 3,
    prop3: true
}
finde.finSemana = ["S", "D"];
console.log(finde);

finde.finSemana = ["Sabado", "Domingo"];
const { texto, numero, boolean, finSemana } = finde;
console.log("resultado finde", texto, numero, boolean, finSemana);


// EJERCICIO

let estaciones = ["verano"];


estaciones.unshift("primavera");
estaciones.push("otoño", "invierno");

console.log(estaciones);


let carrito = [
    objeto1={
        nombre: "nombre1",
        precio: 1
    },
    objeto2={
        nombre: "nombre2",
        precio: 2
    },
    objeto3={
        nombre: "nombre3",
        precio: 3
    },
    objeto4={
        nombre: "nombre4",
        precio: 4
    }
]
console.table(carrito);



//METODO INCLUDE

let resultado;

resultado= meses.includes("mayo");
console.log("USO DE INCLUDES PARA BUSCAR EN ARRAY PLANO",resultado);


