const iva = 0.21;
// Bienevenida
function saludo() {
    alert("Bienvenido a Infinity")
    /*Inicia el programa*/
    let comando;
    comando = prompt('Ingrese el comando:\n\n1- Salir\n2- Ingrese su usuario\n');
    while (comando != '1') {
        nombreUsuario = prompt('Ingrese su usuario:');
        if (nombreUsuario != null || nombre != '') {
            alert(`Se registro como: ${nombreUsuario}`);
            document.getElementById('user').innerHTML = `${nombreUsuario}`;
            console.log(`Usuario logueado como: ${nombreUsuario}`);// Muestra en consola: Usuario logueado como: ${nombreUsuario}
            break;
        }
        else {
            nombreUsuario = prompt('Ingrese su usuario:'); //valida nuevamente que se ingrese el valor
        }
    }
}
// agregar producto al listado
function addProducto() {

    var producto = document.getElementById('nameProduct').value; // Captura valor de ID nameProduct
    var costo = parseInt(document.getElementById('costosProduct').value);// Captura valor de ID costosProduct y los pas
    var files = document.getElementById('formFile').value;/// Captura valor de ID
    if (producto == "" || costo == "") {
        alert(`Todos los campos son obligatorios`);
    }
    else {
        // Valida que el campo costo sea numerico
        if (!isNaN(costo) && costo != null) {
            console.log(`Nombre del producto Ingresado: ${producto}`); // Muestra en consola: Nombre del producto Ingresado: ${producto}
            console.log(`Costo: $ ${costo}`); // Muestra en consola:Costo: $ ${costo}
            console.log(`Archivo: ${files}`); // Muestra en consola:Archivo: ${files}
            document.getElementById('productoValue').innerHTML = `${producto}`;// Muestra en span : producto
            document.getElementById('costosValue').innerHTML = `$ ${costo * iva + costo}`;// Muestra en span : $ costo final
            document.getElementById('imagenValue').innerHTML = `${files}`; // Muestra en span : ruta del archivo
        }
        else {
            alert(`Costo solo admite campos numericos`);
        }
    }
}