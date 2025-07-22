   // Letter randomization animation for navbar
        document.querySelectorAll('.word-animate').forEach(el => {
            const originalText = el.dataset.word;
            const originalLetters = originalText.split('');
            el.innerHTML = '';
            
            originalLetters.forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.classList.add('letter');
                el.appendChild(span);
            });
            
            el.addEventListener('mouseenter', () => {
                const spans = el.querySelectorAll('.letter');
                spans.forEach((span, i) => {
                    const originalChar = originalLetters[i];
                    const randomChar = getRandomLetter(originalChar);
                    setTimeout(() => {
                        span.textContent = randomChar;
                        setTimeout(() => {
                            span.textContent = originalChar;
                        }, 300);
                    }, i * 100);
                });
            });
            
            function getRandomLetter(exclude) {
                const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                let rand = letters[Math.floor(Math.random() * letters.length)];
                while (rand === exclude) {
                    rand = letters[Math.floor(Math.random() * letters.length)];
                }
                return rand;
            }
        });

        // Add some interactive effects to spheres
        document.querySelectorAll('.sphere').forEach((sphere, index) => {
            sphere.addEventListener('mouseenter', () => {
                sphere.style.transform = 'scale(1.1)';
                sphere.style.transition = 'transform 0.3s ease';
            });
            
            sphere.addEventListener('mouseleave', () => {
                sphere.style.transform = 'scale(1)';
            });
        });

        // Email icon click effect
        document.querySelector('.email-icon').addEventListener('click', () => {
            window.location.href = 'mailto:contact@umachina.com';
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add parallax effect to the main logo
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const logoContainer = document.querySelector('.logo-container');
            if (logoContainer) {
                logoContainer.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        });