// ====================
// CLIENTE
// Mostrar menú
// ====================

function mostrarMenu() {

    const menu = document.getElementById("menu");

    for(let i = 0; i < catalogo.length; i++) {

        menu.innerHTML +=
        `
        <div class="producto">

            <h3>${catalogo[i].nombre}</h3>

            <p>Precio: $${catalogo[i].precio}</p>

            <button onclick="agregarPedido(
                '${catalogo[i].nombre}',
                ${catalogo[i].precio}
            )">
                Agregar
            </button>

        </div>
        `;
    }
}


// Mostrar pedidos en pantalla
function actualizarPantalla() {

    const lista = document.getElementById("listaPedidos");

    lista.innerHTML = "";

    for(let i = 0; i < pedidos.length; i++) {

        lista.innerHTML +=
        `
        <li>

            ${pedidos[i].nombre} - $${pedidos[i].precio}

            <button onclick="eliminarPedido(${i})">
                Eliminar
            </button>

        </li>
        `;
    }

    document.getElementById("total").innerHTML =
    "Total: $" + totalAcumulado;
}