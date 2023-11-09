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

let numero1 = 20;
let numero2 = "20";

console.log(typeof (parseInt(numero2))); //parseInt()es una funcion 
console.log(typeof (numero1.toString())); //toString()es un metodo string


// CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO
// COLOR

// Y MUESTRE POR PANTALLA

// EL COLOR ELEGIDO ES:...

function color(miColorElegido) {
    console.log(`El color elegido es ${miColorElegido}`);
    console.log("El color elegido es", miColorElegido);

}

color("rojo");



function precioFinal(importe, descuento,) {


    console.log("mi descuento es de", importe * descuento / 100);
    console.log("mi precio final es de", importe - (importe * descuento / 100));

}

precioFinal(100, 50)






//EJERCICIO

//CREAR UNA FUNCION QUE CUENTE LOS CARACTERES DE UN TWEET ARGUMENTO DE ENTRADA, EL TEXTO DEL TWEET


function tweet(texto) {
    console.log(texto.length);
    console.log(`la longitud del tweet es ${texto.length}`);


}

tweet("este es mi texto");


//EJRCICIO

//CREAR UNA FUNCION QUE DADO UN TEXTO Y UNA PALABRA, ME DIGA SI LA PALABRA ESTA CONTENIDA EN EL TEXTO

function buscar(texto1) {

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


let frutas = ["pera", "platano"];

function añadirfruta(k) {
    frutas.push(k);


}

añadirfruta("fresa");
console.log(frutas);

//EJERCICIO

//CREAR UNA FUNCION QUE ME RESTE DOS VALORES DADOS


function restar(numA = 0, numB = 0) {

    console.log(numA - numB);

};

restar(10, 8);



function multiplicar(x, y) {
    let resultado = (x * y)
    return resultado;

}

multiplicar(5, 2);

//FUNCION CARRITO/SUMA:v

let totalCarrito = 0

function agregarCarrito(x) {

    totalCarrito += x;

}

agregarCarrito(50);
agregarCarrito(20);
agregarCarrito(10);

console.log(totalCarrito);


//EJERCICIO
//REALIZAR UNA FUNCION QUE CALCULE EL DESCUENTO QUE SE INDIQUE DE LOS PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME 

// let descuento = 0.2;
// let totalAhorro = 0;

// function calcularDescuento(z) {

//     totalAhorro +=( z * descuento)

// }

// calcularDescuento(100);

// calcularDescuento(120);

// calcularDescuento(350);

// console.log(totalAhorro);



let descuento = 0.2;
let totalAhorro = 0;

function calcularDescuento(z = 0) {

    return totalAhorro += (z * descuento)

}

calcularDescuento(100);

calcularDescuento(120);

calcularDescuento(350);

console.log("EL DESCUENTO ES DE:", totalAhorro);


let reproductor = {

    reproducir: function (numCancion) {

        console.log(`reproduciendo cancion con ID: ${numCancion}`)
    },
    pausar: function () {

        console.log("PAUSANDO CANCION...")
    },

    playlist: function (nombre) {

        console.log(`creando playlist: ${nombre}`)
    }
}

reproductor.reproducir(3940);
reproductor.pausar();
reproductor.playlist("metal");

//AÑADIR UNA FUNCION NUEVA EN REPRODUCTOR

reproductor.borrarCancion = function (id) {

    console.log(`borrando cancion con ID: ${id} `)

}

reproductor.borrarCancion(34);




function nombreCompleto(nombre, apellido1, apellido2) {

    console.log("Nombre Completo:", nombre + " " + apellido1 + " " + apellido2),
        console.log(nombre, apellido1, apellido2)
    console.log(`${nombre} ${apellido1} ${apellido2}`)
}

nombreCompleto("Gina", "Ruiz", "Vargas");



//FUNCIONES FLECHA / ARROW FUNCTION
//SIMPLIFICACION DE LA EXPRESION DE UNA FUNCION :)


let triplicar = function (x) {
    return 3 * x;

}
console.log(triplicar(6));




let triplicarFlecha = (numero = 1) => numero * numero * numero;



let valorTriplicado = triplicarFlecha(12);
console.log(valorTriplicado)


//EJERCICIO

//CREAMOS NUEVO ARROW FUNCTION, aprendiendo, QUE DEVUELVA UN NUMERO +7 Y LO ALMACENE EN UNA VARIABLE resultado


// let aprendiendo = numero => numero + 7;

// let resultado = aprendiendo(7);
// console.log(resultado)


//EJERCICIO

//CONVERTIR CADA UNA DE LAS SIGUIENTES FUNCIONES EN ARROW FUNCTION, COPIAR EL ARRAY DEL CARRITO DEL ARCHIVO 04-arrays.js



let carrito = [
    {
        nombre: "TV",
        precio: 750
    },
    {
        nombre: "Tablet",
        precio: 350
    },
    {
        nombre: "Movil",
        precio: 550
    },
    {
        nombre: "PC",
        precio: 1750
    }
];

console.table(carrito);






// SOME IDEAL PARA ARREGLO DE OBJETOS. ME BUSCA ESE VALOR DENTRO DEL ARRAY
let resultado;

resultado = carrito.some(function (producto) {
    return producto.nombre === "Tablet"
});

console.log("RESULTADO DE FUNCION SOME IDEAL", resultado);

// PONER CON ARROW FUNCTION

resultado = carrito.some(producto => producto.nombre === "Tablet");
console.log("RESULTADO DE FUNCION SOME IDEAL CON FUNCION DE FLECHA", resultado);






// COMO SABER EL TOTAL DEL CARRITO

resultado = carrito.reduce(function (total, producto) { // PARA ITERAR
    // TOTAL, PRODUCTO: PARAMETROS DE LA FUNCION
    return total + producto.precio
}, 0); //SUMA UN VALOR AL RESULTADO SIMPLEMENTE
console.log("USO DE REDUCE", resultado);

//PONER CON ARROW FUNCTION

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // EL VALOR DEL INDICE DONDE INICIA
console.log("USO DE REDUCE CON ARROW FUNCTION", resultado);



// FILTER, PARA FILTRAR

resultado = carrito.filter(function (producto) {
    return producto.precio > 400
});
console.log("USO DE FILTER", resultado);



// PONER CON ARROW FUNCTION

resultado = carrito.filter(producto => producto.precio > 400);
console.log("USO DE FILTER CON ARROW FUNCTION", resultado);


//EJERCICIO 1
//CREAR UNA FUNCION QUE SUME 3 NUMEROS DADOS. PONERLA CON EXPRESION, DECLARACION Y COMO FUNCION DE FLECHA

// sumaDeclaracion
// sumaExpresion
// sumaFlecha
//Y MUESTRE EL RESULTADO POR CONSOLA

function sumaDeclaracion(nu1, nu2, nu3) {

    console.log(nu1 + nu2 + nu3)


}

sumaDeclaracion(2, 2, 5)



let sumaDeclaracionFlecha = function (n1, n2, n3) {

    console.log(n1 + n2 + n3)
}



sumaDeclaracionFlecha(2, 2, 7)






let sumaExpresion = function (n4, n5, n6) {

    console.log(n4 + n5 + n6)

}

sumaExpresion(7, 2, 7)



let sumaExpresionF = (n4, n5, n6) => console.log(n4 + n5 + n6)





sumaExpresion(7, 2, 7)



//EJERCICIO 2
//CREAR UNA FUNCION QUE BUSQUE ELEMENTOS DE UN ARRAY NUMEROS. PONERLA CON EXPRESION, DECLARACION Y COMO  FUNCION FLECHA

// number[1,2,3,4];

//   let buscaDeclaracion =function (a,b) {
// return a.includes(b)

// };
// console.log(buscaDeclaracion(number,4));



// EJERCICIO3
// CREAR UNA FUNCIÓN DE FLECHA QUE DADOS 2 PARÁMETROS 
// ME DE 10 VECES LA SUMA DE AMBOS


let sumarParametros=(n1,n2) => (n1+n2)*10;

console.log(sumarParametros(10,20))








let ejercicio1 = (n1, n2) => console.log("resultado de la operacion", (n1 + n2) * 10);
ejercicio1(4, 7);








// CREAR UNA FUNCIÓN DE FLECHA QUE DADO DOS PARÁMETROS
// ME INDIQUE EL NÚMERO DE CARACTERES DE LOS DOS


let caracteres = (x,y) => (x.length)+(y.length);
console.log(caracteres("hola", "adios"))


function caracteresDeclaracion(x,y){
    return (x.length)+(y.length);
}
console.log(caracteresDeclaracion("hola","adios"))







let ejercicio2 = (p1, p2) => console.log("resultado ejercicio2", (p1 + p2).length);

ejercicio2("nomre", "apellido");


//CREAR UNA FUNCION DE FLECHA QUE DADOS 2 PARAMETROS ME DE 10 VECES LA SUMA DE AMBOS 



let flecha = (a, b) => (a + b) * 10;

console.log(flecha(1, 2))


// let aprendiendo = numero => numero + 7;

// let resultado = aprendiendo(7);
// console.log(resultado)




let flecha2 = (texto1, texto2) => (texto1.length) + (texto2.length);
console.log(flecha2("hola", "adios"))


function flecha3(texto1, texto2) {
    return texto1.length + texto2.length;
}

console.log(flecha3("hola como estas", "hasta luego"));


//EJERCICIO
//CREAR UNA FUNCION DE FLECHA QUE QUITE EL ULTIMO ELEMENTO DEL FINAL DE UN ARRAY NUEVO QUE CREEMOS CADA VEZ QUE LO CREAMOS


let flecha4 = (quitar) => quitar.pop();
let elemento=[1,2,3,4,5];
console.log(flecha4(elemento))

console.log(elemento)