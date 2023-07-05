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
class BaseDeDatos {
    constructor() {
        // Array de la base de datos
        this.productos = [];
        // Con una simple línea de código, vamos a ir cargando todos los productos que tengamos
        this.agregarRegistro(1, 'Pc Gamer Armada Ryzen 5 4600g 12 Nucleo Amd Ram 16gb Ssd 24', 99.992, "https://http2.mlstatic.com/D_NQ_NP_987277-MLA47399516891_092021-O.webp");
        this.agregarRegistro(2, 'Pc Gamer Armada Ryzen 5 4600g 12 Nucleo Amd Ram 16gb Ssd 240', 213.972, "https://http2.mlstatic.com/D_NQ_NP_2X_736468-MLA54339629438_032023-F.webp");
        this.agregarRegistro(3, 'Pc Armada Pro Intel 3.6ghz Dual Core Ssd 240 Ram 8gb Ddr4', 147.999, "https://http2.mlstatic.com/D_NQ_NP_2X_832597-MLA53084402117_122022-F.webp");
        this.agregarRegistro(4, 'Pc Armada Gamer Amd Ryzen 5 5600g 12 Nucleo Ram 16gb Ssd 480', 294.499, "https://http2.mlstatic.com/D_NQ_NP_2X_884368-MLA53087339003_122022-F.webp");
        this.agregarRegistro(5, 'Nootebook Asus X515EA slate gray 15.6", Intel Core i5 1135G7 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 1920x1080px', 355.799, "https://http2.mlstatic.com/D_NQ_NP_2X_908593-MLA49420869607_032022-F.webp");
        this.agregarRegistro(6, 'Pc Armada Gamer Amd Ryzen 5 5600g 12 Nucleo Ram 16gb Ssd 480', 32.102, "https://http2.mlstatic.com/D_NQ_NP_2X_741824-MLA41898051260_052020-F.webp");
        this.agregarRegistro(7, 'Disco sólido interno Crucial CT1000BX500SSD1 1TB', 94.499, "https://http2.mlstatic.com/D_NQ_NP_2X_741824-MLA41898051260_052020-F.webp");
        this.agregarRegistro(8, 'Disco Solido Ssd 1tb M.2 Kingston Snv2s/1000g Nvme Pcie 4.0', 30.501, "https://http2.mlstatic.com/D_NQ_NP_2X_830625-MLA52062909392_102022-F.webp");
        this.agregarRegistro(9, 'Notebook Asus Zenbook 14 Amd Ryzen 7-5825u 8 Gb Ram 512 Gb Ssd Jade Negro Windows 11', 649.872, "https://http2.mlstatic.com/D_NQ_NP_2X_731490-MLA54202850371_032023-F.webp");
        this.agregarRegistro(10, 'Notebook Asus Amd R5-5600h 16gb 512g Win11', 560.999, "https://http2.mlstatic.com/D_NQ_NP_2X_970053-MLU69515847455_052023-F.webp");
        this.agregarRegistro(11, 'Notebook Lenovo Ideapad 1i Intel I3 1215u 4gb Ram (ampliable Hasta 12gb) 128gb Ssd Windows 11s', 204.999, "https://http2.mlstatic.com/D_NQ_NP_2X_787180-MLA54518190876_032023-F.webp");
        this.agregarRegistro(13, 'Cable Red Utp Rj45 20 Mts Metros Categoria 5e Internet Patch', 1.449, "https://http2.mlstatic.com/D_NQ_NP_2X_833286-MLA44286952343_122020-F.webp");
        this.agregarRegistro(13, 'Disco sólido interno Kingston SA400S37 / 480G 480GB negro', 16.424, "https://http2.mlstatic.com/D_NQ_NP_2X_751939-MLA46221843872_052021-F.webp");
    }

    // Método que crea el objeto producto y lo almacena en el array con un push
    agregarRegistro(id, nombre, precio, imagen) {
        const producto = new Producto(id, nombre, precio, imagen);
        this.productos.push(producto);
    }

    // Nos retorna el array con todos los productos de la base de datos
    traerRegistros() {
        return this.productos;
    }

    // Busca un producto por ID, si lo encuentra lo retorna en forma de objeto
    // A tener en cuenta: Los IDs son únicos, debe haber uno solo por producto para evitar errores
    registroPorId(id) {
        return this.productos.find((producto) => producto.id === id);
    }

    // Retorna una lista (array) de productos que incluyan en el nombre los caracteres
    // que le pasamos por parámetro. Si le pasamos "a" como parámetro, va a buscar y
    // devolver todos los productos que tengan la letra "a" en el nombre del producto
    registrosPorNombre(palabra) {
        return this.productos.filter((producto) => producto.nombre.toLowerCase().includes(palabra));
    }
}

// Clase carrito, para manipular los productos de nuestro carrito
class Carrito {
    constructor() {
        // Cargamos del storage
        const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
        // Inicializamos variables
        this.carrito = carritoStorage || [];
        this.total = 0;
        this.totalProductos = 0;
        // Apenas se crea el carrito, que llame al método listar para que
        // renderice todos los productos que haya en el storage
        this.listar();
    }

    // Verificamos si el producto está en el carrito. Usamos desectruración en el parámetro:
    // recibimos el objeto producto en el parámetro pero solo usamos la propiedad id
    estaEnCarrito({ id }) {
        return this.carrito.find((producto) => producto.id === id);
    }

    // Método para agregar el producto al carrito
    agregar(producto) {
        // Si el producto está en el carrito, lo guardo en esta variable
        const productoEnCarrito = this.estaEnCarrito(producto);
        if (productoEnCarrito) {
            // Si está en el carrito, le sumo la cantidad
            productoEnCarrito.cantidad++;
        } else {
            // Si no está, lo agrego al carrito
            this.carrito.push({ ...producto, cantidad: 1 });
        }
        // Actualizo el storage
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        // Actualizo el carrito en el HTML
        this.listar();
    }

    // Método para quitar o restar productos del carrito
    quitar(id) {
        // Recibimos como parámetro el ID del producto, con ese ID buscamos el índice
        // del producto para poder usar el splice y borrarlo en caso de que haga falta
        const indice = this.carrito.findIndex((producto) => producto.id === id);
        // Si la cantidad del producto es mayor a 1, le resto
        if (this.carrito[indice].cantidad > 1) {
            this.carrito[indice].cantidad--;
        } else {
            // Sino, signica que hay un solo producto, así que lo borro
            this.carrito.splice(indice, 1);
        }
        // Actualizo el storage
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        // Actualizo el carrito en el HTML
        this.listar();
    }

    // Este método es el encargado de actualizar el HTML de nuestro carrito
    listar() {
        // Reiniciamos las variables
        this.total = 0;
        this.totalProductos = 0;
        divCarrito.innerHTML = "";
        // Recorremos todos los productos del carrito y lo agregamos al div #carrito
        for (const producto of this.carrito) {
            // A cada div lo agregamos un botón de Quitar del carrito, y a ese botón le pasamos
            // el atributo data-id, con el id del producto. Eso después nos va a ser muy útil
            // para saber desde que producto estamos haciendo click
            divCarrito.innerHTML += `
        <div class="productoCarrito">
            <h5>${producto.nombre}</h2>
            <img src=${producto.imagen} class="card-img-top" alt="...">
            <p>$${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <a href="#" data-id="${producto.id}" class="btnQuitar">Quitar del carrito</a>
        </div>
    `;
            // Actualizamos los totales
            this.total += producto.precio * producto.cantidad;
            this.totalProductos += producto.cantidad;
        }
        // Botones de quitar: como no sabemos cuántos productos hay en el carrito,
        // buscamos TODOS los botones que hayamos renderizado recién, y los recorremos uno por uno
        const botonesQuitar = document.querySelectorAll(".btnQuitar");
        for (const boton of botonesQuitar) {
            // Le agregamos un evento onclick a cada uno
            boton.onclick = (event) => {
                event.preventDefault();
                // Llamamos al método quitar, pasándole el ID del producto que sacamos
                // del atributo data-id del HTML
                this.quitar(Number(boton.dataset.id));
            };
        }
        // Actualizamos variables carrito
        spanCantidadProductos.innerText = this.totalProductos;
        spanTotalCarrito.innerText = this.total;
    }
}

// Clase "molde" para los productos
class Producto {
    constructor(id, nombre, precio, imagen = false) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Objeto de la base de datos
const bd = new BaseDeDatos();

// Elementos
const divProductos = document.querySelector("#productos");
const divCarrito = document.querySelector("#carrito");
const spanCantidadProductos = document.querySelector("#cantidadProductos");
const spanTotalCarrito = document.querySelector("#totalCarrito");
const inputBuscar = document.querySelector("#inputBuscar");
const botonCarrito = document.querySelector("section h1");

// Llamamos a la función
cargarProductos(bd.traerRegistros());

// Esta función regular recibe como parámetro un array de productos y se encarga
// de renderizarlos en el HTML
function cargarProductos(productos) {
    divProductos.innerHTML = "";
    // Recorremos todos los productos y lo agregamos al div #productos
    for (const producto of productos) {
        // A cada div lo agregamos un botón de Agregar al carrito, y a ese botón le pasamos
        // el atributo data-id, con el id del producto. Eso después nos va a ser muy útil
        // para saber desde que producto estamos haciendo click
        divProductos.innerHTML += `
        <div class="col">
                <div class="card">
                    <img src=${producto.imagen} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$ ${producto.precio}</p>
            <a href="#" class="btnAgregar btn btn-primary" data-id="${producto.id}">Agregar al carrito</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
    // Botones agregar al carrito: como no sabemos cuántos productos hay en nuestra base de datos,
    // buscamos TODOS los botones que hayamos renderizado recién, y los recorremos uno por uno
    const botonesAgregar = document.querySelectorAll(".btnAgregar");
    for (const boton of botonesAgregar) {
        // Le agregamos un evento click a cada uno
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            // Obtenemos el ID del producto del atributo data-id
            const id = Number(boton.dataset.id);
            // Con ese ID, consultamos a nuestra base de datos por el producto
            const producto = bd.registroPorId(id);
            // Agregamos el registro (producto) a nuestro carrito
            carrito.agregar(producto);
        });
    }
}

// Buscador: al soltar una tecla se ejecuta el evento keyup
inputBuscar.addEventListener("keyup", (event) => {
    event.preventDefault();
    // Obtenemos el atributo value del input
    const palabra = inputBuscar.value;
    // Pedimos a nuestra base de datos que nos traiga todos los registros
    // que coincidan con la palabra que pusimos en nuestro input
    const productos = bd.registrosPorNombre(palabra.toLowerCase());
    // Lo mostramos en el HTML
    cargarProductos(productos);
});


// Objeto carrito: lo instanciamos a lo último de nuestro archivo JavaScript
// para asegurarnos que TODO esté declarado e inicializado antes de crear el carrito
const carrito = new Carrito();