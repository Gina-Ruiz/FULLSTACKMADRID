

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

//FOR

for (let i = 0; i <= carrito.length; i++) {
    console.log(carrito[i]);
}

//FOREACH

carrito.forEach(function (producto) {
    console.log(producto, producto.nombre, producto.precio);
})

//MAP

let arrayMap = carrito.map(producto => producto.nombre);
console.log(arrayMap);

//THIS

let reserva = {
    nombre: "gina",
    apellido: "ruiz",
    total: 100,
    pagado: true
}
console.log(reserva.nombre);

//popirdad informacion 

reserva.informacion = function () {
    return (`el cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`
    )
};
console.log(reserva.informacion())

let fecha = {
    año: 2023,
    mes: "octubre",
    dia: 24,
    faltante: function () {
        console.log(`faltan ${31 - this.dia}`)

    }
}
fecha.faltante();