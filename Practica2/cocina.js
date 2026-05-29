const catalogo = [

    {
        nombre: "Café",
        precio: 40
    },

    {
        nombre: "Té",
        precio: 35
    },

    {
        nombre: "Sandwich",
        precio: 65
    },

    {
        nombre: "Pastel",
        precio: 50
    }

];



function prepararPedido(producto) {

    console.log("Preparando pedido...");

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let exito = Math.random();

            if(exito > 0.3) {

                resolve(producto);

            } else {

                reject(producto);
            }

        }, 3000);

    });

}