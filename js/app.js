// Bienevenida

alert("Bienvenido a Infinity")
/*Inicia el programa*/
let comando;
comando = prompt('Ingrese el comando:\n\n1- Salir\n2- Ingrese su usuario\n');
while (comando != '1') {
    nombre = prompt('Ingrese su usuario:');
    if (nombre == null || nombre == '') {
        nombre
    }

    else {
        alert(`Se registro como: ${nombre}`);
        break;
    }

}
document.getElementById('user').innerHTML = `${nombre}`;
console.log(`Usuario logueado como: ${nombre}`);