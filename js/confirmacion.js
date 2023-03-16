const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
 event.preventDefault();
  
  const adultos = parseInt(document.getElementById('adultos').value);
  const menores = parseInt(document.getElementById('menores').value);
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const lugar = localStorage.getItem('lugar');
  
  const totalPersonas = adultos + menores;
  
  if (adultos < 1 || adultos > 4 || menores < 0 || menores > 4) {
    alert('Ingresa una cantidad válida de personas');
    return;
  }

  if (adultos === 1 && menores > 4) {
    alert('Lo siento, no es posible reservar más de 4 menores si hay 1 adulto');
    return;
  }
  
  if (adultos === 2 && menores > 3) {
    alert('Lo siento, no es posible reservar más de 3 menores si hay 2 adultos');
    return;
  }
  
  if (adultos === 3 && menores > 2) {
    alert('Lo siento, no es posible reservar más de 2 menores si hay 3 adultos');
    return;
  }
  
  if (adultos === 4 && menores > 0) {
    alert('Lo siento, no es posible reservar ningún menor si hay 4 adultos');
    return;
  }

  const edadesMenores = [];
  for (let i = 1; i <= menores; i++) {
    const edad = parseInt(prompt(`Ingresa la edad del menor ${i}:`));
    if (edad >= 18) {
      alert('Solo se permiten menores de 18 años');
      return;
    }
    edadesMenores.push(edad);
  }

  const precio = calcularPrecio(adultos, menores, lugar);
  localStorage.setItem('precio', precio);
  
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('email', email);
  localStorage.setItem('adultos', adultos);
  localStorage.setItem('menores', menores);
  localStorage.setItem('edadesMenores', JSON.stringify(edadesMenores));
  
  window.location.href = 'resumen.html';
});

function calcularPrecio(adultos, menores, lugar) {
  let precio = 0;
  
  switch (lugar) {
    case 'lugar1':
      precio = adultos * 100 + menores * 50;
      break;
    case 'lugar2':
      precio = adultos * 150 + menores * 75;
      break;
    case 'lugar3':
      precio = adultos * 200 + menores * 100;
      break;
  }
  
  return precio;
}
