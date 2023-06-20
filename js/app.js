//VARIABLES
const iva = 0.21;
//CLASES
const products = {
    product: "",
    file: "",
    price: ""
}
//FUNCIONES
// Bienevenida
function saludo() {
    Swal.fire(
        'Bienvenido!',
        `a Infinity`,
        'success'
    )
    /*Inicia el programa*/
    let comando;

    while (comando != 'Salir' || comando != 'Comprar') {
        comando = prompt('Ingrese el comando:\n\n- Registrar Usuario\n- Comprar\n- Salir');

        switch (comando) {

            case 'Registrar Usuario':
                let nombreUsuario = prompt('Ingrese su usuario:');
                if (nombreUsuario != null || nombreUsuario != '') {
                    Swal.fire(
                        'Good job!',
                        `Se registro como: ${nombreUsuario}`,
                        'success'

                    )
                }
                else {
                    nombreUsuario = prompt('Ingrese su usuario:'); //valida nuevamente que se ingrese el valor
                }
                break;

        }
        break;
    }

}

// agregar producto al listado
function addProduct() {


    let carrito = [];
    products.product = document.getElementById('nameProduct').value; // Captura valor de ID nameProduct
    products.price = parseInt(document.getElementById('costosProduct').value);// Captura valor de ID costosProduct y los pas  
    // products.file = document.getElementById('formFile').value;/// Captura valor de ID
    if (products.product == "" || products.price == "") {
        alert(`Todos los campos son obligatorios`);
    }
    else {

        // Valida que el campo costo sea numerico
        if (!isNaN(products.price) && products.price != null) {

            let preciofinal = (products.price * iva) + products.price;
            products.price = preciofinal;
            // console.log(`Nombre del producto Ingresado: ${products.product}`); // Muestra en consola: Nombre del producto Ingresado: ${producto}
            // console.log(`Costo: $ ${products.price}`); // Muestra en consola:Costo: $ ${costo}
            // console.log(`Archivo: ${products.file}`); // Muestra en consola:Archivo: ${files}
            carrito.push(products);
            console.log(carrito);

        } else {
            alert(`Costo solo admite campos numericos`);
        }
    }

}


function searchProductById(id) {

}