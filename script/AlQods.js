 // Mobile menu functionality
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const closeMenuBtn = document.querySelector('.close-menu');
 const mobileMenu = document.querySelector('.mobile-menu');

 mobileMenuBtn.addEventListener('click', () => {
     mobileMenu.classList.add('active');
 });

 closeMenuBtn.addEventListener('click', () => {
     mobileMenu.classList.remove('active');
 });

 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });