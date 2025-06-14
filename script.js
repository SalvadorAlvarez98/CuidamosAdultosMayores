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



let testimonialIndex = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.testimonial-prev');
const nextBtn = document.querySelector('.testimonial-next');

function showTestimonial(index) {
  testimonialSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
  showTestimonial(testimonialIndex);
}

function prevTestimonial() {
  testimonialIndex = (testimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
  showTestimonial(testimonialIndex);
}

prevBtn.addEventListener('click', prevTestimonial);
nextBtn.addEventListener('click', nextTestimonial);

// Cambio automático cada 5 segundos
setInterval(nextTestimonial, 5000);


document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  const testimonialSlidesArray = Array.from(document.querySelectorAll('.testimonial-slide'));

  let currentLightboxIndex = 0;

  testimonialSlidesArray.forEach((slide, index) => {
    const img = slide.querySelector('img');
    const caption = slide.querySelector('.caption')?.textContent || "";
    img.style.cursor = "pointer"; // 🔥 Esto es importante visualmente
    img.addEventListener('click', () => {
      currentLightboxIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    const slide = testimonialSlidesArray[currentLightboxIndex];
    const img = slide.querySelector('img');
    const caption = slide.querySelector('.caption')?.textContent || "";

    lightboxImg.src = img.src;
    lightboxCaption.textContent = caption;
    lightbox.classList.remove('hidden');
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
  }

  function changeLightboxImage(offset) {
    currentLightboxIndex = (currentLightboxIndex + offset + testimonialSlidesArray.length) % testimonialSlidesArray.length;
    openLightbox();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => changeLightboxImage(-1));
  lightboxNext.addEventListener('click', () => changeLightboxImage(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Navegación con teclado (opcional)
  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === "ArrowLeft") changeLightboxImage(-1);
    else if (e.key === "ArrowRight") changeLightboxImage(1);
    else if (e.key === "Escape") closeLightbox();
  });
});
