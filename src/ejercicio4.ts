interface CampoFormulario {
    nombre: string;
    tipo: "texto" | "numero" | "email";
    valor: string | number;
}

function obtenerCamposInvalidos(campos: CampoFormulario[]): string[] {
    return campos.filter(campo => {
        if (campo.tipo === "texto") {
            return typeof campo.valor !== "string" || (campo.valor as string).trim() === "";
        }
        if (campo.tipo === "numero") {
            return typeof campo.valor !== "number" || isNaN(campo.valor as number);
        }
        if (campo.tipo === "email") {
            return (
                typeof campo.valor !== "string" ||
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.valor as string)
            );
        }
        return true;
    }).map(campo => campo.nombre); 
}