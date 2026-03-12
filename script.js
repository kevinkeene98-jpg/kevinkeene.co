// Scroll-triggered fade-in animations
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.project-card, .timeline-item, .section-title, .section-subtitle, ' +
    '.hero-greeting, .hero-name, .hero-tagline, .hero-description, .hero-cta, ' +
    '.connect-title, .connect-desc, .connect-links'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach(el => observer.observe(el));
});
