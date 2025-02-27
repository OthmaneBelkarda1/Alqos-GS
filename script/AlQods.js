//menu
// Sélectionner les éléments du DOM
const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const closeMenuBtn = document.querySelector(".close-menu")

// Fonction pour ouvrir le menu mobile
function openMobileMenu() {
  mobileMenu.classList.add("active")
  document.body.style.overflow = "hidden" // Empêcher le défilement de la page
}

// Fonction pour fermer le menu mobile
function closeMobileMenu() {
  mobileMenu.classList.remove("active")
  document.body.style.overflow = "" // Réactiver le défilement de la page
}

// Ajouter les écouteurs d'événements
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", openMobileMenu)
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", closeMobileMenu)
}

// Fermer le menu mobile lorsqu'un lien est cliqué
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a")
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu)
})

// Animation pour la section du directeur
document.addEventListener("DOMContentLoaded", () => {
  const directorContent = document.querySelector(".director-content")
  const directorImage = document.querySelector(".director-image-container")

  // Fonction pour vérifier si un élément est visible dans la fenêtre
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0
  }

  // Fonction pour ajouter la classe 'visible' aux éléments visibles
  function handleScroll() {
    if (directorContent && isElementInViewport(directorContent)) {
      directorContent.classList.add("visible")
    }

    if (directorImage && isElementInViewport(directorImage)) {
      directorImage.classList.add("visible")
    }
  }

  // Vérifier la visibilité au chargement initial
  handleScroll()

  // Ajouter un écouteur d'événement pour le défilement
  window.addEventListener("scroll", handleScroll)
})


 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });