const nombreElement = document.getElementById('nombre');
const emailElement = document.getElementById('email');
const lugarElement = document.getElementById('lugar');
const adultosElement = document.getElementById('adultos');
const menoresElement = document.getElementById('menores');
const totalPersonasElement = document.getElementById('totalPersonas');
const precioElement = document.getElementById('precio');

const nombre = localStorage.getItem('nombre');
const email = localStorage.getItem('email');
const lugar = localStorage.getItem('lugar');
const adultos = localStorage.getItem('adultos');
const menores = localStorage.getItem('menores');
const totalPersonas = parseInt(adultos) + parseInt(menores);
const precio = localStorage.getItem('precio');

nombreElement.textContent = nombre;
emailElement.textContent = email;
lugarElement.textContent = lugar;
adultosElement.textContent = adultos;
menoresElement.textContent = menores;
totalPersonasElement.textContent = totalPersonas;
precioElement.textContent = precio;
