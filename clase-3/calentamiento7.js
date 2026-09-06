// ==============================================================================
// Ejercicio 7: Número de Caracteres
// Consigna: Escribir una función llamada `numeroDeCaracteres` que reciba un string
// y un carácter (un string de longitud 1). La función debe retornar el número de
// veces que aparece dicho carácter en el string.
// ==============================================================================

function numeroDeCaracteres(str, caracter) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            contador++;
        }
    }
    return contador;
}
console.log(numeroDeCaracteres("hola mundo", "o"));

// 📌 Feedback Docente (Profesor Axel):
// Impecable uso de la variable acumuladora `contador` e incremento `contador++` con retorno único al final.


console.log(numeroDeCaracteres("hola mundo", "o"));
console.log(numeroDeCaracteres("javascript", "a"));