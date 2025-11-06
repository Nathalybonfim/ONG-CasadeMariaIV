document.addEventListener('DOMContentLoaded', () => {
  const contrastToggle = document.getElementById('contrastToggle');
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  contrastToggle.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navList.style.display = expanded ? 'none' : 'flex';
  });
});
