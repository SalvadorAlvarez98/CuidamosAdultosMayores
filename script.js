// 🌙/☀️ Modo oscuro
const toggleThemeBtn = document.getElementById("toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 🎞️ Carruseles múltiples
function iniciarCarrusel(selector) {
  let index = 0;
  const slides = document.querySelectorAll(selector + " .slide");
  if (slides.length === 0) return;

  function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  }

  showSlide(); // Mostrar la primera
  setInterval(showSlide, 2000);
}

// Iniciar ambos carruseles si existen
iniciarCarrusel(".carousel.only-mobile");
iniciarCarrusel(".carousel.only-desktop");
