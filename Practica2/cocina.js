const catalogo = [

    {
        nombre: "Café",
        precio: 40,
        disponible: true,
        promocion: "2x1"
    },

    {
        nombre: "Té",
        precio: 35,
        disponible: true,
        promocion: "Sin promoción"
    },

    {
        nombre: "Sandwich",
        precio: 65,
        disponible: true,
        promocion: "Combo"
    },

    {
        nombre: "Pastel",
        precio: 50,
        disponible: false,
        promocion: "15% OFF"
    }

];



function mostrarCatalogo() {

    console.log("CATÁLOGO ACTUAL");
    console.log(catalogo);
}



function agregarProducto(nombre, precio, disponible, promocion) {

    const producto = {
        nombre: nombre,
        precio: precio,
        disponible: disponible,
        promocion: promocion
    };

    catalogo.push(producto);

    console.log("Producto agregado:");
    console.log(producto);

    mostrarMenu();
}



function eliminarProducto(index) {

    console.log("Producto eliminado:");
    console.log(catalogo[index]);

    catalogo.splice(index, 1);

    mostrarMenu();
}