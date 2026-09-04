function aplicarDescuento(precio, descuento){
        let montoDescuento = (precio * descuento) / 100;
        let precioFinal = precio - montoDescuento;
        return precioFinal;
}
const sumarIva = function(precio){
        let iva = precio * 1.21;
        return iva;
}
const redondear = (numero) => Number(numero.toFixed(2));

function procesarCompraMovil(precioBase, descuentoPct) {   
    console.log(redondear(sumarIva(aplicarDescuento(precioBase, descuentoPct))));
}

procesarCompraMovil(100, 10);