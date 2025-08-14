type Operacion = "suma" | "resta" | "multiplicacion" | "division";

const calculate = (a: number, b: number, operacion: Operacion) => {
    switch (operacion) {
        case "suma":
        return a + b

        case "resta":
        return a - b

        case "multiplicacion":
        return a * b

        case "division":
        return a / b
    }

};




const analizarTexto = (texto: string) => ({
  longitud: texto.length,
  palabras: texto.trim().split(" ")
});



