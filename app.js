const cantidad =  document.querySelector('#cantidad')
const concepto =  document.querySelector('#concepto')
const agregar =  document.querySelector('#agregar')
const total =  document.querySelector('#total')
const lista =  document.querySelector('#lista')
let nuevoValor = 0

const anotar = () => {
  if (cantidad.value != '' && concepto.value != '') {
    let nuevo = document.createElement('li')
    nuevo.innerText = `${cantidad.value} ${concepto.value}`
    lista.appendChild(nuevo)
    sumar()
    cantidad.value = ''
    concepto.value = ''
  }
}

const sumar = () => {
  nuevoValor += Number(cantidad.value)
  total.innerText = nuevoValor
}

agregar.addEventListener('click', anotar)
