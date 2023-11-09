


// let producto = {
//     nombre: "Tablet",
//     precio: 500

// }


// function ProductoClase(nombre, precio, disponibilidad = false, categoria = "play") {
//     this.nombreObjeto = nombre;
//     this.precioObjeto = precio;
//     this.categoria = categoria;
//     this.disponibilidad = disponibilidad;

// }

// const producto2 = new ProductoClase("Monitor curvo", 800, true, "tech");
// const producto3 = new ProductoClase("PC", 1800);
// const producto4 = new ProductoClase("Reloj", 800);
// console.log(producto2);
// console.log(producto3);
// console.log(producto4);


// function Fecha(año, mes, dia) {
//     this.año = año;
//     this.mes = mes;
//     this.dia = dia;
// }

// let fecha1 = new Fecha(2023, "octubre", 25);
// let fecha2 = new Fecha(2023, "octubre", 26);
// let fecha3 = new Fecha(2023, "octubre", 27);
// let fecha4 = new Fecha(2023, "octubre", 28);

// console.log(fecha1);
// console.log(fecha2);
// console.log(fecha3);
// console.log(fecha4);

// ProductoClase.prototype.formatearProducto = function () {
//     console.log(`el producto ${this.nombreObjeto}  tiene un precio de ${this.precioObjeto}$`)
// };


// let producto5 = new ProductoClase("telefono", 1200)
// let producto6 = new ProductoClase("tostadora", 700)
// let = new ProductoClase("horno", 800)


// class ProductoClase2 {
//     constructor(nombre, precio) {
//         this.nombreObjeto2 = nombre;
//         this.precioObjeto2 = precio;
//     }
//     formatearProducto2() {
//         return (`el producto ${this.nombreObjeto2} tiene un precio de ${this, precioObjeto2}$`);
//     } 
//     descuento(){
//         return (`el precio final descuento es de ${this.precioObjeto2*(1-0.2)}`)
//     }

// }

// let producto8= new ProductoClase2("tv nueva", 678);
// console.log("producto8 con class");
// console.log(producto8);
// console.log(producto8.formatearProducto2())

class CalcularDescuento {
    constructor(precio, descuento) {
        this.precio = precio;
        this.descuento = descuento;
    }
    descuento() {
        return (`el precio final descuento es de ${this.precioObjeto2 * (1 - 0.2)}`)

    }
}
class Libro {
    constructor(nombre, precio, isbn) {

        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    }
}

const libroObjeto = new Libro("Curso Fullstack", 120, 912229);
console.log(libroObjeto);

// class Libro {
//     constructor(nombre, precio, isbn) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.isbn = isbn;
//     }

// }


// let libroObjeto = new Libro("hola", 10, 1234);
// console.log(libroObjetoibro);

class Biblioteca extends Libro {
    constructor(nombre, precio, isbn, categoria) {

        super(nombre, precio, isbn);
        this.categoria = categoria;

    }
    formatearProducto3() {
        console.log(`el producto ${this.nombre} pertenece a la categoria ${this.categoria}`)
    }
}


class Coche {
    constructor(marca, añoCompra, motor, matricula) {
        this.marca = marca;
        this.añoCompra = añoCompra;
        this.motor = motor;
        this.matricula = matricula;


    }
    calculaEdad() {
        return(`la edad de mi coche es ${2023-this.añoCompra}`)
        // console.log(`el coche ${this.marca} con año ${2016 } motor de ${200 } y matricula numero ${12345}`)
    }

}

let miCoche = new Coche("toyota", 2016, 200, 123456);
console.log(miCoche);

let cochePapa = new Coche("renault", 2009, 200, 678901);
console.log(cochePapa);


class Itv extends Coche {
    constructor( añoCompra, matricula, añoItv) {
        super(undefined, añoCompra, undefined, matricula)
        this.añoItv=añoItv
    }
    calculaEdad() {
        return(`la proxima Itv es dentro de ${this.añoItv-2023}`)
    }
}
 miCoche= new Itv("toyota", 2016, 200, 123456,2028);
console.log(miCoche.proximaItv)


