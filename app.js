//VALUES
let precioMochila = document.getElementById('precio-mochila');
let precioZapatos = document.getElementById('precio-zapatos');

let cantidadMochila = document.getElementById('cantidad-mochilla');
let cantidadZapato = document.getElementById('cantidad-zapatos');

//BTNS
const menosMochilas = document.getElementById('menos-mochila');
const masMochilas = document.getElementById('mas-mochila');

const menosZapatos = document.getElementById('menos-zapatos');
const masZapatos = document.getElementById('mas-zapatos');

let total = document.getElementById('total');

//EventListeners
menosMochilas.addEventListener('click', restarMochilas)
masMochilas.addEventListener('click', sumarMochilas)

menosZapatos.addEventListener('click', restarZapatos)
masZapatos.addEventListener('click', sumarZapatos)


function restarMochilas () {
  cantidadMochila.innerhtml = cantidadMochila.textContent--
  precioMochila.textContent

//Evita 0 
  if(cantidadMochila.textContent == 0){
    cantidadMochila.textContent = 1
  }

  totalProducto(cantidadMochila, precioMochila)
}

function sumarMochilas () {
  cantidadMochila.innerhtml = cantidadMochila.textContent++;
  precioMochila.textContent

  totalProducto(cantidadMochila, precioMochila)
}


function restarZapatos () {
  cantidadZapato.innerhtml = cantidadZapato.textContent--;
  precioZapatos.textContent

//Evita 0
  if(cantidadZapato.textContent == 0){
    cantidadZapato.textContent = 1
  }

  totalProducto(cantidadZapato, precioZapatos)
}

function sumarZapatos () {
  cantidadZapato.innerhtml = cantidadZapato.textContent++;
  precioZapatos.textContent

  totalProducto(cantidadZapato, precioZapatos)
}


//Realiza la multiplicacion del valor por la cantidad
function totalProducto (cantidad, valor) {

//Quita el signo de dolar en el precio
  let valorSinSigno = valor.textContent.replace("$", "")

//Realiza la operacion matemática
  total.textContent = cantidad.textContent * valorSinSigno + 19;

//Total.textContext es el total en texto
//Redondea a 2 decimales
  total.textContent = `$ ${(Math.round(total.textContent *100)/100)}`

}

