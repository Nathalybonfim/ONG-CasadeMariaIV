document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('[data-link]');
  const content = document.getElementById('content');
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  function setActive(linkKey){
    document.querySelectorAll('[data-link]').forEach(a =>
      a.classList.toggle('active', a.getAttribute('data-link') === linkKey)
    );
  }

  function render(key){
    let html = '';
    switch(key){
      case 'index': html = renderIndex(); break;
      case 'projetos': html = renderProjects(); break;
      case 'depoimentos': html = renderTestimonials(); break;
      case 'doacoes': html = renderDonations(); break;
      case 'cadastro': html = renderVolunteer(); break;
      case 'galeria': html = renderGallery(); break;
      case 'contato': html = renderContact(); break;
      default: html = renderIndex();
    }
    content.innerHTML = html;
    content.focus();
    setActive(key);
    attachFormHandlers();
  }

  links.forEach(a => {
    a.addEventListener('click', function(e){
      e.preventDefault();
      const key = this.getAttribute('data-link');
      render(key);
      if(window.innerWidth <= 840 && navList) navList.style.display = 'none';
      if(navToggle) navToggle.setAttribute('aria-expanded','false');
    });
  });

  if(navToggle){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.style.display = expanded ? 'none' : 'flex';
      if(!expanded) navList.querySelector('a')?.focus();
    });
  }

  render('index');
  const ano = new Date().getFullYear();
  document.getElementById('anoAtual').textContent = ano;
});
