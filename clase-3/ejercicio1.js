// ==============================================================================
// Ejercicio 9: Cálculo de Espacio de Almacenamiento
// Consigna: Escribí una función llamada `calcularEstadisticasDescarga` que reciba
// dos parámetros: `cantArchivos` (String) y `tamanoPromedioMB` (String).
// 1. Convertir ambos parámetros a valores numéricos (Number).
// 2. Calcular el tamaño total (cantArchivos * tamanoPromedioMB).
// 3. Convertir peso total a KB (1 MB = 1024 KB).
// 4. Retornar: "Se descargarán [cantArchivos] archivos con un peso total de [pesoTotalKB] KB."
// ==============================================================================

function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    let cantidad = parseInt(cantArchivos);
    let tamano = parseFloat(tamanoPromedioMB);
    let mb = cantidad * tamano;
    let kb = mb * 1024;
    console.log("Se descargarán " + cantidad + " archivos con un peso total de " + kb + " KB.")
}

calcularEstadisticasDescarga("10", "1.5");

// 📌 Feedback Docente (Profesor Axel):
// Muy buen casteo numérico con `parseInt` y `parseFloat`.
// Ojo pedagógico importante: La consigna pide RETORNAR el string del mensaje final, no consologuearlo directamente dentro de la función. Te dejo la solución de referencia con retorno único y template literals:

function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    const archivos = Number(cantArchivos);
    const tamanoMB = Number(tamanoPromedioMB);
    const pesoTotalKB = archivos * tamanoMB * 1024;

    const mensaje = `Se descargarán ${archivos} archivos con un peso total de ${pesoTotalKB} KB.`;
    return mensaje;
}

console.log(calcularEstadisticasDescarga("10", "1.5"));