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

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const hero = document.querySelector('.hero');
            const scrolled = window.scrollY;
            hero.style.backgroundPositionY = scrolled * 0.2 + 'px';
        });
        // Parallax effect for director section
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.director-content, .director-image-container').forEach(el => {
            observer.observe(el);
        });
        function handleSubmit(event) {
            event.preventDefault();
            
            const submitBtn = event.target.querySelector('.submit-btn');
            const successMessage = document.getElementById('successMessage');
            
            submitBtn.innerHTML = 'Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                successMessage.style.display = 'block';
                submitBtn.innerHTML = 'Envoyé avec succès !';
                submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                
                setTimeout(() => {
                    event.target.reset();
                    submitBtn.innerHTML = 'Envoyer la demande d`inscription';
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
                    successMessage.style.display = 'none';
                }, 3000);
            }, 1500);

            return false;
        }