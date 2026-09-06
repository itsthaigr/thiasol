// ==============================================================================
// Ejercicio 13: Gráfico de Consumo de Memoria
// Consigna: Escribí una función llamada `dibujarGraficoConsumo` que reciba `pasos`
// (Number). Construir un string acumulando bloques '█' usando bucles anidados.
// Cada fila tiene bloques equivalentes al paso actual y termina con '\n'.
// Retornar el string del gráfico final.
// ==============================================================================

function dibujarGraficoConsumo(pasos) {
    let grafico = "";
    for (let i = 0; i < pasos; i++) {
        grafico = grafico + "██";
        console.log(grafico);
    }
}

dibujarGraficoConsumo(3);

// 📌 Feedback Docente (Profesor Axel):
// Muy buen intento acumulando los bloques de texto. Te dejo la solución de referencia construyendo el string acumulado con saltos de línea `\n` y retorno único:

function dibujarGraficoConsumo(pasos) {
    let grafico = "";

    for (let fila = 1; fila <= pasos; fila++) {
        for (let col = 1; col <= fila; col++) {
            grafico += "█";
        }
        grafico += "\n";
    }

    return grafico;
}

console.log(dibujarGraficoConsumo(4));