
function validarNombre() {
    let nombre;
    nombre = document.getElementById('inline-full-name')
    if (!isNaN(parseInt(nombre.value)) || nombre.value == '') {
        return mostarError("No es un nombre valido.")
    }
    if (nombre.value.split(' ').length > 2) {
        return mostarError("El nombre tiene más de 2 palabras.")
    }

    console.log(nombre.value.split(' ').length)
}

function mostarError(msg) {
    alert(msg)
}

var boton = document.getElementById("b_validar");
boton.addEventListener('click', validarNombre)