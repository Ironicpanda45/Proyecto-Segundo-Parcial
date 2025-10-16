import { ConvertirJSONaObjeto } from "./ayudas.js";
import { crearElementoVista } from "./controladorVista.js";
import { Videojuego } from "./definiciones.js";
import { GestorVideojuegos } from "./GestorVideojuegos.js";


//Crea una instancia del gestor de datos.
const gestorVideojuegos = new GestorVideojuegos();
//Referencia al formulario HTML para agregar juegos.
const formulario = document.querySelector("#formulario-agregar");
//Referencia al botón de enviar el formulario.
const botonAgregar = document.querySelector("#boton-agregar");


//funcion: inicializarAplicacion()
//descripcion: Carga los datos iniciales y arranca la aplicación. Sirve para preparar la lista de juegos al inicio.
async function inicializarAplicacion() {
    try {
        // Carga el arreglo de juegos desde el archivo JSON.
        const datosIniciales = await ConvertirJSONaObjeto("json/Videojuegos.json");
        gestorVideojuegos.CargarListaVideojuegos(datosIniciales);

        VistaListaInicial();
        conectarFormulario();

    } catch (error) {
        console.log("Error al inicializar la aplicación o cargar datos:", error);
    }
}

//funcion: VistaListaInicial()
//descripcion: Crea los elementos visuales para todos los juegos de la lista. Sirve para dibujar la lista inicial de juegos en el HTML.
function VistaListaInicial() {
    // Lista completa de videojuegos.
    const lista = gestorVideojuegos.obtenerLista();
    lista.forEach(elemento => {
        crearElementoVista(elemento.id, elemento.titulo, elemento.descripcion, elemento.plataforma, gestorVideojuegos);
    });
}

//funcion: conectarFormulario()
//descripcion: Configura el evento para agregar un juego con el botón del formulario. Sirve para capturar los datos del formulario y añadir un juego nuevo a la lista y a la vista.
function conectarFormulario() {
    if (botonAgregar) {
        botonAgregar.addEventListener("click", (e) => {
            e.preventDefault();
            // Objeto con los datos del formulario.
            const datos_formulario = new FormData(formulario);
            // Convierte los datos del formulario a un objeto simple.
            const datos = Object.fromEntries(datos_formulario.entries());

            if (datos.titulo && datos.descripcion && datos.plataforma) {
                // Nuevo objeto Videojuego con los datos capturados.
                const nuevoVideojuego = new Videojuego(null, datos.titulo, datos.descripcion, datos.plataforma);

                // Resultado de agregar el juego al gestor.
                const juegoAgregado = gestorVideojuegos.agregar(nuevoVideojuego);

                if (juegoAgregado) {
                    crearElementoVista(juegoAgregado.id, juegoAgregado.titulo, juegoAgregado.descripcion, juegoAgregado.plataforma, gestorVideojuegos);
                    formulario.reset();
                    document.querySelector(".AlertaVacio").style.display = "none";
                }
            } else {
                document.querySelector(".AlertaVacio").style.display = "block";
            }
        });
    }
}

//Ejecuta la aplicacion
inicializarAplicacion();