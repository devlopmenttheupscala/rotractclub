document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = 'Welcome to Our Organization';
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }

        typeWriter();
    }

    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const timelineItems = document.querySelectorAll('.timeline-item');

    function revealTimeline() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 100) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealTimeline);
    revealTimeline();

    const carouselTrack = document.getElementById('valuesCarousel');
    const prevBtn = document.getElementById('prevValue');
    const nextBtn = document.getElementById('nextValue');

    if (carouselTrack && prevBtn && nextBtn) {
        let currentIndex = 0;
        const cards = carouselTrack.querySelectorAll('.carousel-card');
        const cardWidth = 324;

        function updateCarousel() {
            carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 3) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filter === 'all') {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    const category = item.getAttribute('data-category');
                    if (category === filter) {
                        item.classList.remove('hidden');
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.classList.add('hidden');
                        }, 300);
                    }
                }
            });
        });
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxDuration = document.getElementById('lightboxDuration');
    const lightboxLocation = document.getElementById('lightboxLocation');
    const lightboxImpact = document.getElementById('lightboxImpact');
    const lightboxClose = document.querySelector('.lightbox-close');

    const projectData = {
        '1': {
            title: 'Education Initiative',
            description: 'Our comprehensive education initiative has transformed the lives of over 2,000 students across multiple regions. We provided quality educational resources, trained teachers, and created sustainable learning environments that continue to benefit communities.',
            duration: '2020-2023',
            location: 'Multiple Regions',
            impact: '2,000+ Students'
        },
        '2': {
            title: 'Healthcare Program',
            description: 'Our ongoing healthcare program focuses on providing accessible medical services to underserved communities. We have established mobile clinics, trained healthcare workers, and partnered with local hospitals to ensure continuous care.',
            duration: '2022-Present',
            location: 'Rural Areas',
            impact: '15,000+ Patients'
        },
        '3': {
            title: 'Green Earth Initiative',
            description: 'This environmental project successfully planted over 10,000 trees and restored natural habitats. Our team worked with local communities to create sustainable ecosystems and raise awareness about environmental conservation.',
            duration: '2019-2022',
            location: 'National Parks',
            impact: '10,000+ Trees Planted'
        },
        '4': {
            title: 'Tech Skills Training',
            description: 'Bridging the digital divide through comprehensive technology training programs. We provide courses in coding, digital literacy, and technical skills to empower individuals for the modern workforce.',
            duration: '2021-Present',
            location: 'Urban Centers',
            impact: '3,500+ Trained'
        },
        '5': {
            title: 'Community Center',
            description: 'Built a state-of-the-art community facility that serves as a hub for education, recreation, and social services. The center hosts various programs and events that bring the community together.',
            duration: '2018-2021',
            location: 'City Center',
            impact: '5,000+ Members'
        },
        '6': {
            title: 'Youth Leadership Program',
            description: 'Developing future leaders through mentorship, skill development, and leadership training. Our program focuses on empowering young people to become change-makers in their communities.',
            duration: '2020-Present',
            location: 'Nationwide',
            impact: '1,200+ Youth Leaders'
        }
    };

    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = button.getAttribute('data-project');
            const data = projectData[projectId];

            if (data) {
                const img = button.closest('.project-item').querySelector('img');
                lightboxImg.src = img.src;
                lightboxTitle.textContent = data.title;
                lightboxDesc.textContent = data.description;
                lightboxDuration.textContent = data.duration;
                lightboxLocation.textContent = data.location;
                lightboxImpact.textContent = data.impact;

                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    const statNumbers = document.querySelectorAll('.stat-number');

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString() + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    function checkStatsInView() {
        statNumbers.forEach(stat => {
            const statTop = stat.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (statTop < windowHeight - 100 && !stat.classList.contains('counted')) {
                stat.classList.add('counted');
                animateCounter(stat);
            }
        });
    }

    window.addEventListener('scroll', checkStatsInView);
    checkStatsInView();

    const boardSlider = document.getElementById('boardSlider');
    const boardPrev = document.getElementById('boardPrev');
    const boardNext = document.getElementById('boardNext');

    if (boardSlider && boardPrev && boardNext) {
        let currentSlide = 0;
        const slides = boardSlider.querySelectorAll('.board-slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        showSlide(currentSlide);

        boardNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        boardPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);

            contactForm.reset();
        });
    }
});