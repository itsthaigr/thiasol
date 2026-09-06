// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar `false`.
// ==============================================================================

function contrasenaValida(str) {
    if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
        return true;
    }
    else {
        return false;
    }
}
console.log(contrasenaValida("2Fj(jjbFsuj"));

// Feedback Docente (Profesor Axel):
// Muy bien resuelto, Thiago! Evaluás perfectamente las opciones.
// Para acostumbrarnos a la estructura limpia de variable auxiliar con valor por defecto y retorno único al final:

function contrasenaValida(str) {
    let esValida = false; // Valor por defecto

    if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
        esValida = true;
    }

    return esValida;
}

console.log(contrasenaValida("2Fj(jjbFsuj"));
console.log(contrasenaValida("eoZiugBf&g9"));
console.log(contrasenaValida("hola"));
