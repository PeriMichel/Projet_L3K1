// Récupère tous les éléments de slide
const slides = document.querySelectorAll('.slide');
// Récupère tous les boutons de navigation
const slideNavBouttons = document.querySelectorAll('.slide-nav button');

// Définit l'indice de la slide courante
let slideCourant = 0;

// Fonction pour afficher la slide courante
function afficheSlide() {
  // Masque toutes les slides
  slides.forEach(slide => slide.classList.remove('active'));
  // Affiche la slide courante
  slides[slideCourant].classList.add('active');
  // Met à jour le bouton de navigation actif
  slideNavBouttons.forEach(button => button.classList.remove('active'));
  slideNavBouttons[slideCourant].classList.add('active');
}

// Fonction pour passer à la slide suivante
function slideSuiv() {
  // Met à jour l'indice de la slide courante
  slideCourant = (slideCourant + 1) % slides.length;
  // Affiche la nouvelle slide
  afficheSlide();
}

// Définit un intervalle pour passer à la slide suivante toutes les 3 secondes
let slideIntervalle = setInterval(slideSuiv, 3000);

// Ajoute des écouteurs d'événements aux boutons de navigation
slideNavBouttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Définit la slide courante à l'indice du bouton cliqué
    slideCourant = index;
    // Affiche la nouvelle slide
    afficheSlide();
    // Réinitialise l'intervalle de la slide
    clearInterval(slideIntervalle);
    slideIntervalle = setInterval(slideSuiv, 3000);
  });
});
