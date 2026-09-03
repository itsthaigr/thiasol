function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if(esInvitado){
        console.log(false);
    }else if(edad>=18 || tienePermisoDocente){
        console.log(true);
    }
}
evaluarAccesoApp(16, true, false);
evaluarAccesoApp(20, false, true);
