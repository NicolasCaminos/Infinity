const iva = 0.21;
// Bienevenida
function saludo() {
    alert("Bienvenido a Infinity")
    /*Inicia el programa*/
    let comando;

    while (comando != 'Salir') {
        comando = prompt('Ingrese el comando:\n\n- Registrar Usuario\n- Pagar\n- Salir');

        switch (comando) {

            case 'Registrar Usuario':
                let nombreUsuario = prompt('Ingrese su usuario:');
                if (nombreUsuario != null || nombreUsuario != '') {
                    alert(`Se registro como: ${nombreUsuario}`);
                }
                else {
                    nombreUsuario = prompt('Ingrese su usuario:'); //valida nuevamente que se ingrese el valor
                }
                break;

            case "Pagar":

                let pago = parseInt(prompt("Ingresar monto a pagar"))
                if (pago >= 1) {
                    alert("Se realizo el pago correctamente")
                }
                else if (pago < 1) {
                    alert("El pago fue rechazado")
                }
            default:
                alert('El comando ingresado no se reconoce.');
                break;
        }
        break;

    }
}

// agregar producto al listado
// function addProducto() {

//     var producto = document.getElementById('nameProduct').value; // Captura valor de ID nameProduct
//     var costo = parseInt(document.getElementById('costosProduct').value);// Captura valor de ID costosProduct y los pas
//     var files = document.getElementById('formFile').value;/// Captura valor de ID
//     if (producto == "" || costo == "") {
//         alert(`Todos los campos son obligatorios`);
//     }
//     else {
//         // Valida que el campo costo sea numerico
//         if (!isNaN(costo) && costo != null) {
//             console.log(`Nombre del producto Ingresado: ${producto}`); // Muestra en consola: Nombre del producto Ingresado: ${producto}
//             console.log(`Costo: $ ${costo}`); // Muestra en consola:Costo: $ ${costo}
//             console.log(`Archivo: ${files}`); // Muestra en consola:Archivo: ${files}
//             document.getElementById('productoValue').innerHTML = `${producto}`;// Muestra en span : producto
//             document.getElementById('costosValue').innerHTML = `$ ${costo * iva + costo}`;// Muestra en span : $ costo final
//             document.getElementById('imagenValue').innerHTML = `${files}`; // Muestra en span : ruta del archivo
//         }
//         else {
//             alert(`Costo solo admite campos numericos`);
//         }
//     }
// }