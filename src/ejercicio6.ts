interface Calificacion {
  estudianteId: number;
  materia: string;
  categoria: "tareas" | "quices" | "examen";
  nota: number;
}

function promedioPorCategoria(calificaciones: Calificacion[], id: number) {
  let filtradas = calificaciones.filter(c => c.estudianteId === id);
  let acumulado: { [key: string]: { suma: number; count: number } } = {};

  filtradas.forEach(c => {
    if (!acumulado[c.categoria]) acumulado[c.categoria] = { suma: 0, count: 0 };
    acumulado[c.categoria].suma += c.nota;
    acumulado[c.categoria].count++;
  });

  let promedios: { [key: string]: number } = {};
  for (let cat in acumulado) {
    promedios[cat] = acumulado[cat].suma / acumulado[cat].count;
  }
  return promedios;
}
