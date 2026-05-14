// ====================
// CAJA
// ====================

// Lista de pedidos
let pedidos = [];

// Total acumulado
let totalAcumulado = 0;


// Agregar pedido
function agregarPedido(nombre, precio) {

    const pedido = {
        nombre: nombre,
        precio: precio
    };

    pedidos.push(pedido);

    totalAcumulado += precio;

    actualizarPantalla();
}


// Eliminar pedido
function eliminarPedido(index) {

    totalAcumulado -= pedidos[index].precio;

    pedidos.splice(index, 1);

    actualizarPantalla();
}