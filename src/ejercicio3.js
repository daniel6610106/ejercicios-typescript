"use strict";
function enviarNotificacion(notificacion) {
    if ("destinatario" in notificacion) {
        console.log(`Enviando email a ${notificacion.destinatario} con asunto ${notificacion.asunto}`);
    }
    else if ("numero" in notificacion) {
        console.log(`Enviando SMS al número ${notificacion.numero} con mensaje: ${notificacion.mensaje}`);
    }
    else {
        console.log(`Enviando notificación push al dispositivo ${notificacion.dispositivo} con mensaje: ${notificacion.mensaje}`);
    }
}
