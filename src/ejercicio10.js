"use strict";
function validarPago(pago) {
    if (pago.metodo === "tarjeta")
        return !!pago.numero && !!pago.cvv;
    if (pago.metodo === "transferencia")
        return !!pago.banco && !!pago.cuenta;
    return true; // efectivo
}
