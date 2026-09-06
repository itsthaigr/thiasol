// ==============================================================================
// Ejercicio 5: Sumar Rango de Números
// Consigna: Escribir una función llamada `sumarRango` que reciba dos argumentos:
// `numeroInicial` y `numeroFinal`. La función debe retornar la suma de todos los
// números enteros dentro de ese rango (incluyendo los extremos).
// ==============================================================================

function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumarRango(1, 5));

// 📌 Feedback Docente (Profesor Axel):
// Excelente estructura acumuladora con retorno único al final.


console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));