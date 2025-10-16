import { Videojuego } from "./definiciones.js";
//Constante del contenedor principal en el HTML.
const contenedor = document.querySelector(".contenedor-elementos-juegos");

//Función que crea la tarjeta del videojuego.
//Sirve para mostrar un juego en la lista y añadirle botones de acción (editar/eliminar).
export const crearElementoVista = (id_videojuego, titulo_videojuego, descripcion_videojuego, plataforma_videojuego, gestor) => {
    //Crea el div principal que contiene toda la tarjeta del juego.
    const elemento = document.createElement("div");
    elemento.classList.add("elemento-lista-juegos");
    elemento.setAttribute('data-id', id_videojuego);

    //Crea el contenedor para el modo "normal" de visualización.
    const vistaContenedor = document.createElement("div");
    vistaContenedor.classList.add("vista-modo");

    //Elemento H2 para mostrar el ID del juego.
    const id = document.createElement("h2");
    id.textContent = id_videojuego + "#";
    id.classList.add("id_numero");

    //Elemento H1 para mostrar el título del juego.
    const titulo = document.createElement("h1");
    titulo.textContent = titulo_videojuego;
    titulo.classList.add("Titulo");

    //Etiqueta span para mostrar la plataforma del juego.
    const plataformaTag = document.createElement("span");
    plataformaTag.textContent = plataforma_videojuego;
    plataformaTag.classList.add("plataforma-tag");

    //Párrafo para mostrar la descripción del juego.
    const descripcion = document.createElement("p");
    descripcion.textContent = descripcion_videojuego;

    vistaContenedor.appendChild(id);
    vistaContenedor.appendChild(plataformaTag);
    vistaContenedor.appendChild(titulo);
    vistaContenedor.appendChild(descripcion);

    //Crea el contenedor para el modo de edición.
    const edicionContenedor = document.createElement("div");
    edicionContenedor.classList.add("edicion-modo");
    edicionContenedor.style.display = "none";

    //Input para editar el título.
    const inputTitulo = document.createElement("input");
    inputTitulo.type = "text";
    inputTitulo.value = titulo_videojuego;
    inputTitulo.classList.add("input-editar-titulo");

    //Textarea para editar la descripción.
    const inputDescripcion = document.createElement("textarea");
    inputDescripcion.value = descripcion_videojuego;
    inputDescripcion.classList.add("input-editar-descripcion");

    //Select para editar la plataforma.
    const selectPlataforma = document.createElement("select");
    //Arreglo con las opciones de plataforma.
    const plataformas = ["PC", "PlayStation", "Xbox", "Nintendo Switch", "Móvil", "Otro"];
    plataformas.forEach(p => {
        const option = document.createElement("option");
        option.value = p;
        option.textContent = p;
        if (p === plataforma_videojuego) {
            option.selected = true;
        }
        selectPlataforma.appendChild(option);
    });

    edicionContenedor.appendChild(inputTitulo);
    edicionContenedor.appendChild(inputDescripcion);
    edicionContenedor.appendChild(selectPlataforma);

    //Contenedor para agrupar los botones de acción.
    const contenedorBotones = document.createElement("div");
    contenedorBotones.classList.add("contenedor-botones-accion");

    //Botón para eliminar el juego.
    const boton_eliminar = document.createElement("button");
    boton_eliminar.classList.add("boton_eliminar");
    boton_eliminar.textContent = "Eliminar";

    //Botón para cambiar al modo edición.
    const boton_editar = document.createElement("button");
    boton_editar.classList.add("boton-editar");
    boton_editar.textContent = "Editar";

    //Botón para guardar los cambios.
    const boton_guardar = document.createElement("button");
    boton_guardar.classList.add("boton-guardar");
    boton_guardar.textContent = "Guardar";
    boton_guardar.style.display = "none";

    //Botón para cancelar la edición.
    const boton_cancelar = document.createElement("button");
    boton_cancelar.classList.add("boton-cancelar");
    boton_cancelar.textContent = "Cancelar";
    boton_cancelar.style.display = "none";

    //Lógica del botón ELIMINAR.
    boton_eliminar.addEventListener('click', () => {
        if (gestor.eliminar(id_videojuego)) {
            elemento.remove();
        }
    });

    //Lógica del botón EDITAR.
    boton_editar.addEventListener('click', () => {
        vistaContenedor.style.display = "none";
        edicionContenedor.style.display = "block";
        boton_editar.style.display = "none";
        boton_eliminar.style.display = "none";
        boton_guardar.style.display = "inline-block";
        boton_cancelar.style.display = "inline-block";
    });

    //Lógica del botón CANCELAR.
    boton_cancelar.addEventListener('click', () => {
        inputTitulo.value = titulo.textContent;
        inputDescripcion.value = descripcion.textContent;

        vistaContenedor.style.display = "block";
        edicionContenedor.style.display = "none";
        boton_editar.style.display = "inline-block";
        boton_eliminar.style.display = "inline-block";
        boton_guardar.style.display = "none";
        boton_cancelar.style.display = "none";
    });

    //Lógica del botón GUARDAR.
    boton_guardar.addEventListener('click', () => {
        //Nuevo valor del título del input.
        const nuevoTitulo = inputTitulo.value;
        //Nuevo valor de la descripción del input.
        const nuevaDescripcion = inputDescripcion.value;
        //Nuevo valor de la plataforma del select.
        const nuevaPlataforma = selectPlataforma.value;

        if (nuevoTitulo && nuevaDescripcion && nuevaPlataforma) {
            //Objeto Videojuego con los datos actualizados.
            const datosActualizados = new Videojuego(id_videojuego, nuevoTitulo, nuevaDescripcion, nuevaPlataforma);

            if (gestor.actualizar(id_videojuego, datosActualizados)) {
                titulo.textContent = nuevoTitulo;
                descripcion.textContent = nuevaDescripcion;
                plataformaTag.textContent = nuevaPlataforma;
                boton_cancelar.click();
            }
        } else {
            alert("Todos los campos son obligatorios.");
        }
    });

    contenedorBotones.appendChild(boton_eliminar);
    contenedorBotones.appendChild(boton_editar);
    contenedorBotones.appendChild(boton_guardar);
    contenedorBotones.appendChild(boton_cancelar);

    elemento.appendChild(vistaContenedor);
    elemento.appendChild(edicionContenedor);
    elemento.appendChild(contenedorBotones);
    contenedor.prepend(elemento);
};