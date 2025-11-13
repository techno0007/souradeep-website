/**
 * Main JavaScript for Make Your Wedding Canvas
 * Advanced vanilla JS implementation
 */

(function() {
  'use strict';

  // ============================================
  // Navigation Component
  // ============================================
  class Navigation {
    constructor() {
      this.nav = document.getElementById('navigation');
      this.mobileToggle = document.getElementById('mobileMenuToggle');
      this.mobileMenu = document.getElementById('mobileMenu');
      this.navLinks = document.querySelectorAll('.nav-link, .nav-mobile-link, .footer-link');
      this.isScrolled = false;
      this.topBar = document.querySelector('.top-bar');
      
      this.init();
    }

    init() {
      this.setNavPosition();
      this.handleScroll();
      this.handleMobileMenu();
      this.handleNavigation();
      this.setupScrollListener();
      this.setupResizeListener();
    }

    setNavPosition() {
      if (this.topBar && this.nav) {
        const topBarHeight = this.topBar.offsetHeight;
        this.nav.style.top = `${topBarHeight}px`;
        
        // Update scroll padding
        document.documentElement.style.setProperty('--nav-top', `${topBarHeight}px`);
        document.documentElement.style.setProperty('--scroll-padding', `${topBarHeight + 60}px`);
      }
    }

    setupResizeListener() {
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          this.setNavPosition();
        }, 100);
      });
    }

    setupScrollListener() {
      let ticking = false;
      let lastScrollY = 0;
      
      window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
        
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }

    handleScroll() {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 50;
      
      if (shouldBeScrolled !== this.isScrolled) {
        this.isScrolled = shouldBeScrolled;
        if (this.isScrolled) {
          this.nav.classList.add('scrolled');
        } else {
          this.nav.classList.remove('scrolled');
        }
      }
    }

    handleMobileMenu() {
      if (!this.mobileToggle || !this.mobileMenu) return;
      
      this.mobileToggle.addEventListener('click', () => {
        const isActive = this.mobileMenu.classList.contains('active');
        
        if (isActive) {
          this.mobileMenu.classList.remove('active');
          this.mobileToggle.classList.remove('active');
        } else {
          this.mobileMenu.classList.add('active');
          this.mobileToggle.classList.add('active');
        }
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (
          this.mobileMenu.classList.contains('active') &&
          !this.mobileMenu.contains(e.target) &&
          !this.mobileToggle.contains(e.target)
        ) {
          this.mobileMenu.classList.remove('active');
          this.mobileToggle.classList.remove('active');
        }
      });
    }

    handleNavigation() {
      this.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const sectionId = link.getAttribute('data-section') || link.getAttribute('href')?.substring(1);
          
          if (sectionId) {
            this.scrollToSection(sectionId);
            
            // Close mobile menu if open
            if (this.mobileMenu && this.mobileMenu.classList.contains('active')) {
              this.mobileMenu.classList.remove('active');
              this.mobileToggle.classList.remove('active');
            }
          }
        });
      });
    }

    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (!section) return;

      const startY = window.pageYOffset;
      const targetY = section.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetY - startY;
      const duration = 800;
      let start = null;

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animate = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        window.scrollTo(0, startY + distance * easeInOutCubic(progress));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }

  // ============================================
  // Hero Slider Component
  // ============================================
  class HeroSlider {
    constructor() {
      this.slides = document.querySelectorAll('.hero-title');
      this.bgImages = document.querySelectorAll('.hero-bg-image');
      this.dots = document.querySelectorAll('.hero-dot');
      this.thumbnails = document.querySelectorAll('.hero-thumbnail');
      this.currentSlide = 0;
      this.autoSlideInterval = null;
      
      this.init();
    }

    init() {
      this.preloadImages();
      this.setupNavigation();
      this.startAutoSlide();
    }

    setupNavigation() {
      // Dot navigation
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          this.goToSlide(index);
        });
      });

      // Thumbnail navigation
      this.thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
          this.goToSlide(index);
        });
      });

      // Pause auto-slide on interaction
      [...this.dots, ...this.thumbnails].forEach(element => {
        element.addEventListener('mouseenter', () => {
          this.stopAutoSlide();
        });
        element.addEventListener('mouseleave', () => {
          setTimeout(() => {
            this.startAutoSlide();
          }, 6000);
        });
      });
    }

    preloadImages() {
      const imageUrls = [
        'assets/header/Header 1 copy.jpg',
        'assets/header/header 2.jpg',
        'assets/header/header 3.jpg'
      ];
      
      imageUrls.forEach((url, index) => {
        const img = new Image();
        img.onload = () => {
          console.log(`Hero image ${index + 1} loaded:`, url);
        };
        img.onerror = () => {
          console.error(`Failed to load hero image ${index + 1}:`, url);
        };
        img.src = url;
      });
    }

    startAutoSlide() {
      this.stopAutoSlide();
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 6000);
    }

    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    }

    nextSlide() {
      const next = (this.currentSlide + 1) % this.slides.length;
      this.goToSlide(next);
    }

    goToSlide(index) {
      if (index === this.currentSlide) return;
      
      // Update slides
      this.slides[this.currentSlide].classList.remove('active');
      this.slides[index].classList.add('active');
      
      // Update background images
      this.bgImages[this.currentSlide].classList.remove('active');
      this.bgImages[index].classList.add('active');
      
      // Update dots
      this.dots[this.currentSlide].classList.remove('active');
      this.dots[index].classList.add('active');
      
      // Update thumbnails
      this.thumbnails[this.currentSlide].classList.remove('active');
      this.thumbnails[index].classList.add('active');
      
      this.currentSlide = index;
      this.startAutoSlide();
    }
  }

  // ============================================
  // Contact Form Component
  // ============================================
  class ContactForm {
    constructor() {
      this.form = document.getElementById('contactForm');
      this.init();
    }

    init() {
      if (this.form) {
        this.form.addEventListener('submit', (e) => {
          e.preventDefault();
          this.handleSubmit();
        });
      }
    }

    validateForm() {
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      const email = document.getElementById('email').value.trim();

      if (!name) {
        this.showToast('Please enter your name', 'error');
        return false;
      }

      if (!phone) {
        this.showToast('Please enter your phone number', 'error');
        return false;
      }

      if (!message) {
        this.showToast('Please enter your message', 'error');
        return false;
      }

      if (email && !this.isValidEmail(email)) {
        this.showToast('Please enter a valid email address', 'error');
        return false;
      }

      return true;
    }

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    handleSubmit() {
      if (!this.validateForm()) {
        return;
      }

      const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        message: document.getElementById('message').value.trim()
      };

      this.sendToWhatsApp(formData);
      this.showToast('Message sent! Opening WhatsApp...', 'success');
      this.form.reset();
    }

    sendToWhatsApp(data) {
      const message = `Hello! I'm interested in your photography services.\n\nName: ${data.name}\nPhone: ${data.phone}${data.email ? `\nEmail: ${data.email}` : ''}\n\nMessage: ${data.message}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/917044720354?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    }

    showToast(message, type = 'info') {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('show');
      }, 10);

      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 3000);
    }
  }

  // ============================================
  // Scroll Animations Component
  // ============================================
  class ScrollAnimations {
    constructor() {
      this.init();
    }

    init() {
      this.observeServiceCards();
      this.observeGalleryItems();
      this.observeAboutSection();
    }

    observeServiceCards() {
      const cards = document.querySelectorAll('.service-card');
      if (cards.length === 0) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      cards.forEach(card => {
        observer.observe(card);
      });
    }

    observeGalleryItems() {
      const items = document.querySelectorAll('.gallery-item');
      if (items.length === 0) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      items.forEach(item => {
        observer.observe(item);
      });
    }

    observeAboutSection() {
      const aboutImage = document.querySelector('.about-image');
      const aboutContent = document.querySelector('.about-content');
      
      if (!aboutImage || !aboutContent) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === aboutImage) {
              aboutImage.classList.add('animate-in');
            }
            if (entry.target === aboutContent) {
              aboutContent.classList.add('animate-in');
            }
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      });

      observer.observe(aboutImage);
      observer.observe(aboutContent);
    }
  }

  // ============================================
  // Button Handlers Component
  // ============================================
  class ButtonHandlers {
    constructor() {
      this.init();
    }

    init() {
      // Contact Me button is now a direct call link, no handler needed
    }
  }

  // ============================================
  // Lightbox Component
  // ============================================
  class Lightbox {
    constructor() {
      this.lightbox = document.getElementById('lightbox');
      this.lightboxImage = document.getElementById('lightboxImage');
      this.lightboxClose = document.getElementById('lightboxClose');
      this.init();
    }

    init() {
      // Open lightbox on image click
      document.querySelectorAll('[data-lightbox]').forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          const imageSrc = element.getAttribute('data-lightbox');
          this.open(imageSrc);
        });
      });

      // Close lightbox
      if (this.lightboxClose) {
        this.lightboxClose.addEventListener('click', () => {
          this.close();
        });
      }

      if (this.lightbox) {
        this.lightbox.addEventListener('click', (e) => {
          if (e.target === this.lightbox) {
            this.close();
          }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && this.lightbox.classList.contains('active')) {
            this.close();
          }
        });
      }
    }

    open(imageSrc) {
      if (this.lightbox && this.lightboxImage) {
        this.lightboxImage.src = imageSrc;
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    close() {
      if (this.lightbox) {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  }

  // ============================================
  // Toast Animations CSS
  // ============================================
  function addToastAnimations() {
    const style = document.createElement('style');
    style.textContent = `
      .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 24px;
        background: #1a1a1a;
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        max-width: 300px;
      }
      
      .toast.show {
        transform: translateX(0);
        opacity: 1;
      }
      
      .toast-success {
        border-left: 4px solid #4caf50;
      }
      
      .toast-error {
        border-left: 4px solid #f44336;
      }
      
      .toast-info {
        border-left: 4px solid #2196f3;
      }
    `;
    document.head.appendChild(style);
  }

  // ============================================
  // Image Preloader
  // ============================================
  class ImagePreloader {
    constructor() {
      this.imagesToPreload = [];
      this.loadedCount = 0;
      this.totalImages = 0;
      this.init();
    }

    init() {
      // Collect all image sources from the page
      this.collectImageSources();
      
      // Preload all images
      this.preloadAllImages();
    }

    collectImageSources() {
      // Hero images
      this.imagesToPreload.push(
        'assets/header/Header 1 copy.jpg',
        'assets/header/header 2.jpg',
        'assets/header/header 3.jpg'
      );

      // About image
      this.imagesToPreload.push(
        'assets/about/499943002_1743974003135720_61152 (1).jpg'
      );

      // Service card images
      this.imagesToPreload.push(
        'assets/service/Wedding Thumbnail copy.jpg',
        'assets/service/Pre Wedding Thumbnail copy.jpg',
        'assets/service/baby.jpg',
        'assets/service/Birthday Thumbnail.jpg'
      );

      // Gallery images
      this.imagesToPreload.push(
        'assets/gallery/2 (1)-min copy.jpg',
        'assets/gallery/4-min copy.jpg',
        'assets/gallery/6-min copy.jpg',
        'assets/gallery/s 1.jpg',
        'assets/gallery/SAM_2733-min.JPG',
        'assets/gallery/SAM_2738-min.JPG',
        'assets/gallery/SAM_2741-min.JPG',
        'assets/gallery/SAM_2743-min.JPG',
        'assets/gallery/SUV_6667-min.jpg',
        'assets/gallery/SUV_6696-min.jpg',
        'assets/gallery/SUV_7049-min.jpg',
        'assets/gallery/SUV_7059-min.jpg'
      );

      this.totalImages = this.imagesToPreload.length;
    }

    preloadAllImages() {
      if (this.totalImages === 0) {
        console.log('No images to preload');
        return;
      }

      console.log(`Preloading ${this.totalImages} images...`);

      const loadPromises = this.imagesToPreload.map((src, index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          
          img.onload = () => {
            this.loadedCount++;
            resolve(src);
          };
          
          img.onerror = () => {
            console.warn(`Failed to preload image: ${src}`);
            this.loadedCount++;
            resolve(null); // Continue even if some images fail
          };
          
          // Start loading
          img.src = src;
        });
      });

      // Wait for all images to load
      Promise.all(loadPromises).then(() => {
        console.log(`Preloaded ${this.loadedCount}/${this.totalImages} images`);
        // Remove loading class from body if it exists
        document.body.classList.remove('images-loading');
        document.body.classList.add('images-loaded');
      });
    }
  }

  // ============================================
  // Initialize Application
  // ============================================
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    // Add toast animations
    addToastAnimations();
    
    // Preload all images first
    new ImagePreloader();
    
    // Initialize components
    new Navigation();
    new HeroSlider();
    new ContactForm();
    new ScrollAnimations();
    new ButtonHandlers();
    new Lightbox();
    
    // Log initialization
    console.log('Make Your Wedding Canvas - Initialized');
  }

  // Start the application
  init();

})();
