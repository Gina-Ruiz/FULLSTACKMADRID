//DECLARACION DE LA FUNCION

function sumar(n1, n2) {

    console.log(n1 + n2);
};

sumar(10, 20);



//EXPRESION DE LA FUNCION

let sumar2 = function (n3, n4) {

    console.log(n3 + n4);
};

sumar2(3, 9);



//METODO IIFE

(function () {

    console.log("ESTO ES UNA FUNCION")
}
)();

//ESTAS FUNCIONES TIENEN LAS CARACTERISTICAS DE QUE NO HACE FALTA LLAMARLAS,
//SE LLAMAN ELLAS MISMAS, NO LAS UTILIZAREMOS MUCHO
//EL FIN ES PROTEGER QUE NO SE MEZCLEN LAS VARIABLES Y FUNCIONES CON LAS DE OTRO ARCHIVO.

let numero1=20;
let numero2="20";

console.log(typeof(parseInt(numero2))); //parseInt()es una funcion 
console.log(typeof(numero1.toString())); //toString()es un metodo string


// CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO
// COLOR
 
// Y MUESTRE POR PANTALLA
 
// EL COLOR ELEGIDO ES:...

function color(miColorElegido){
console.log(`El color elegido es ${miColorElegido}`); 
console.log("El color elegido es",miColorElegido ); 

}

color("rojo");



function precioFinal(importe, descuento, ){


console.log("mi descuento es de",importe* descuento/100);
console.log("mi precio final es de",importe - (importe* descuento/100));

}
 
precioFinal (100, 50)






//EJERCICIO

//CREAR UNA FUNCION QUE CUENTE LOS CARACTERES DE UN TWEET ARGUMENTO DE ENTRADA, EL TEXTO DEL TWEET


function tweet(texto){
    console.log(texto.length);
    console.log(`la longitud del tweet es ${texto.length}`);


}

tweet("este es mi texto");


//EJRCICIO

//CREAR UNA FUNCION QUE DADO UN TEXTO Y UNA PALABRA, ME DIGA SI LA PALABRA ESTA CONTENIDA EN EL TEXTO

function buscar(texto1){

console.log(texto1.includes("no"));


};
buscar("hola que tal")




// function buscar(texto, palabra){

// console.log(texto1.includes("no"));

// };

// buscar("hola que tal", " que")
// buscar("hola que tal", "no se")

//EJERCICIO

//CREAR UNA FUNCION QUE AÑADA UN ELEMENTO AL FINAL A UN ARRAY PREVIAMENTE DEFINIDO
//MOSTRAR POR CONSOLA
//RECIBE COMO ARGUMENTO DE ENTRADA EL ELEMENTO
//LA FUNCION SE LLAMA AÑADIR


let frutas =["pera", "platano"];

function añadirfruta(k){
frutas.push(k);


}

añadirfruta("fresa");
console.log(frutas);

//EJERCICIO

//CREAR UNA FUNCION QUE ME RESTE DOS VALORES DADOS


function restar(numA=0, numB=0){

console.log(numA-numB);

};

restar(10,8); 


