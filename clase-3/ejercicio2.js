// ==============================================================================
// Ejercicio 10: Acceso a la Aplicación Escolar
// Consigna: Escribí una función llamada `evaluarAccesoApp` que reciba tres
// parámetros: `edad` (Number), `tienePermisoDocente` (Boolean) y `esInvitado` (Boolean).
// Retornar true si puede acceder o false en caso contrario:
// 1. Acceso permitido si edad >= 18 O tienePermisoDocente es true.
// 2. NUNCA se permite el acceso si esInvitado es true.
// ==============================================================================

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if (esInvitado) {
        console.log(false);
    } else if (edad >= 18 || tienePermisoDocente) {
        console.log(true);
    }
}
evaluarAccesoApp(16, true, false);
evaluarAccesoApp(20, false, true);

// 📌 Feedback Docente (Profesor Axel):
// Excelente evaluación lógica. Al igual que en el ejercicio anterior, recordá RETORNAR el booleano (`return verdadero/falso`) en vez de usar `console.log` dentro de la función.
// Te dejo la solución de referencia con variable auxiliar y retorno único:

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    let tieneAcceso = false;

    if (!esInvitado && (edad >= 18 || tienePermisoDocente)) {
        tieneAcceso = true;
    }

    return tieneAcceso;
}

console.log(evaluarAccesoApp(16, true, false));
console.log(evaluarAccesoApp(20, false, true));
console.log(evaluarAccesoApp(17, false, false));
