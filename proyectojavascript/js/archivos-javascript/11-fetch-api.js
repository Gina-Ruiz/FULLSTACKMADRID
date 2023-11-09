// CREAMOS UN NUEVO ARCHIVO empleados.json EN LA CARPETA GLOBAL



function obtenerEmpleados(){

    fetch("empleados.json") 
        .then(resultado =>{
            return resultado.json() 
        })
        .then(datos =>{
            const{empleados} = datos;
            console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado)
                console.log(empleado.id)
                console.log(empleado.nombre)
                console.log(empleado.puesto)


            });
        })
}
obtenerEmpleados();


//OTRA FORMA DE HACERLO CON ASYNC/AWAIT

async function obtenerEmpleados2() {

    const resultado = await fetch("empleados.json");

    const datos = await resultado.json();

    const{empleados} = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES
    console.log(empleados);
    empleados.forEach(empleado => {
        console.log(empleado)
        console.log(empleado.id)
        console.log(empleado.nombre)
        console.log(empleado.puesto)
    });

    // console.log(datos)

}

obtenerEmpleados2();

