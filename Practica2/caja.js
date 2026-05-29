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

    console.log("Lista de pedidos:");
    console.log(pedidos);

    actualizarPantalla();
}



function eliminarPedido(index) {

    console.log("Pedido eliminado:");
    console.log(pedidos[index]);

    totalAcumulado -= pedidos[index].precio;

    pedidos.splice(index, 1);

    actualizarPantalla();
}