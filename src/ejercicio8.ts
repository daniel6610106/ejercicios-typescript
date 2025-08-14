

interface Usuario {
    nombre: string;
    edad: number;
    estadoActivo: boolean;
    rol: "admin" | "editor" | "visitante"
}


function validacion (usuario: Usuario[]): Usuario[] {
    return usuario.filter(usuario => usuario.edad >= 18 && usuario.estadoActivo && usuario.rol !== "visitante" )
}