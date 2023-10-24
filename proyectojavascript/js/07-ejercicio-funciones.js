

// let cadenaF="";
// function invertir(cadena){

// }








//FUNCION QUE GENERE UN NUMERO ALEATORIO  ENTRE N1 Y N2
//F:NUMERO ALEATORIO
//P:N1,N2

function numeroAleatorio(n1, n2) {
    return Math.floor(Math.random() * (n2 - n1) + n1);
}
let numaleatorio = numeroAleatorio(12, 103);
console.log(numaleatorio)


//FUNCION QUE CONCATENE DOS CADENAS 

//F:concatenar
//P: cadena1, cadena2



function concatenar(cadena1, cadena2) {
    return cadena1 + " " + cadena2;

}
let concatenacionCompleta = concatenar
console.log("hola", "que tal");

// función que encuentre el número más grande en un array.
// F: MAXNUM
// P: ARRAY
// let = max = 0
// let maxNum = [1, 2, 3, 4, 5]
// function maxNum() {

//     for (let i = 0; i < maxNum.length; i++) {
//         console.log(maxNum[i]);
//         if (maxNum[i] > max) {
//             max = maxNum[i];
//         }
//     }
// }
// console.log(max);




// función que cuente la cantidad de vocales en una cadena.
// F: VOCALES
// P: TEXTO

let contadorVocales = 0;
function vocales(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            contadorVocales++;
        }
        if (texto[i] === "e") {
            contadorVocales++;
        }
        if (texto[i] === "i") {
            contadorVocales++;
        }
        if (texto[i] === "o") {
            contadorVocales++;
        }
        if (texto[i] === "u") {
            contadorVocales++;
        }
    }
    console.log(contadorVocales);
}
vocales("Martaeiou")


// function palabras(texto){
//     let contador=0;
//     for (let i=0;)
// }

// function nombreMes(numMes)
// switch (numMes) {
//     case 1: console.log("enero")
//         break;
//     case 2: console.log("febrero")
//         break;
//     case 3: console.log("marzo")
//         break;
//     case 4: console.log("abril")
//         break;
//     case 5: console.log("mayo")
//         break;
//     case 6: console.log("junio")
//         break;
//     case 7: console.log("julio")
//         break;
//     case 8: console.log("agosto")
//         break;
//     case 9: console.log("septiembre")
//         break;
//     case 10: console.log("octubre ")
//         break;
//     case 11: console.log("noviembre")
//         break;
//     case 12: console.log("diciembre")
//         break;
//         default:
//             console.log("numero no valido")
// }




function contiene(cadena, letra) {
    return cadena.includes(letra);

}
let contieneLetra = contiene("ejemplo de cadena", "a");
console.log(contieneLetra);

// función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
// F: REEMPLAZAR
// P: TEXTO, LETRA1, LETRA2

