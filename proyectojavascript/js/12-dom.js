
// CREAR UNA SECCIÓN, CON UN H1, UNA IMAGEN DE FONDO, UN BOTÓN Y 
// UN DIV CON TRES ENLACES CON CLASE enlace Y EL DIV CON LA CLASE navPrincipal
// DARLE A LA SECCIÓN LA CLASE seccionPrincipal
// DARLE AL BOTÓN UN ID botonPrincipal

const heading = document.querySelector(".seccionPrincipal h1");//RETORNA 0 O 1 ELEMENTO
console.log(heading);

heading.textContent="Nuevo Titulo 1234";

// heading.classList.add("")

const enlacesJS=document.querySelectorAll("div a");
console.log(enlacesJS);

enlacesJS[1].href="https://google.com"


enlacesJS[1].textContent="enlace2 modificado";
enlacesJS[1].href="https://google.com"

const botonJS=document.getElementById("boton");
console.log(botonJS)

const botonJSclass=document.getElementsByClassName("botonClase");


const nuevoEnlace=document.createElement("A");

nuevoEnlace.href="#";
nuevoEnlace.textContent="nuevoEnlace4";
nuevoEnlace.classList.add("enlaces");
console.log(nuevoEnlace);

const enlacesJS2=document.querySelector(".navPrincipal");
enlacesJS2.appendChild(nuevoEnlace);




const ejercicioEnlace=document.createElement("A");

ejercicioEnlace.href="#";
ejercicioEnlace.textContent="ejercicioEnlace";
ejercicioEnlace.classList.add("enlaces");
console.log(ejercicioEnlace);

const enlacesJS3=document.querySelector(".navPrincipal");
enlacesJS3.appendChild(ejercicioEnlace);
