function sumarRango(numeroInicial, numeroFinal) {
    let total = 0;
    if (numeroInicial<numeroFinal){
        do{
        total = total + numeroInicial;
        numeroInicial = numeroInicial + 1;
    } while (numeroInicial <= numeroFinal);  
    }
    else{
        total = total + numeroInicial;
    }
    return total;
}

console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));
console.log(sumarRango(5, 5));