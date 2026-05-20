let pedidos = [];

let totalAcumulado = 0;

const IVA = 0.16;

const promociones = [

    "Café Americano + Croissant por $75",

    "2 Cappuccinos por $110",

    "10% de descuento en bebidas calientes",

    "Pay de Queso gratis en compras mayores a $250"

];



function agregarPedido(nombre, precio) {

    const disponible =
    descontarStock(nombre);



    if(!disponible) {

        alert("Producto agotado");

        return;
    }



    const pedido = {

        nombre: nombre,

        precio: precio
    };



    pedidos.push(pedido);



    totalAcumulado += precio;



    mostrarMenu();

    actualizarPedidos();
}

function eliminarPedido(index) {

    const pedidoEliminado =
    pedidos[index];



    regresarStock(
        pedidoEliminado.nombre
    );



    totalAcumulado -=
    pedidoEliminado.precio;



    pedidos.splice(index, 1);



    mostrarMenu();

    actualizarPedidos();
}


function calcularSubtotal() {

    return totalAcumulado;
}



function calcularIVA(subtotal) {

    return subtotal * IVA;
}


function calcularTotal(subtotal, iva) {

    return subtotal + iva;
}