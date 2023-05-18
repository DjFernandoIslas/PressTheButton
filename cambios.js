// Seleccionar el botón y el contenedor principal
var boton = document.querySelector('.rainbow');
var mainContainer = document.querySelector('.main-container');

// Agregar un evento de escucha al botón
boton.addEventListener('click', function() {
  // Eliminar el botón y todo el contenido del contenedor principal
  boton.remove();
  mainContainer.remove();

  // Crear el elemento h1 y la imagen GIF
  var h1 = document.createElement('h1');
  h1.textContent = 'THE GAME';
  h1.style.textAlign = 'center';

  var imagen = document.createElement('img');
  imagen.src = './img/hola-troll.gif';
  imagen.style.display = 'block';
  imagen.style.margin = '0 auto';

  // Crear el elemento de audio y establecer la fuente de la música
  var audio = document.createElement('audio');
  audio.src = './audio/ozunabassboosted.mp3';
  audio.autoplay = true;

  // Agregar el h1, la imagen y el audio al body
  document.body.appendChild(h1);
  document.body.appendChild(imagen);
  document.body.appendChild(audio);
});