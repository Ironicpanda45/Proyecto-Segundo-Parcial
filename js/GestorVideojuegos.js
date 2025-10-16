export class GestorVideojuegos {
    //Almacena todos los videojuegos.
    listaVideojuego = [];
    VideojuegoSeleccionado = null;

    constructor() {
        this.listaVideojuego = [];
        this.VideojuegoSeleccionado = null;
    }
    //funcion: CargarListaVideojuegos(arreglo_videojuegos)
    //descripcion: Carga el arreglo de juegos inicial al gestor.
    CargarListaVideojuegos(arreglo_videojuegos) {
        this.listaVideojuego = arreglo_videojuegos;
    }
    //funcion: obtenerProximoId()
    //descripcion: Calcula el id que se debe asignar al próximo juego. Sirve para asegurar que cada nuevo juego tenga un identificador diferente a los demas.
    obtenerProximoId() {
        if (this.listaVideojuego.length === 0) {
            return 1;
        }
        //Obtiene el id del último juego en la lista.
        const ultimoId = this.listaVideojuego[this.listaVideojuego.length - 1].id;
        return ultimoId + 1;
    }
    //funcion: agregar(videojuego)
    //descripcion: Agrega un nuevo videojuego a la lista.
    agregar(videojuego) {
        try {
            if (!videojuego || !videojuego.titulo || !videojuego.descripcion) {
                // Lanza un error si el juego no tiene los datos mínimos.
                throw new Error("El juego es nulo o incompleto.");
            }
            videojuego.id = this.obtenerProximoId();
            this.listaVideojuego.push(videojuego);
            return videojuego;
        } catch (error) {
            return null;
        }
    }
    //funcion: obtenerLista()
    //descripcion: Devuelve el arreglo completo de videojuegos.
    obtenerLista() {
        return this.listaVideojuego;
    }
    //funcion: obtenerPorId(id_videojuego)
    //descripcion: Busca en la lista y devuelve un videojuego usando su id.
    obtenerPorId(id_videojuego) {
        // Busca el juego por ID.
        const juego = this.listaVideojuego.find(v => v.id === id_videojuego);
        if (!juego) {
            return null;
        }
        return juego;
    }
    //funcion: actualizar(id_videojuego, nuevosDatos)
    //descripcion: Reemplaza los datos de un videojuego existente con nuevos datos. Sirve para guardar los cambios hechos por el usuario en el modo edición.
    actualizar(id_videojuego, nuevosDatos) {
        const index = this.listaVideojuego.findIndex(v => v.id === id_videojuego);
        if (index === -1) {
            return null;
        }
        this.listaVideojuego[index] = nuevosDatos;
        return this.listaVideojuego[index];
    }
    //funcion: eliminar(id_videojuego)
    //descripcion: Elimina un videojuego de la lista usando su id.
    eliminar(id_videojuego) {
        //Guarda la cantidad de juegos antes de intentar eliminar.
        const initialLength = this.listaVideojuego.length;
        //Crea un nuevo arreglo sin el juego con el id.
        this.listaVideojuego = this.listaVideojuego.filter(v => v.id !== id_videojuego);

        if (this.listaVideojuego.length === initialLength) {
            return false;
        }
        return true;
    }
}