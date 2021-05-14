//Conversor lbs a kg
const boton = document.getElementById('calcular')
const input = document.getElementById('input')
const resultado = document.getElementById('resultado')
const cambiarModo = document.getElementById('mode')

boton.addEventListener('click', () => {
    const peso = input.value
    const valoresAceptados = /^[0-9]+$/
    if (peso.match(valoresAceptados)){
        resultado.classList.remove('error')
        convertir(peso)
    } else{
        resultado.classList.add('error')
        resultado.innerHTML = "Por favor ingrese un valor numerico."
    }
})

let convertir = pesoEnLbs => {
    let conversion = (pesoEnLbs * 0.453592).toFixed(2)
    resultado.innerHTML = (conversion + " kg")
}

cambiarModo.addEventListener('click', () => {
    console.log(1323)
})



