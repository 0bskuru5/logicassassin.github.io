// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
  
      gsap.to(window, {
        scrollTo: {
          y: target,
          autoKill: false
        },
        duration: 1,
        ease: "power2.inOut"
      });
    });
  });
  
  // Scroll animations
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from('.fade-in', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.fade-in',
      start: 'top 80%',
      end: 'bottom 50%',
      toggleActions: 'play none none reset'
    }
  });
  
  gsap.from('.project', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.project',
      start: 'top 80%',
      end: 'bottom 50%',
      toggleActions: 'play none none reset'
    }
  });
  