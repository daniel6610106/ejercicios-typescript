"use strict";
const calculate = (a, b, operacion) => {
    switch (operacion) {
        case "suma":
            return a + b;
        case "resta":
            return a - b;
        case "multiplicacion":
            return a * b;
        case "division":
            return a / b;
    }
};
const analizarTexto = (texto) => ({
    longitud: texto.length,
    palabras: texto.trim().split(" ")
});
