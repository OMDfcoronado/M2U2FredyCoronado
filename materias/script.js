
function validarNombre() {
    let nombre;
    let total_a;
    let boton;
    nombre = document.getElementById('inline-full-name')
    if (!isNaN(parseInt(nombre.value)) || nombre.value == '') {
        return mostarError("No es un nombre valido.")
    }
    if (nombre.value.split(' ').length > 2) {
        return mostarError("El nombre tiene más de 2 palabras.")
    }

    total_a = document.getElementById('inline-total-a')
    total_a.removeAttribute('readonly')
    nombre.setAttribute('readonly', '')
    boton = document.getElementById("b_validar")
    boton.removeEventListener('click', validarNombre)
    boton.addEventListener('click', validarCantidad)
}

function validarCantidad() {
    let total_a;
    let boton;
    total_a = document.getElementById('inline-total-a')
    if (total_a.value < 1 || total_a.value > 7) {
        return mostarError("No es una cantidad adecuada.")
    }

    container = document.getElementById('cont-valores')
    for (i = 1; i <= total_a.value; i++) {
        var input = document.createElement("input");
        input.type = "number"
        input.className = "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        input.id = "inline-valor-" + i
        input.placeholder = 10000
        container.appendChild(input)
    }

    total_a.setAttribute('readonly', '')
    boton = document.getElementById("b_validar")
    boton.removeEventListener('click', validarCantidad)
    boton.addEventListener('click', validarValores)

}

function validarValores() {
    let total_a;
    let boton;
    let valores = [];
    let sumValores = 0;
    total_a = document.getElementById('inline-total-a')

    for (i = 1; i <= total_a.value; i++) {
        id = "inline-valor-" + i
        input = document.getElementById(id)
        valores.push(input)
        if (input.value < 10000 || input.value > 100000) {
            return mostarError("Valor de la materia " + i + " no es valido.")
        }
        sumValores += parseInt(input.value)
    }

    console.log(sumValores)

    valores.forEach(element => element.setAttribute('readonly', ''))

    boton = document.getElementById("b_validar")
    boton.removeEventListener('click', validarValores)
    boton.addEventListener('click', calcular(sumValores))
    boton.textContent = 'Calcular'
}

function calcular(sumValores) {

    let papeleria = 20000;
    let carnet = 8000;
    let matricula = 0;

    matricula = sumValores * 0.8;
    matricula = matricula + papeleria + carnet;

    container = document.getElementById('main-container')
    var resultado = document.createElement("h2");
    resultado.className = "text-3xl font-bold underline text-center"
    resultado.textContent = "Tu matricula es de: " + matricula + "pesos"
    container.appendChild(resultado)
}

function mostarError(msg) {
    alert(msg)
}

var boton = document.getElementById("b_validar");
boton.addEventListener('click', validarNombre)