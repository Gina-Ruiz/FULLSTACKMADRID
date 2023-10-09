//FORMAS DE HACER UN STRING

const producto1 = "juego1";
const producto2 = String("juego2");
const producto3 = new String("juego3");

console.log("PRODUCTO:", producto1);
console.log("PRODUCTO2:", producto2);
console.log("PRODUCTO3:", producto3);



console.log("PRODUCTO:", typeof producto1,producto1);
console.log("PRODUCTO2:", typeof producto2);
console.log("PRODUCTO3:", typeof producto3);




let numero100;
let numero200;

numero100=100;
numero200="200";

console.log("NUMERO100", typeof numero100);
console.log("NUMERO200", typeof numero200);


//METODOS PARA STRING

//METODO LENGTH LEE EL NUMEOR DE CARACTERES ( LONGITUD DE LA VARIABLE )

console.log("METODO LENGTH:",producto1.length);

//INDEXOFF BUSCA SI UNA PALABRA EXISTE EN UNA CADENA DE TEXTO Y ME DA LA POSICION SI LO ENCUENTRA
//SI NO LO ENCUENTRA DA -1


console.log ("METODO INDEXOF:",producto1.indexOf("DUERME"));


//INCLUDES RETORNA TRUE OR FALSE

console.log("METODO INCLUDES:",producto1.includes("DUERME"));

//EJERCICIO

let ejstring1;
let ejstring2;
let ejstring3;


ejstring1="uno"
ejstring2="dos"
ejstring3="tres"

console.log("METODO LENGTH",ejstring1.length);
console.log("METODO INDEXOF",ejstring2.indexOf("dos"));
console.log("METODO INCLUDES",ejstring3.includes("cuatro"));