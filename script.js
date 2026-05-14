const promociones = [
  {
    imagen: "img/cafe.jpg",
    titulo: "Promo Café",
    descripcion: "Disfrutá tu café favorito al mejor precio."
  },
  {
    imagen: "img/medialunas.jpg",
    titulo: "Café + Medialunas",
    descripcion: "La combinación ideal para arrancar el día."
  },
  {
    imagen: "img/combo.jpg",
    titulo: "Combo Especial",
    descripcion: "Promoción por tiempo limitado."
  },
  {
    imagen: "img/promo-especial.jpg",
    titulo: "Promo de la Semana",
    descripcion: "Consultá nuestras ofertas vigentes en tienda."
  }
];

const tiempoPorPromo = 7000;

let indiceActual = 0;
let intervalo;

const promoImage = document.getElementById("promoImage");
const promoTitle = document.getElementById("promoTitle");
const promoDescription = document.getElementById("promoDescription");
const currentSlide = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");
const progress = document.getElementById("progress");
const currentDate = document.getElementById("currentDate");
const slide = document.querySelector(".slide");

totalSlides.textContent = promociones.length;

function mostrarFecha() {
  const fecha = new Date();

  const opciones = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  currentDate.textContent = fecha.toLocaleDateString("es-AR", opciones);
}

function mostrarPromocion() {
  const promo = promociones[indiceActual];

  slide.classList.add("fade-out");

  setTimeout(() => {
    promoImage.src = promo.imagen;
    promoTitle.textContent = promo.titulo;
    promoDescription.textContent = promo.descripcion;
    currentSlide.textContent = indiceActual + 1;

    reiniciarBarraProgreso();

    slide.classList.remove("fade-out");
  }, 400);
}

function siguientePromocion() {
  indiceActual++;

  if (indiceActual >= promociones.length) {
    indiceActual = 0;
  }

  mostrarPromocion();
}

function reiniciarBarraProgreso() {
  progress.style.transition = "none";
  progress.style.width = "0%";

  setTimeout(() => {
    progress.style.transition = `width ${tiempoPorPromo}ms linear`;
    progress.style.width = "100%";
  }, 50);
}

function iniciarSlider() {
  mostrarFecha();
  mostrarPromocion();

  intervalo = setInterval(() => {
    siguientePromocion();
  }, tiempoPorPromo);
}

iniciarSlider();