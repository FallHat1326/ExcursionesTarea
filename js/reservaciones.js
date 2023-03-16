function reservar(lugar) {
	localStorage.setItem('lugar', lugar);
	window.location.href = 'confirmacion.html';
  }