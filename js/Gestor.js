export class GestorVideojuegos {
    constructor() {
        this.listaVideojuego = [];
        this.VideojuegoSeleccionado = null;
    }
    CargarListaVideojuegos(arreglo_videojuegos) {
        this.listaVideojuego = arreglo_videojuegos;
    }
    AgregarNuevoVideojuego(videojuego) {
        try {
            if (!this.listaVideojuego) {
                throw new Error("La lista no ha sido inicializada")
            }
            if (!videojuego) {
                throw new Error("El juego es nulo")
            }
            if (!videojuego.id || !videojuego.titulo || !videojuego.descripcion) {
                throw new Error("El juego es nulo")
            }
            this.listaVideojuego.push(videojuego);
            console.log(this.listaVideojuego)
        }
        catch (error) {
            console.log(error)
            return error;
        };
    }
    ObtenerListaVideojuegos() {
        try {
            if (!this.listaVideojuego) {
                throw new Error("La lista no ha sido inicializada")
            }
            console.log(this.listaVideojuego)
            return this.listaVideojuego;
        }
        catch (error) {
            console.log(error)
            return error;
        };
    }
    ObtenerVideojuegoPorID(id_videojuego) {
        try {
            if (!this.listaVideojuego) {
                throw new Error("La lista no ha sido inicializada")
            }
            for (let i = 0; i < this.listaVideojuego.length; i++) {
                if (id_videojuego == this.listaVideojuego[i].id) {
                    console.log("Si se encontro el videojuego con el id " + id_videojuego);
                    console.log(this.listaVideojuego[i]);
                    return this.listaVideojuego[i];
                }
            }
            throw new Error("No se encontro el elemento")
        }
        catch (error) {
            console.log(error)
            return error;
        };
    }
    ActualizarDatosVideojuego(id_videojuego, videojuego_actualizado) {
        try {
            if (!this.listaVideojuego) {
                throw new Error("La lista no ha sido inicializada")
            }
            for (let i = 0; i < this.listaVideojuego.length; i++) {
                if (id_videojuego == this.listaVideojuego[i].id) {
                    console.log("Actualizando el videojuego con el id " + id_videojuego);
                    this.listaVideojuego[i] = videojuego_actualizado;
                    console.log(this.listaVideojuego[i]);
                    return this.listaVideojuego[i];
                }
            }
        }
        catch (error) {
            console.log(error)
            return error;
        }
    }
    EliminarVideojuego(id_videojuego) {
        try {
            if (!this.listaVideojuego) {
                throw new Error("La lista no ha sido inicializada")
            }
            for (let i = 0; i < this.listaVideojuego.length; i++) {
                if (id_videojuego == this.listaVideojuego[i].id) {
                    console.log("Eliminando videojuego con el id " + id_videojuego);
                    this.listaVideojuego.splice(i, 1);
                    return;
                }
            }
        }
        catch (error) {
            console.log(error)
            return error;
        }
    }
}