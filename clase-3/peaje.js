function calcularTarifa(tipoVehiculo, hora, esFeriado){
    let vehiculo = tipoVehiculo.toUpperCase();

    switch (vehiculo) {
    case "MOTO":
        precio = 150;
        break;
    case "AUTO":
        precio = 300;
        break;
    case "CAMION":
        precio = 600;
        break;
    default:
        precio = 0;
    }

    if(precio===0){
        console.log("Aviso. Ocurrio un error: " + tipoVehiculo + " no es un vehiculo valido");
    }
    else if(esFeriado){
        precio = precio;
    }
    else if(hora >= 8 && hora <= 10 || hora >= 17 && hora <= 19){
        precio = precio * 1.3;
    }
    return precio;
}

function simularFilaCabina(cantidadVehiculos){
    let montoFinal = 0;
    for(let i = 1; i <= cantidadVehiculos; i++){
    let opciones = ["moto", "auto", "camion"];
    let opcionAleatoria = Math.floor(Math.random() * opciones.length);
    let vehiculo = opciones[opcionAleatoria];

    function numeroAleatorio(min, max){
        let hora = Math.floor(Math.random() * (max-min + 1) + min);
        return hora;
    }
    let horaFinal = numeroAleatorio(1,23);

    let opcionesFeriado = [true, false];
    let opcionAleatoriaFeriado = Math.floor(Math.random() * opcionesFeriado.length);
    let feriado = opcionesFeriado[opcionAleatoriaFeriado];

    let tarifa = calcularTarifa(vehiculo, horaFinal, feriado);
    montoFinal = montoFinal + tarifa;
    
    console.log("Intento " + i +": " 
        + " Vehiculo: " + vehiculo 
        + " | Hora: " + horaFinal 
        + " | Feriado: " + feriado 
        + " | Tarifa cobrada: " + tarifa);
}
console.log("Monto Final: " + montoFinal);
}

simularFilaCabina(3);
