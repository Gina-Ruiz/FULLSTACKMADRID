//FORMAS DE HACER UN STRING

const producto1 = "juego1";
const producto2 = String("juego2");
const producto3 = new String("juego3");

console.log("PRODUCTO:", producto1);
console.log("PRODUCTO2:", producto2);
console.log("PRODUCTO3:", producto3);



console.log("PRODUCTO:", typeof producto1, producto1);
console.log("PRODUCTO2:", typeof producto2);
console.log("PRODUCTO3:", typeof producto3);




let numero100;
let numero200;

numero100 = 100;
numero200 = "200";

console.log("NUMERO100", typeof numero100);
console.log("NUMERO200", typeof numero200);


//METODOS PARA STRING

//METODO LENGTH LEE EL NUMEOR DE CARACTERES ( LONGITUD DE LA VARIABLE )

console.log("METODO LENGTH:", producto1.length);

//INDEXOFF BUSCA SI UNA PALABRA EXISTE EN UNA CADENA DE TEXTO Y ME DA LA POSICION SI LO ENCUENTRA
//SI NO LO ENCUENTRA DA -1


console.log("METODO INDEXOF:", producto1.indexOf("DUERME"));


//INCLUDES RETORNA TRUE OR FALSE

console.log("METODO INCLUDES:", producto1.includes("DUERME"));

//EJERCICIO

let ejstring1;
let ejstring2;
let ejstring3;


ejstring1 = "uno"
ejstring2 = "dos"
ejstring3 = "tres"

console.log("METODO LENGTH", ejstring1.length);
console.log("METODO INDEXOF", ejstring2.indexOf("dos"));
console.log("METODO INCLUDES", ejstring3.includes("cuatro"));



//TIPO DE DATOS NUMBER


let numero1 = 100;
let numero2 = 200.25;
let numero3 = "200";
let numero4 = 2 / 3;

console.log("DATO1", typeof numero1);
console.log("DATO2", typeof numero2);
console.log("DATO3", typeof numero3);
console.log("DATO4", typeof numero4);

console.log("DATO1", numero1, typeof numero1);
console.log("DATO2", numero2, typeof numero2);
console.log("DATO3", numero3, typeof numero3);
console.log("DATO4", numero4, typeof numero4);

//OPERACIONES MATEMATICAS

console.log("NUMERO 1 + NUMERO 2:", numero1 + numero2);
console.log("NUMERO 1 - NUMERO 2:", numero1 - numero2);

//SUMA +
//RESTA -
//MULTIPLICACION *
//DIVISION /
//MODULO %  ME DA EL VALOR DEL RESIDUO DE LA DIVISION
//7%6= 1
//7%3= 1
//8%6= 2


//EJERCICIO
//CREAR OPERACIONES CON CADA UNO DE LOS OPERADORES

console.log("NUMERO 1 + NUMERO 2:", numero1 + numero2);
console.log("NUMERO 1 - NUMERO 2:", numero1 - numero2);
console.log("NUMERO 1 * NUMERO 2:", numero1 * numero2);
console.log("NUMERO 1 / NUMERO 2:", numero1 / numero2);
console.log("NUMERO 1 % NUMERO 2:", numero1 % numero2);

//FUNCIONES DEL METODO MATH SE ABRE EN EL INSPECTOR-CONSOLE-WINDOWS- Y MATH


//Math.random();ME MUESTRA UN RESULTADO ALEATORIO ENTRE 0-1


// let resultado;

// resultado=Math.random();

// console.log("METODO CON MATH.RANDOM", resultado)


let resultado;

resultado = Math.round(Math.random() * 30);

console.log("NUMERO ALEATORIO ENTRE 0 Y 30", resultado);

//EJERCICIO CALCULO DEL AREA EN FUNCION DEL DIAMETRO  

let diametro;
let area;


diametro = 5;
area = Math.PI * Math.pow(diametro / 2, 2);


console.log("CALCULO DEL AREA EN FUNCION DEL DIAMETRO", area);

//EJERCICIO, CREAR UN DADO :)

let dado;

dado = Math.round(Math.random() * 5 + 1);

console.log("DADO", dado);



//ORDEN DE OPERACIONES :)

//ORDEN PRIORITARIO

//  PARENTESIS()
//  MULTIPLICACIONES Y DIVISIONES * /
//  SUMAS Y RESTAS + -

let resultadoOrden = 20 + 30 * 2;
console.log("MOSTRAR EL RESULTADO DE LAS OPERACIONES", resultadoOrden);

let resultadoOrden2 = (20 + 30) * 2;
console.log("MOSTRAR EL RESULTADO DE LAS OPERACIONES2", resultadoOrden2);

//EJERCICIO

let descuento = 40,
    importe,
    ahorro,
    total;

let prenda1 = 120,
    prenda2 = 85,
    prenda3 = 24;

//CALCULAMOS EL IMPORTE
importe = prenda1 + prenda2 + prenda3
console.log("MOSTRAR EN PANTALLA TOTAL SIN DESCUENTO", importe);

//CALCULAMOS DEL AHORRO

ahorro = importe * descuento / 100;


console.log("MOSTRAR EN PANTALLA EL DINERO AHORRADO (SOLO DESCUENTO)", ahorro);

//CALCULAMOS EL TOTAL CON DESCUENTO INCLUIDO

total = importe - ahorro;

console.log("MOSTRAR EN PANTALLA EL TOTAL A PAGAR CON DESCUENTO", total);

//INCREMENTO/DECREMENTO

let meGusta = 0;
meGusta += 15;    //incremente en 1 el valor de meGusta
meGusta -= 6;

//meGusta=meGusta+1;


console.log("NUMERO DE ME GUSTAS", meGusta);
// console.log("NUMERO DE ME GUSTAS2", meGusta++);



const nombre = "gin"
const email = "gruiz3847@gmail.com"

console.log(nombre + email);
console.log(nombre + " " + email);
console.log("Nombre: " + nombre + " email:" + email);

//SINTAXIS CON TEMPLATE STRING

console.log("NOMBRE Y EMAIL CONCATENADOS:" + nombre + " " + email);
console.log(`NOMBRE Y EMAIL CONCATENADOS: ${nombre} ${email}`);

