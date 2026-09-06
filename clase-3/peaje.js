function calcularTarifa(tipoVehiculo, hora, esFeriado){
    let vehiculo = tipoVehiculo.toUpperCase();
    let precio = 0; // 📌 Corregido: declarar siempre la variable 'precio' con let para evitar globales implícitas.

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

// 📌 Feedback Docente (Profesor Axel):
// 1. Declaración de variables: Acordate de declarar 'let precio = 0;' al inicio de la función. En tu código original faltaba el 'let', lo que crea una variable global accidental.
// 2. Funciones auxiliares: Sacamos la declaración de 'function numeroAleatorio' de adentro del bucle 'for' a nivel general para evitar redeclarar la función en cada iteración del bucle.

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function simularFilaCabina(cantidadVehiculos){
    let montoFinal = 0;
    let opciones = ["moto", "auto", "camion"];

    for(let i = 1; i <= cantidadVehiculos; i++){
        let opcionAleatoria = Math.floor(Math.random() * opciones.length);
        let vehiculo = opciones[opcionAleatoria];
        let horaFinal = numeroAleatorio(1, 23);

        let opcionesFeriado = [true, false];
        let opcionAleatoriaFeriado = Math.floor(Math.random() * opcionesFeriado.length);
        let feriado = opcionesFeriado[opcionAleatoriaFeriado];

        let tarifa = calcularTarifa(vehiculo, horaFinal, feriado);
        montoFinal += tarifa;
        
        console.log("Intento " + i +": " 
            + " Vehiculo: " + vehiculo 
            + " | Hora: " + horaFinal 
            + " | Feriado: " + feriado 
            + " | Tarifa cobrada: $" + tarifa);
    }
    console.log("Monto Final: $" + montoFinal);
    return montoFinal;
}

simularFilaCabina(3);
