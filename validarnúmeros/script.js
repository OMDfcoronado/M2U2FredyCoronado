function validarNumeros() {
    let numeros = [];

    num_a = document.getElementById('inline-num-a')
    num_b = document.getElementById('inline-num-b')
    num_c = document.getElementById('inline-num-c')
    num_d = document.getElementById('inline-num-d')

    numeros = [num_a.value, num_b.value, num_c.value, num_d.value]

    for (let num of numeros) {
        if (num.split('.').length > 1) {
            return alert("El número " + num + " no es entero.")
        }
        let result = numeros.filter(numero => numero == num);
        if (result.length > 1) {
            return alert("El número " + num + " se encuentra repetido.")
        }
    }

    numeros.forEach(num => parseInt(num))

    maxi = Math.max(...numeros)
    mini = Math.min(...numeros)

    container = document.getElementById('main-container')
    let resultado = document.createElement("h2");
    resultado.className = "text-3xl font-bold underline text-center"
    resultado.textContent = "El valor Máximo es: " + maxi + ". El valor Mínimo es: " + mini + "."
    container.appendChild(resultado)
}

var boton = document.getElementById("b_validar");
boton.addEventListener('click', validarNumeros)