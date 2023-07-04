//VARIABLES
const iva = 0.21;

// COMENZAMOS PROYECTO

//CREAMOS LA CLASE DE LA DB SIMULADA
class DbCarrito {
    constructor() {
        this.productos = [];

    }

    //ESTE METODO SIMULARA LA INSERCION DE LOS REGISTROS
    addProducts(id, nombre, precio, categoria, imagen) {
        const product = new product(id, nombre, precio, categoria, imagen);
        this.productos.push(product)
    }
}

//CREAMOS CLASE MOLDE PARA LOS PRODUCTOS
export class Carrito {
    constructor(id, nombre, precio, categoria, imagen = false) {
        this.id = id;
        this.nombre = nombre;
        this.total = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}
