// ==============================================================================
// Ejercicio 3: IMC (Índice de Masa Corporal)
// Consigna: El índice de masa corporal (IMC o BMI) se calcula con la fórmula:
// peso / altura^2. Escribí una función llamada `bmi` que reciba `peso` y `altura`,
// y retorne un string de acuerdo a las siguientes posibilidades:
// - "Bajo de peso" si BMI < 18.5
// - "Normal" si está entre 18.5 y 24.9
// - "Sobrepeso" si está entre 25 y 29.9
// - "Obeso" si es igual o mayor a 30
// ==============================================================================

function bmi(peso, altura) {
    let bmiCalculado = peso / (altura * altura);
    if (bmiCalculado < 18.5) {
        return "Bajo de peso";
    } else if (bmiCalculado >= 18.5 && bmiCalculado <= 24.9) {
        return "Normal";
    } else if (bmiCalculado >= 25 && bmiCalculado <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
console.log(bmi(65, 1.8));

// 📌 Feedback Docente (Profesor Axel):
// Muy buen cálculo de la fórmula. Para que el código quede más estructurado y predecible, nos acostumbramos a usar una variable auxiliar para guardar el resultado y hacer un único return al final:

function bmi(peso, altura) {
    const indice = peso / (altura ** 2);
    let diagnostico = "Obeso"; // Valor por defecto

    if (indice < 18.5) {
        diagnostico = "Bajo de peso";
    } else if (indice < 25) {
        diagnostico = "Normal";
    } else if (indice < 30) {
        diagnostico = "Sobrepeso";
    }

    return diagnostico;
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
