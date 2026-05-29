function mostrarMenu() {

    const menu = document.getElementById("menu");

    menu.innerHTML = "";

    for(let i = 0; i < catalogo.length; i++) {

        menu.innerHTML +=
        `
        <div class="producto">

            <h3>${catalogo[i].nombre}</h3>

            <p>Precio: $${catalogo[i].precio}</p>

            <p>
                Promoción:
                ${catalogo[i].promocion}
            </p>

            <p>
                Disponibilidad:
                ${catalogo[i].disponible ? "Disponible" : "Agotado"}
            </p>

            ${
                catalogo[i].disponible
                ?
                `
                <button onclick="agregarPedido(
                    '${catalogo[i].nombre}',
                    ${catalogo[i].precio}
                )">
                    Agregar
                </button>
                `
                :
                `
                <button disabled>
                    Agotado
                </button>
                `
            }

        </div>
        `;
    }

    console.log("Menú mostrado correctamente");
}



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

    console.log("Pantalla actualizada");
}