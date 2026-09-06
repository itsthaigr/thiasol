// ==============================================================================
// Ejercicio 12: Procesamiento de Pago
// Consigna: Escribí una función llamada `procesarCompraMovil` que reciba `precioBase`
// y `descuentoPct`. Debe utilizar 3 funciones auxiliares cooperativas:
// 1. `aplicarDescuento` (Función Declarada): Retorna precio rebajado.
// 2. `sumarIva` (Expresión de Función): Retorna precio + 21% IVA.
// 3. `redondear` (Función Flecha): Retorna valor redondeado a 2 decimales.
// Encadenar la ejecución y retornar el precio final.
// ==============================================================================

function aplicarDescuento(precio, descuento) {
    let montoDescuento = (precio * descuento) / 100;
    let precioFinal = precio - montoDescuento;
    return precioFinal;
}
const sumarIva = function (precio) {
    let iva = precio * 1.21;
    return iva;
}
const redondear = (numero) => Number(numero.toFixed(2));

function procesarCompraMovil(precioBase, descuentoPct) {
    console.log(redondear(sumarIva(aplicarDescuento(precioBase, descuentoPct))));
}

procesarCompraMovil(100, 10);

// 📌 Feedback Docente (Profesor Axel):
// ¡Excelente uso de las tres formas de declarar funciones (declarada, expresión y flecha) y su encadenamiento!
// Recordá hacer que `procesarCompraMovil` retorne el precio final redondeado.

function procesarCompraMovil(precioBase, descuentoPct) {
    const precioConDescuento = aplicarDescuento(precioBase, descuentoPct);
    const precioConIva = sumarIva(precioConDescuento);
    const precioFinal = redondear(precioConIva);

    return precioFinal;
}

console.log("Precio final compra:", procesarCompraMovil(100, 10));