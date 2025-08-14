type EstadoTarea = "pendiente" | "en progreso" | "finalizado";

interface tarea {
    id: number;
    descripcion: string;
    completada: boolean;
    estado: EstadoTarea;
}

function filtrarTareasActivas(tareas: tarea[]): tarea[] {
    return tareas.filter(
        tareas => tareas.estado === "pendiente" || tareas.estado === "en progreso"
    );
}





