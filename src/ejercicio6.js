"use strict";
function promedioPorCategoria(calificaciones, id) {
    let filtradas = calificaciones.filter(c => c.estudianteId === id);
    let acumulado = {};
    filtradas.forEach(c => {
        if (!acumulado[c.categoria])
            acumulado[c.categoria] = { suma: 0, count: 0 };
        acumulado[c.categoria].suma += c.nota;
        acumulado[c.categoria].count++;
    });
    let promedios = {};
    for (let cat in acumulado) {
        promedios[cat] = acumulado[cat].suma / acumulado[cat].count;
    }
    return promedios;
}
