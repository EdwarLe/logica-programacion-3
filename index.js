const numFactorial = document.getElementById('numFactorial')
const formFactorial = document.getElementById('formFactorial')
const modalError = document.getElementById('modalError')
const total = document.getElementById('total')

formFactorial.addEventListener('submit', (e) => {
    e.preventDefault()

    const number = numFactorial.value

    if (isNaN(number)) {
        total.textContent = 0
        modalError.style.right = 0
        return modalError.textContent = "Por favor ingresa un valor correcto"
    }

    modalError.style.right = '-100%'
    let result = 1
    for (let i = 1; i <= number; i++) {
        result *= i
    }

    total.textContent = result
})

