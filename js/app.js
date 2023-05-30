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
            console.log(`Usuario logueado como: ${nombreUsuario}`);
            break;
        }
        else {
            nombreUsuario = prompt('Ingrese su usuario:');
        }
    }
}

function addProducto() {

    var producto = document.getElementById('nameProduct').value;
    var costo = parseInt(document.getElementById('costosProduct').value);
    var files = document.getElementById('formFile').value;
    if (producto == "" || costo == "") {
        alert(`Todos los campos son obligatorios`);
    }
    else {
        if (!isNaN(costo) && costo != null) {
            console.log(`${producto}`);
            console.log(`${costo}`);
            console.log(`${files}`);
            document.getElementById('productoValue').innerHTML = `${producto}`;
            document.getElementById('costosValue').innerHTML = `$ ${costo * iva + costo}`;
            document.getElementById('imagenValue').innerHTML = `${files}`;
        }
        else {
            alert(`Costo solo admite campos numericos`);
        }
    }
}