// PEDIDOS

let pedidos = [];

let totalAcumulado = 0;

// IVA

const IVA = 0.16;

// PROMOCIONES

const promociones = [
    "Café Americano + Croissant por $75",
    "2 Cappuccinos por $110",
    "10% de descuento en bebidas calientes",
    "Pay de Queso gratis en compras mayores a $250"
];

// CALLBACK

function notificarPedido(
    mensaje,
    callback
) {

    callback(mensaje);
}

// AGREGAR

function agregarPedido(nombre, precio) {

    const disponible =
    descontarStock(nombre);

    if (!disponible) {

        alert("Producto agotado");

        return;
    }

    const tiempo =
    nombre === "Café Americano" ||
    nombre === "Espresso"
    ? 30
    : 50;

    const pedido = {

        id: Date.now(),

        nombre: nombre,

        precio: precio,

        estado: "Pedido recibido",

        tiempoRestante: tiempo,

        cancelado: false
    };

    pedidos.push(pedido);

    totalAcumulado += precio;

    mostrarMenu();

    actualizarPedidos();

    iniciarProcesoPedido(pedido);
}

// ELIMINAR

function eliminarPedido(index) {

    const pedidoEliminado =
    pedidos[index];

    pedidoEliminado.cancelado = true;

    regresarStock(
        pedidoEliminado.nombre
    );

    totalAcumulado -=
    pedidoEliminado.precio;

    pedidos.splice(index, 1);

    mostrarMenu();

    actualizarPedidos();

    notificarPedido(
        "Pedido cancelado",
        mostrarNotificacion
    );
}

// SUBTOTAL

function calcularSubtotal() {

    return totalAcumulado;
}

// IVA

function calcularIVA(subtotal) {

    return subtotal * IVA;
}

// TOTAL

function calcularTotal(
    subtotal,
    iva
) {

    return subtotal + iva;
}