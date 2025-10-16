export async function ConvertirJSONaObjeto(direccion){
    const datos = await fetch(direccion);
    const objeto = await datos.json();
    console.log(objeto);
    return objeto;
}
export function ConvertirObjetoaJSON(objeto){
    return JSON.stringify(objeto, null, 2)
}