type Unidad = "cm" | "m" | "km" | "in" | "ft";

function convertir(valor: number, desde: Unidad, hasta: Unidad): number {
  const aMetros: { [key in Unidad]: number } = {
    cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048
  };
  return (valor * aMetros[desde]) / aMetros[hasta];
}
