


let saldo = 200;
let pin = 1234;
let importeRetirar = 100;
let pinIntroducido = 1234;

if (pinIntroducido === pin) {
    console.log("pin ok")

    if (importeRetirar <= saldo) {
        console.log("saldo insuficiente")
    } else {
        console.log("mete dinero")
    }
} else {
    console.log("esta tarjeta no es tuya, bandido")
}

function cajero(pin1, cantidad) {

    if (pin1 === pin) {
        console.log("pin ok")

        if (cantidad <= saldo) {
            console.log("saldo insuficiente")
        } else {
            console.log("mete dinero")
        }
    } else {
        console.log("esta tarjeta no es tuya, bandido")
    }

}

cajero(1234, 100)


// let rol = "editor";

// if (rol === "administrador") {
//     console.log("eres admin");

// } else if (rol === "editor") {
//     console.log("eres editor"), {

//     }  else if ("rol gestor")
//     console.log("eres un gestor"){

//     }


// }

let estacionActual = "otoño";

if (estacionActual === "otoño") {
    console.log("la siguiente estacion es invierno")
} else if (estacionActual === "primavera") {
    console.log("estamos en invierno, la siguiente estacion es primavera")
} else if (estacionActual === "primavera") {
    console.log("estamos en primavera,la siguiente estacion es verano")
} else if (estacionActual === "verano") {
    console.log("estamos en verano, la siguiente estacion es otoño")
} else {
    console.log("lo que has introducido no es una estacion")
}


let notaExamen = 4;

if (notaExamen === 9 || notaExamen === 10) {
    console.log("nota sobresaliente")
} else if (notaExamen === 7 || notaExamen === 8) {
    console.log("nota es notable")
} else if (notaExamen === 5 || notaExamen === 6) {
    console.log("nota es suficiente")

} else if (notaExamen < 5) {
    console.log("reprobado")
} else {
    console.log("no has presentado nada, vago")
}


let metodoPago = "efectivo";

switch (metodoPago) {
    case "tarjeta": console.log("el cliente ha pagado con tarjeta");
        break;
    case "bizum": console.log("el cliente ha pagado con bizum");
        break;
    case "efectivo": console.log("el cliente ha pagado en efectivo");
        break;
    default: console.log("el cliente no ha pagado");

}

// let metodoPago = prompt("escribe tu metodo de pago") ; //con el prompt te salta una ventana en el navegador para
//                                                        // que el usuario de dicha info y escribes el "metodo " 
//                                                        //y te saltara dicho caso o case
// switch (metodoPago) {
//     case "tarjeta": console.log("el cliente ha pagado con tarjeta");
//         break;
//     case "bizum": console.log("el cliente ha pagado con bizum");
//         break;
//     case "efectivo": console.log("el cliente ha pagado en efectivo");
//         break;
//     default: console.log("el cliente no ha pagado");

// }


//EJERCICIO
//CREAR UNA ESTRUCTURA DE CONTROL QUE ME COMPARE SI UN NUMERO UN NUMERO AL MULTIPLICARLO
// POR SI MISMO ES MENOR QUE 100. SI ES MENOR QUE 200 Y SI NO CUMPLE LAS ANTERIORES

// let numeroEj3=10 ;

// if (numeroEj3*numeroEj3<100){
//     console.log("numero multiplicado por si mismo es menor que 100");
// }else if(numeroEj3*numeroEj3<200){
//     console.log("numero multiplicado por si mismo es menor que 100");
// }else{
//     console.log("no cumple las anteriores")
// }

function multiplo(num) {

    if (num * num < 100) {
        console.log("numero multiplicado por si mismo es menor que 100");
    } else if (num * num < 200) {
        console.log("numero multiplicado por si mismo es menor que 100");
    } else {
        console.log("no cumple las anteriores")
    }
}
multiplo(10)


//EJERCICIO4
//CREAR UNA ESTRUCTURA DE CONTROL CON SWITCH QUE ME COMPARE SI  UN NUMERO +10 ES 
//COGER LA INFO DESDE EL PROMPT

// = 9
// = 12
// = 15
// = 100

let numeroMas10 = parseInt(prompt("escribe tu numero aqui"));

switch (numeroMas10 + 10) {
    case 9: console.log("es 9");
        break;
    case 12: console.log("es 12");
        break;
    case 15: console.log("es 15");
        break;
    case 100: console.log("es 100");
        break;
    default: console.log("no existe");
        break;

}


//LOOPS (BUCLES)

//indice===i
for (let i = 0; i <= 3; i++) {

    console.log(i)
}
//i++   i=i+1
//i++   i=i+2


//MOSTRAR POR PANTALLA DEL NUMERO AL 200


for (let i = 100; i <= 200; i++) {

    console.log(i)
}

//MOSTRAR LOS NUMEROS DEL 2 AL 49 PERO SOLO LOS PARES 

for (let i = 100; i <= 200; i += 2) {
    console.log(i)

}


//MOSTRAR DEL NUMERO 100 AL CERO Y QUE VAYA DE 5 EN 5

for (let i = 100; i >= 0; i -= 5) {
    console.log(i)


}

//MOSTRAR DEL 1 AL 20 TODOS LOS NUMEROS PARES INCLUIDOS AMBOS 
//NOTA: I%2===0 ME DA LA CONDICION DE PAR



for (let i = 1; i <= 20; i += 2) {
    if (i % 2 === 0) {

    }
    console.log(i + 1)
}


let arrayNumero = [1, 22, 23, 4, 5, 6, 7, 8, 9];

for (let i = 0; i< arrayNumero.length; i++) {

    console.log(arrayNumero[i])
}



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


for  (let i = 0 ; i=carrito.length; i++){


}