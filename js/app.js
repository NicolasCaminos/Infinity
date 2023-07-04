
//RENDERIZADOS
const divProductos = document.getElementById('productos');
const btnAdd = document.getElementById('btnAdd');
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

// COMENZAMOS PROYECTO

//CREAMOS LA CLASE DE LA DB SIMULADA
class DbCarrito {
    constructor() {

        this.productos = [];
        //CARGAMOS PRODUCTOS
        this.addProducts(1, 'Pc Gamer Armada Ryzen 5 4600g 12 Nucleo Amd Ram 16gb Ssd 24', 99.992, "https://http2.mlstatic.com/D_NQ_NP_987277-MLA47399516891_092021-O.webp");
        this.addProducts(2, 'Pc Gamer Armada Ryzen 5 4600g 12 Nucleo Amd Ram 16gb Ssd 240', 213.972, "https://http2.mlstatic.com/D_NQ_NP_2X_736468-MLA54339629438_032023-F.webp");
        this.addProducts(3, 'Pc Armada Pro Intel 3.6ghz Dual Core Ssd 240 Ram 8gb Ddr4', 147.999, "https://http2.mlstatic.com/D_NQ_NP_2X_832597-MLA53084402117_122022-F.webp");
        this.addProducts(4, 'Pc Armada Gamer Amd Ryzen 5 5600g 12 Nucleo Ram 16gb Ssd 480', 294.499, "https://http2.mlstatic.com/D_NQ_NP_2X_884368-MLA53087339003_122022-F.webp");
        this.addProducts(5, 'Nootebook Asus X515EA slate gray 15.6", Intel Core i5 1135G7 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 1920x1080px', 355.799, "https://http2.mlstatic.com/D_NQ_NP_2X_908593-MLA49420869607_032022-F.webp");
        this.addProducts(6, 'Pc Armada Gamer Amd Ryzen 5 5600g 12 Nucleo Ram 16gb Ssd 480', 32.102, "https://http2.mlstatic.com/D_NQ_NP_2X_741824-MLA41898051260_052020-F.webp");
        this.addProducts(7, 'Disco sólido interno Crucial CT1000BX500SSD1 1TB', 94.499, "https://http2.mlstatic.com/D_NQ_NP_2X_741824-MLA41898051260_052020-F.webp");
        this.addProducts(8, 'Disco Solido Ssd 1tb M.2 Kingston Snv2s/1000g Nvme Pcie 4.0', 30.501, "https://http2.mlstatic.com/D_NQ_NP_2X_830625-MLA52062909392_102022-F.webp");
        this.addProducts(9, 'Notebook Asus Zenbook 14 Amd Ryzen 7-5825u 8 Gb Ram 512 Gb Ssd Jade Negro Windows 11', 649.872, "https://http2.mlstatic.com/D_NQ_NP_2X_731490-MLA54202850371_032023-F.webp");
        this.addProducts(10, 'Notebook Asus Amd R5-5600h 16gb 512g Win11', 560.999, "https://http2.mlstatic.com/D_NQ_NP_2X_970053-MLU69515847455_052023-F.webp");
        this.addProducts(11, 'Notebook Lenovo Ideapad 1i Intel I3 1215u 4gb Ram (ampliable Hasta 12gb) 128gb Ssd Windows 11s', 204.999, "https://http2.mlstatic.com/D_NQ_NP_2X_787180-MLA54518190876_032023-F.webp");
        this.addProducts(13, 'Cable Red Utp Rj45 20 Mts Metros Categoria 5e Internet Patch', 1.449, "https://http2.mlstatic.com/D_NQ_NP_2X_833286-MLA44286952343_122020-F.webp");
        this.addProducts(13, 'Disco sólido interno Kingston SA400S37 / 480G 480GB negro', 16.424, "https://http2.mlstatic.com/D_NQ_NP_2X_751939-MLA46221843872_052021-F.webp");
    }

    //ESTE METODO SIMULARA LA INSERCION DE LOS REGISTROS
    addProducts(id, nombre, precio, imagen) {
        const producto = new Producto(id, nombre, precio, imagen);
        this.productos.push(producto)
    }
    //ESTE MÉTODO TRAE TODOS LOS PRODUCTOS CARGADOS EN EL ARRAY
    sproducts() {
        return this.productos;
    }
    //BUSQEDA POR ID
    productSearchById(id) {
        return this.productos.find((product) => product.id === id);
    }
}
//CLASE CARRITO 

//CREAMOS CLASE MOLDE PARA LOS PRODUCTOS
class Producto {
    constructor(id, nombre, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}
// Objeto de la base de datos
const db = new DbCarrito();
//SE CARGARAN POR MEDIO DEL DOM LOS REGISTROS
function loadProduct() {
    const productos = db.sproducts();
    for (const producto of productos) {
        divProductos.innerHTML += `<div class="col">
                <div class="card">
                    <img src=${producto.imagen} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$ ${producto.precio}</p>
                        <a class="btn btn-primary" class="btnAdd">Comprar</a>
                    </div>
                </div>
            </div>
`;
    }
}
//AGREGAMOS PRODUCTOS AL CARRITO
// for (const btn of btnAdd) {
//     btn.addEventListener('click', (event) => {
//         const id = parseInt(btn.dataset.id);
//         const producto = db.productSearchById(id);
//     });
// }
//Instanciamos
loadProduct();