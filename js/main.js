import {ConvertirJSONaObjeto} from "./ayudas.js"
import {crearElementoVista} from "./crud.js"
import {ConvertirObjetoaJSON} from "./ayudas.js"
import { Videojuego } from "./definiciones.js";
import { GestorVideojuegos} from "./Gestor.js";

/*let Videojuegos = [
    new Videojuego(1, 'Minecraft', 'Minecraft es un videojuego de construcción de tipo «mundo abierto» o en inglés sandbox creado originalmente por el sueco Markus Persson (conocido comúnmente como «Notch»), que creó posteriormente Mojang Studios (actualmente parte de Microsoft).[19]​[20]​ Está programado en el lenguaje de programación Java[21]​ para la versión Java Edition y posteriormente desarrollado en C++ para la versión de Bedrock Edition.[22]​ Fue lanzado el 17 de mayo de 2009, y después de numerosos cambios, su primera versión estable «1.0» fue publicada el 18 de noviembre de 2011.'),
    new Videojuego(2, 'The Legend of Zelda: Breath of the Wild', 'Un juego de acción-aventura de mundo abierto desarrollado y publicado por Nintendo. Es la decimonovena entrega principal de la serie The Legend of Zelda.'),
    new Videojuego(3, 'Grand Theft Auto V', 'Un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games.'),
    new Videojuego(4, 'Red Dead Redemption 2', 'Una precuela de Red Dead Redemption, ambientada en 1899. El jugador controla a Arthur Morgan, un forajido y miembro de la banda de Van der Linde.'),
    new Videojuego(5, 'The Witcher 3: Wild Hunt', 'Un videojuego de rol de acción desarrollado por CD Projekt Red, basado en la serie de novelas de fantasía de Andrzej Sapkowski.'),
    new Videojuego(6, 'Super Mario Odyssey', 'Un juego de plataformas en 3D desarrollado y publicado por Nintendo para Nintendo Switch. Es la decimonovena entrega de la serie Super Mario.'),
    new Videojuego(7, 'Elden Ring', 'Un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. Creado en colaboración con el novelista de fantasía George R. R. Martin.'),
    new Videojuego(8, 'Horizon Zero Dawn', 'Un videojuego de rol de acción post-apocalíptico desarrollado por Guerrilla Games y publicado por Sony Interactive Entertainment.'),
    new Videojuego(9, 'God of War (2018)', 'Un videojuego de acción-aventura desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Es la octava entrega de la serie God of War.'),
    new Videojuego(10, 'Animal Crossing: New Horizons', 'Un videojuego de simulación de vida desarrollado y publicado por Nintendo. Es la quinta entrega principal de la serie Animal Crossing.')
];
*/
const gestorVideojuegos = new GestorVideojuegos();
gestorVideojuegos.CargarListaVideojuegos(await ConvertirJSONaObjeto("json/Videojuegos.json"));
gestorVideojuegos.ObtenerVideojuegoPorID(3);
gestorVideojuegos.ActualizarDatosVideojuego(7, new Videojuego(7, "Ejemplo", "lorem"));
gestorVideojuegos.AgregarNuevoVideojuego(new Videojuego(11, "mario", "mario ejemplo"));
gestorVideojuegos.ObtenerListaVideojuegos();
gestorVideojuegos. EliminarVideojuego(3);
gestorVideojuegos.ObtenerListaVideojuegos();
function CrearListaVideojuegos(){
    gestorVideojuegos.listaVideojuego.forEach(elemento =>{
        crearElementoVista(elemento.id, elemento.titulo, elemento.descripcion)
    })
}
CrearListaVideojuegos();