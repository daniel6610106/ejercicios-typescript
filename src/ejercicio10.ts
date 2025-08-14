type Pago =
  | { metodo: "tarjeta"; numero: string; cvv: string }
  | { metodo: "transferencia"; banco: string; cuenta: string }
  | { metodo: "efectivo" };

function validarPago(pago: Pago): boolean {
  if (pago.metodo === "tarjeta") return !!pago.numero && !!pago.cvv;
  if (pago.metodo === "transferencia") return !!pago.banco && !!pago.cuenta;
  return true; // efectivo
}
