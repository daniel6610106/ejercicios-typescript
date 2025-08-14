"use strict";
function contadorCambios(cambios) {
    const contador = {
        nombre: 0,
        correo: 0,
        contraseña: 0
    };
    for (const cambio of cambios) {
        if (cambio.tipo === "nombre") {
            contador.nombre++;
        }
        else if (cambio.tipo === "correo") {
            contador.correo++;
        }
        else if (cambio.tipo === "contraseña") {
            contador.contraseña++;
        }
    }
    return contador;
}
