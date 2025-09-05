// scripts.js - comportamiento simple para el sitio
document.addEventListener('DOMContentLoaded', () => {
  // quick-access buttons open pages in same tab (could be changed to modal)
  document.querySelectorAll('#quick-access .quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      window.location.href = target;
    });
  });

  // mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Contact form (simulated)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('sentMsg').classList.remove('hidden');
      setTimeout(()=>{
        document.getElementById('sentMsg').classList.add('hidden');
        form.reset();
      }, 2500);
    });
  }
});
