

let numero1 = 20;
let numero3 = 40;

console.log(numero1);
// console.log(numero2);
// console.log(numero3);

try {
    console.log(numero2)
} catch (error) {
    console.log("tienes un error  en el console.log numero2")
}
console.log(numero3)


// let autenticado = false;

// let usuarioAutenticado = new Promise(function (resolve, reject) {


//     if (autenticado === true) {
//         resolve("usuario autenticado");

//     } else {
//         reject("no se puede iniciar sesion");
//     }
// }
// )
// console.log(usuarioAutenticado);

// usuarioAutenticado.then(function (resultado) {
//     console.log(resultado)
// })
//     .catch(function (resultado) {
//         console.log(resultado)
//     })


// let boton = document.querySelector("#boton");


// boton.addEventListener("click", function () {
//     console.log("diste click");

//     Notification.requestPermission()
//         .then(resultado => console.log(`el resultado es ${resultado}`));
// })

// if (Notification.permission === "granted") {
//     new Notification("esta es una notificacion", {
//         icon: "../proyectojavascript/js/Logo-Adecco.png",
//         body: "Notificación Tu Carrera Digital",

//     }
//     )
// }


// setTimeout(function () {
//     console.log("set time out esta finalizado")
// }, 3000)

// setInterval(function () {
//     console.log("set intervalo actuando")
// }, 4000)

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("descargando cliente....espere....")

        setTimeout(() => {
            resolve("los clientes fueron descargados...")
        }, 3000)
    }

    )
}


async function app() {
    let resultadoAsync = await descargarNuevosClientes();
    console.log(resultadoAsync);
    console.log("este codigo si se bloquea");

}
app();
console.log("ESTE CODIGO NO SE BLOQUEA")


//EJERCICIO
//CREA UNA FUNCION DESCARGAR PEDIDIOS, y ME DE UNA RESPUESTA A LOS 3 SEGUNDOS 

function descargarPedidos() {
    return new Promise((resolve) => {
        console.log("descargando pedidos....")

        setTimeout(() => {
            resolve("los clientes fueron descargados :)")
        }, 3000)
    })
}

descargarPedidos();

// async function app() {
//     let asyncPedidos = await descargarPedidos();
//     console.log(asyncPedidos);
//     console.log("espera de pedido");

// }
// app();
// console.log("cerveza recibida")
