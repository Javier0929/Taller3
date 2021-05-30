const horaToSegundo = () => {
    // •Transforme la hora actual en segundos.
    let hora = new Date();
    let segundo = hora.getHours() * 3600;
    document.getElementById("ejer1").innerHTML = segundo + " segundos";
}

const areaTriangulo = () => {
    // •Calcular el área de un triángulo, que es igual a: (base * altura)/2.
    let formulario = document.forms["form-ejer2"];
    let base = prompt("Ingrese la base");
    let altura = prompt("Ingrese la altura");
    document.getElementById("ejer2").innerHTML = ((altura * base) / 2) + " metros m²";
}

const raizImpar = () => {
    // •Calcule la raíz cuadrada de un número impar y muestre el resultado con 3 dígitos.

    let numero = prompt("Ingrese el numero");
    if ((numero % 2) == 0) {
        document.getElementById("ejer3").innerHTML = `${numero} es un par, ingrese un numero impar`;
    } else {
        let resultado = Math.sqrt(numero)
        document.getElementById("ejer3").innerHTML = `raiz de ${numero} es = ${resultado.toFixed(3)}`;
    }
}

const longitudCadena = () => {
    // •Ingresar una cadena de texto y mostrar la longitud de la cadena.
    let cadena = prompt("Ingrese una cadena para contar los caracteres");
    document.getElementById("ejer4").innerHTML = `${cadena} tiene ${cadena.length} caracteres`;
}

const concatenarArray = () => {
    // •Concatenar los arrays:  array1(Lunes, Martes, Miércoles, Jueves, Viernes) y array 2 (Sábado, Domingo)
    let array1 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    let array2 = ["Sábado", "Domingo"];
    let arrayCompleto = array1.concat(array2);
    document.getElementById("ejer5").innerHTML = arrayCompleto;
}

const versionNavegador = () => {
    // •Mostrar la versión del navegador.
    document.getElementById("ejer6").innerHTML = navigator.userAgent;
}

const mostrarAnchoAltura = () => {
    // •Mostrar el ancho y la altura de la pantalla.
    document.getElementById("ejer7").innerHTML = `${screen.width} ancho de pantalla  x ${screen.height} largo de pantalla`;
}

const imprimirPantalla = () => {
    // •Imprimir la página.
    window.print();
}