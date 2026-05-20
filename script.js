const promociones = [
  "img/imagen1.jpg",
  "img/imagen2.jpg",
  "img/imagen3.jpg",
  "img/imagen4.jpg"
];

let indiceActual = 0;
const promoImage = document.getElementById("promoImage");

function mostrarPromocion() {
  promoImage.src = promociones[indiceActual];

  indiceActual++;

  if (indiceActual >= promociones.length) {
    indiceActual = 0;
  }
}

mostrarPromocion();

setInterval(mostrarPromocion, 10000);