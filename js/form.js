(function(){
  function showToast(text){
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = text;
    document.body.appendChild(toast);
    setTimeout(()=>toast.classList.add('show'),100);
    setTimeout(()=>toast.classList.remove('show'),3000);
    setTimeout(()=>toast.remove(),3500);
  }

  function saveVolunteer(data){
    const list = JSON.parse(localStorage.getItem('volunteers')||'[]');
    list.push(data);
    localStorage.setItem('volunteers', JSON.stringify(list));
  }

  function attachFormHandlers(){
    const form = document.getElementById('volunteerForm');
    if(!form) return;
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const telefone = form.telefone.value.trim();
      const area = form.area.value.trim();
      if(!nome || !email || !telefone || !area){
        showToast('Por favor, preencha todos os campos.');
        return;
      }
      const data = {nome, email, telefone, area, date: new Date().toLocaleString()};
      saveVolunteer(data);
      form.reset();
      showToast('Cadastro enviado com sucesso! 💚');
    });
  }

  window.attachFormHandlers = attachFormHandlers;
})();
