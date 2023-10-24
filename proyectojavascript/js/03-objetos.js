

console.log("MI PRIMER OBJETO producto: ",producto);
console.log(`MI PRIMER OBJETO CON TEMPLATE STRING ${producto}`,producto);

/*

ESTRUCTURA DE UN OBJETO

let/var/const NombreDelObjeto = {
    propiedad o llave del objeto : valor,
    mas propiedades : valor,
    .
    .
    .
}


SINTAXIS DE PUNTO
PARA ACCEDER A LAS PROPIEDADES DEL OBJETO

*/

console.log("USO DE SINTAXIS DE PUNTO producto.precio:", producto.precio);

console.log(`USO DE SINTAXIS DE PUNTO CON TEMPLATE STRING: ${producto.precio}`);
// console.log("USO DE SINTAXIS DE PUNTO, producto.precio: ",producto.precio);

//OTRA FORMA DE ACCEDER A LAS PROPIEDADES DE UN OBJETO, SE USA MENOS

console.log("USO DE CORCHETES",producto["precio"]);

/* 
MODIFICAR OBJETOS

UNA CARACTERISTICAS QUE TIENEN LOS OBJETOS ES QUE PODEMOS A
AGREGAR, QUITAR Y MODIFICAR INFORMACIÓN DE ELLOS

VAMOS AÑADIR UNA PROPIEDAD NUEVA AL OBJETO producto
QUE YA TENEMOS CREADO
*/

producto.categoria = "joyería";

console.log("AÑADIR CATEGORIA a producto: ",producto);

producto.precio = 12;

// PARA ELIMINAR PROPIEDADES USAMOS delete
// VAMOS A BORRAR LA PROPIEDAD DISPONIBLE

delete producto.disponible;

console.log("BORRAMOS DISPONIBLE a producto: ",producto);

// MODIFICAR. LLAMAMOS A LA PROPIEDAD Y ASIGNAMOS NUEVO VALOR

producto.precio=500;

console.log("MODIFICAMOS PRECIO a producto: ",producto);











let precioProducto = producto.precio;

console.log("CREAMOS VARIABLE A PARTIR DE LA PROPIEDAD PRECIO de producto: ",precioProducto);

// ESTAMOS ACCEDIENDO A LA PROPIEDAD PRECIO DEL PRODUCTO Y ALMACENANDO EL VALOR
// EN UNA VARIABLE NUEVA precioProducto

/*
!!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
ALMACENAR EN UNA VARIABLE nombreProducto EL VALOR DE LA
PROPIEDAD nombreProducto DEL OBJETO producto

PUEDES LLAMAR IGUAL LA VARIABLE Y LA PROPIEDAD, NO PASA NADA
PUES SON DOS COSAS TOTALMENTE DISTINTAS
*/

// let nombreProducto = producto.nombreProducto;

/*


DESTRUCTURING DE OBJETOS
SACAR DE UNA ESTRUCTURA

CREAMOS LA VARIABLE Y EXTRAE EL VALOR
TODO EN UN SOLO PASO

CREA LA VARIABLE
EXTRAE EL VALOR
LA VARIABLE LA LLAMA IGUAL QUE LA PROPIEDAD
*/

// DESTRUCTURING AL PRECIO


let {precio,categoria} = producto;








//COMENTAR PREVIAMENTE NOMBREPRODUCTO
//const {disponible,nombreProducto} = producto;//USO DE LLAVES, EN EL INTERIOR DE LA PROPIEDAD
// console.log("CREAMOS VARIABLE precio CON DESTRUCTURING:",precio);
console.log(`CREAMOS VARIABLE precio ${precio} y categoria CON DESTRUCTURING:  ${categoria}`);





/*
!!!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO QUE SE LLAME playa
CON LAS SIGUIENTES PROPIEDADES:
- nombrePlaya
- ubicacion
- recomendable (boolean)
- temperaturaAgua (numero)
HACER DESTRUCTURING A LAS PROPIEDADES Y MOSTRAR LA INFO POR CONSOLA
CON TEMPLATE STRING

EN LA PLAYA xxxx QUE ESTÁ EN xxxxx EL AGUA ESTÁ A xxxxx. TE LA RECOMIENDO: xxxx

*/


const playa = {

nombrePlaya: "Isleta",
ubicacion: "Barcelona",
recomendable: true,
temperaturaAgua: 30
}

let {nombrePlaya,ubicacion,recomendable,temperaturaAgua} = playa;

console.log(`En la playa ${nombrePlaya} que esta en ${ubicacion} 
el agua esta a ${temperaturaAgua}.Te la recomiendo ${recomendable}`);

playa.tipoArena="arena limpia";

/*










// UNA VARIABLE CON CONST NO SE PUEDE MODIFICAR

// PERO LAS PROPIEDADES DE UN OBJETO CREADO CON CONST SI PODEMOS MODIFICARLAS


MÉTODOS PARA LOS OBJETOS

UN OBJETO A PESAR DE ESTAR CREADO CON CONST, SI QUE PODEMOS
AÑADIR Y ELIMINAR PROPIEDADES. ES UNA CARACTERISTICA DE LOS OBJETOS

SI QUEREMOS CONGELAR UN OBJETO PARA QUE NO SE PUEDAN MODIFICAR LAS 
PROPIEDADES, HACEMOS USO DE Object.freeze(producto);
*/

Object.freeze(producto);

// INTENTAMOS AÑADIR UNA PROPIEDAD NUEVA. CONGELADO

// producto.congelado = "intentamos congelarlo";

console.log("INTENTO AÑADIR UNA PROPIEDAD TRAS EL FREEZE", producto);

// Object.freeze(producto); // NO ME PERMITIRÁ MODIFICAR EL OBJETO

/*

!!!!!!!!!!!!!!
EJERCICIO
AÑADIR UNA PROPIEDAD NUEVA LLAMADA color
Y MOSTRAR EL OBJETO POR CONSOLA





NO APARECE NINGUN ERROR, PUES JAVASCRIPT SE ESTÁ EJECUTANDO
EN UN MODO "RELAJADO", PARA QUE SEA MÁS ESTRICTO, AÑADIMOS...
EN LA PARTE SUPERIOR DEL ARCHIVO
"use strict";

COMO SABEMOS SI UN OBJETO ESTÁ CONGELADO?
HACEMOS USO DE UN MÉTODO PARA OBJETOS

*/
console.log("ESTA CONGELADO??",Object.isFrozen(producto)); //TRUE SI ESTÁ CONGELADO
/*
FREEZE NO ME PERMITE NI AÑADIR, NI QUITAR NI MODIFICAR PROPIEDADES
producto.disponible = false; //NO ME MODIFICARÁ EL VALOR DE LA PROPIEDAD,
PUES ESTÁ CONGELADO CON FREEZE

CON EL METODO Object.freeze
NO PODEMOS AÑADIR PROPIEDADES
NO PODEMOS BORRAR PROPIEDADES
NO PODEMOS MODIFICAR PROPIEDADES

CON EL MÉTODO Object.Seal
NO PODEMOS AÑADIR PROPIEDADES
NO PODEMOS BORRAR PROPIEDADES
SI PODEMOS MODIFICAR PROPIEDADES

!!!!!!!!!!!!!!
EJERCICIO
CREAR UN OBJETO NUEVO QUE SE LLAME MEDIDAS
AÑADIR 4 PROPIEDADES  (peso, alto, ancho, profundidad)
APLICARLE EL MÉTODO SEAL
A CONTINUACIÓN MODIFICAR UNA DE ESAS PROPIEDADES

*/

let medidas = {
peso:14,
alto:16,
ancho:123.3,
profundidad:1/3
};

Object.seal(medidas);

medidas.profundidad = 1;


console.log("MOSTRAMOS COMO SE PUEDE MODIFICAR CON SEAL",medidas)

/*



COMO UNIR DOS OBJETOS CON EL SPREAD/REST OPERATOR

EL FIN ES NO MODIFICAR LOS OBJETOS ORIGINALES


*/
let nuevoProducto = {...producto,...medidas};
console.log ("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto);

/*
const nuevoProducto = {...producto, ...medidas}; //ME AÑADE 
// A UN NUEVO OBJETO LLAMADO nuevoProducto TODAS LAS PROPIEDADES DE
// LOS OBJETOS, productos y medidas
console.log ("NUEVO OBJETO CON SPREAD OPERATOR:",nuevoProducto)
;

CREAMOS EL 04-arrays.js Y COMENTAMOS EL 03-objetos.js
*/