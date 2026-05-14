
let pedidos = [];

let totalAcumulado = 0;


function agregarPedido(nombre, precio) {

    const pedido = {
        nombre: nombre,
        precio: precio
    };

    pedidos.push(pedido);

    totalAcumulado += precio;

    actualizarPantalla();
}


function eliminarPedido(index) {

    totalAcumulado -= pedidos[index].precio;

    pedidos.splice(index, 1);

    actualizarPantalla();
}