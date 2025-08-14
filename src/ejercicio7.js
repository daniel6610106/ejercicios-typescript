"use strict";
function evaluacionBajoStock(productos) {
    switch (productos.categoria) {
        case "alimentos":
            return productos.cantidad < 20;
        case "tecnologia":
            return productos.cantidad < 5;
        case "papeleria":
            return productos.cantidad < 50;
    }
}
