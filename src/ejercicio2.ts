type transaccion = {
    tipo: "ingreso" | "egreso";
    categoria: string;
}

function sumarPorTipo(transacciones: (transaccion & { monto: number })[]): { ingreso: number; egreso: number } {
    return transacciones.reduce(
        (acumulador, transaccion) => {
            if (transaccion.tipo === "ingreso") acumulador.ingreso += transaccion.monto;
            else if (transaccion.tipo === "egreso") acumulador.egreso += transaccion.monto;
            return acumulador;
        },
        { ingreso: 0, egreso: 0 }
    );
}

