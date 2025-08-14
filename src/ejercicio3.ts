type email = {
    destinatario: string;
    asunto: string;
    contenido: string;
}

type sms = {
    numero: string;
    mensaje: string;
}


type push = {
    dispositivo: string;
    mensaje: string;
}


function enviarNotificacion(notificacion: email | sms | push) {
    if ("destinatario" in notificacion) {
        console.log(`Enviando email a ${notificacion.destinatario} con asunto ${notificacion.asunto}`);
    } else if ("numero" in notificacion) {
        console.log(`Enviando SMS al número ${notificacion.numero} con mensaje: ${notificacion.mensaje}`);
    } else {
        console.log(`Enviando notificación push al dispositivo ${notificacion.dispositivo} con mensaje: ${notificacion.mensaje}`);
    }
}



