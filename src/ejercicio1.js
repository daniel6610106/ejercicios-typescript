"use strict";
function filtrarTareasActivas(tareas) {
    return tareas.filter(tareas => tareas.estado === "pendiente" || tareas.estado === "en progreso");
}
