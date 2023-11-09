//Crea una función llamada numeroMayor() que toma tres números como entrada y retornar
//el numero mayor de ellos, si son iguales devolver un String «son iguales» .

function numMayor(num1, num2, num3) {

    if (num1 > num2&&num3) {
        console.log("primer numero es mayor que los otros ")
    } else if (num2 > num3&&num2) {
        console.log("el segundo  umero es mayor que los demas ")

    }else if(num3>num1&&num2){
        console.log("tercer numero mayor que los demas ")
    }else if(num1===num2===num3){
        console.log("son iguales los numeros")
    }
}
numMayor(3,3,3);



//Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es
//vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.



// EJERCICIO
 
// CREAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTOS
// IMPORTE, DESCUENTO
 
// Y ME MUESTRE POR PANTALLA EL DESCUENTO TOTAL
// Y EL PRECIO FINAL
 
// LLAMAR VARIAS VECES A LA FUNCIÓN CON DISTINTOS VALORES
let importe=0
let descuento=20/100
function descuentoTotal(importe, descuento){
    descuentoTotal=importe-descuento

}
descuentoTotal(100)