function imprimirArreglo(arreglo) {
    let caracter = arreglo.length;
    for(let i = 0; i < caracter; i++){
        console.log(arreglo[i]);
    }
}

imprimirArreglo([1, "Hola", 2, "Mundo"]);