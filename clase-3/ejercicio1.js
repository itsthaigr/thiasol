function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    let cantidad = parseInt(cantArchivos);
    let tamano = parseFloat(tamanoPromedioMB);
    let mb = cantidad * tamano;
    let kb = mb * 1024;
    console.log("Se descargarán " + cantidad + " archivos con un peso total de " + kb + " KB.")
}

calcularEstadisticasDescarga("10", "1.5");