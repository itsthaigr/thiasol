// ==============================================================================
// Ejercicio 11: Simulación de Test de Red
// Consigna: Escribí una función llamada `simularReportePing` que reciba
// `intentosMaximos` (Number):
// 1. Ejecutar bucle for desde 1 hasta intentosMaximos.
// 2. Si el intento es múltiplo de 5: imprimir "Error crítico de hardware en intento [intento]" y salir con break.
// 3. Si el intento es par: imprimir "Intento [intento]: Exitoso".
// 4. Si el intento es impar: imprimir "Intento [intento]: Fallido".
// ==============================================================================

function simularReportePing(intentosMaximos) {
    for (let i = 1; i <= intentosMaximos; i++) {
        if (i % 5 === 0) {
            console.log("Error crítico de hardware en intento " + i);
            break;
        }
        else if (i % 2 === 0) {
            console.log("Intento " + i + ": Exitoso");
        }
        else {
            console.log("Intento " + i + ": Fallido");
        }
    }
}

simularReportePing(3);
simularReportePing(10);

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente uso del bucle `for`, módulo `%` y la instrucción `break` para interrumpir la ejecución en el múltiplo de 5!

function simularReportePing(intentosMaximos) {
    for (let intento = 1; intento <= intentosMaximos; intento++) {
        if (intento % 5 === 0) {
            console.log(`Error crítico de hardware en intento ${intento}`);
            break;
        }

        let estado = (intento % 2 === 0) ? "Exitoso" : "Fallido";
        console.log(`Intento ${intento}: ${estado}`);
    }
}

simularReportePing(10);