// !!!!!!!!!!!!!!!!!!!!!!!
// EJERCICIO

// CREAR UN ARCHIVO .JSON QUE ALMACENE LA INFO DE ZONAS TUCARRERADIGITAL

// CREAR UN FETCH QUE ME LEA LA INFORMACIÓN Y ME LA MUESTRE POR PANTALLA
// EN EL MISMO FORMATO QUE SE MUESTRA

// */

function obtenerZonas(){

    fetch("zonas.json") //fetch(url con la api)
        .then(resultado =>{
            return resultado.json() // VOY A TENER UNA RESPUESTA TIPO JSON
        })
        .then(datos =>{
            const{zonass} = datos; //DESTRUCTURING PARA CREAR VARIABLES A PARTIR DE LAS PROPIEDADES
            console.log(zonas);

            empleados.forEach(zonas => {
                console.log(zonas)
                console.log(zonas.id)
                console.log(zonas.ciudades)
                console.log(zonas.enlacesZonas)
                console.log(zonas.enlacesCursos)


            });
        })
}
obtenerZonas();




    
