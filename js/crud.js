import { Videojuego } from "./definiciones.js";
const formulario = document.querySelector("#formulario-agregar");
const contenedor = document.querySelector(".contenedor-elementos-juegos");
const AlertaVacio = document.querySelector(".AlertaVacio");
var numeroActual;
const obtener_datos_formulario = (event) => {
    const datos_formulario = new FormData(formulario);
    const datos = Object.fromEntries(datos_formulario.entries());
    if (datos.titulo != "") {
        if (datos.descripcion != "") {
            AlertaVacio.style.display = "none";
            Videojuegos.push(new Videojuego(Videojuegos.length + 1, datos.titulo, datos.descripcion));
            if (Videojuegos.length == undefined) {
                numeroActual = 0;
            }
            else {
                numeroActual = Videojuegos.length - 1;
            }
            crearElementoVista(Videojuegos[numeroActual].id, Videojuegos[numeroActual].titulo, Videojuegos[numeroActual].descripcion)
            numeroActual++;
        }
        else {
            AlertaVacio.style.display = "block";
        }
    } else {
        AlertaVacio.style.display = "block";
    }
    //const juego = new Videojuego();
    console.log(Videojuegos);
};

export const crearElementoVista = (id_videojuego, titulo_videojuego, descripcion_videojuego) => {
    const elemento = document.createElement("div");
    elemento.classList.add("elemento-lista-juegos");
    const titulo = document.createElement("h1");
    titulo.textContent = titulo_videojuego;
    const id = document.createElement("h2");
    id.textContent = id_videojuego + "#";
    id.classList.add("id_numero");
    titulo.classList.add("Titulo");
    const descripcion = document.createElement("p");
    descripcion.textContent = descripcion_videojuego;
    const contenedorBotones = document.createElement("div");
    contenedorBotones.classList.add("contenedor-botones-accion");
    const boton_eliminar = document.createElement("button");
    boton_eliminar.classList.add("boton_eliminar");
    boton_eliminar.textContent = "Eliminar";
    const boton_editar = document.createElement("button");
    boton_editar.classList.add("boton-editar");
    boton_editar.textContent = "Editar";
    elemento.appendChild(contenedorBotones);
    elemento.appendChild(id);
    elemento.appendChild(titulo);
    elemento.appendChild(descripcion);
    contenedorBotones.appendChild(boton_eliminar);
    contenedorBotones.appendChild(boton_editar);
    contenedor.appendChild(elemento);
}

document.querySelector("#boton-agregar").addEventListener("click", () => {
    obtener_datos_formulario();
});
//event prevent default