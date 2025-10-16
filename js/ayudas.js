//funcion: ConvertirJSONaObjeto(direccion)
//descripcion: Lee un archivo JSON desde una dirección y lo convierte en un objeto.
export async function ConvertirJSONaObjeto(direccion){
    const datos = await fetch(direccion);
    const objeto = await datos.json();
    console.log(objeto);
    return objeto;
}
//funcion: ConvertirObjetoaJSON(objeto)
//descripcion: Convierte un objeto a una cadena de texto en formato JSON.
export function ConvertirObjetoaJSON(objeto){
    return JSON.stringify(objeto, null, 2)
}