// ==============================================================================
// Ejercicio 8: Duplicar Elementos de un Arreglo
// Consigna: Escribir una función llamada `duplicar` que reciba un arreglo de
// números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
// ==============================================================================

function duplicar(arreglo) {
    let nuevo = [];
    for (let i = 0; i < arreglo.length; i++) {
        nuevo.push(arreglo[i] * 2);
    }
    return nuevo;
}
console.log(duplicar([1, 2, 3]));

// 📌 Feedback Docente (Profesor Axel):
// Excelente uso de `.push()` y multiplicación. Mantiene una estructura impecable de retorno único al final.


console.log(duplicar([1, 2, 3]));
console.log(duplicar([4, 5, 6]));