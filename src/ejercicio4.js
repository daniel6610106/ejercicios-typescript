"use strict";
function obtenerCamposInvalidos(campos) {
    return campos.filter(campo => {
        if (campo.tipo === "texto") {
            return typeof campo.valor !== "string" || campo.valor.trim() === "";
        }
        if (campo.tipo === "numero") {
            return typeof campo.valor !== "number" || isNaN(campo.valor);
        }
        if (campo.tipo === "email") {
            return (typeof campo.valor !== "string" ||
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.valor));
        }
        return true;
    }).map(campo => campo.nombre);
}
