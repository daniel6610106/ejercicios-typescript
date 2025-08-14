"use strict";
function validacion(usuario) {
    return usuario.filter(usuario => usuario.edad >= 18 && usuario.estadoActivo && usuario.rol !== "visitante");
}
