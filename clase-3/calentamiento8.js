function duplicar(arreglo) {
    const duplicados = arreglo.map(num => num * 2);
    return duplicados;
}
console.log(duplicar([1, 2, 3]));
console.log(duplicar([]));