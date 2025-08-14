"use strict";
function convertir(valor, desde, hasta) {
    const aMetros = {
        cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048
    };
    return (valor * aMetros[desde]) / aMetros[hasta];
}
