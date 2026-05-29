let pedidos = [];

let totalAcumulado = 0;



function agregarPedido(nombre, precio) {

    const pedido = {

        nombre: nombre,
        precio: precio
    };

    pedidos.push(pedido);

    totalAcumulado += precio;

    console.log("Pedido agregado:");
    console.log(pedido);

    actualizarPantalla();

    procesarPedido(pedido, pedidoListo, pedidoCancelado);
}



function eliminarPedido(index) {

    totalAcumulado -= pedidos[index].precio;

    pedidos.splice(index, 1);

    actualizarPantalla();
}



function procesarPedido(pedido, callbackExito, callbackError) {

    actualizarEstado("Pedido recibido");

    prepararPedido(pedido)

    .then((resultado) => {

        callbackExito(resultado);

    })

    .catch((error) => {

        callbackError(error);

    });

}



function pedidoListo(pedido) {

    console.log("Pedido listo");
    console.log(pedido);

    actualizarEstado("Pedido entregado");
}



function pedidoCancelado(pedido) {

    console.log("Pedido cancelado");
    console.log(pedido);

    actualizarEstado("Pedido cancelado");
}