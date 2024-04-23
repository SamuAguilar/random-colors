const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColor() {
  let digitos = '0123456789ABCDEF';
  let colorHex = '#';

  for (let i = 0; i < 6; i++){
    let aleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[aleatorio];
  }
  return colorHex;
}

boton.addEventListener('click', function(){
  let aleatorio = generarColor();
  //actualizamos el texto.
  color.textContent = aleatorio;
  //actualizamos el color de fondo.
  document.body.style.backgroundColor = aleatorio;

});

