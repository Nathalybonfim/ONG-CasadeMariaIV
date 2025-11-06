/* form.js - validação simples, localStorage e feedback acessível */

(function(){
  function showToast(text){
    const box = document.createElement('div');
    box.className = 'toast';
    box.setAttribute('role','status');
    box.style.position='fixed'; box.style.right='20px'; box.style.bottom='20px';
    box.style.padding='12px 16px'; box.style.background='var(--card)'; box.style.borderRadius='8px';
    box.style.boxShadow='0 8px 24px rgba(18,30,50,0.12)'; box.style.zIndex=9999;
    box.textContent = text;
    document.body.appendChild(box);
    setTimeout(()=>box.remove(),3800);
  }

  function generatePixKey(){
    const parts = ['pix','cm','doar','casamaria'];
    return parts[Math.floor(Math.random()*parts.length)] + '@' + Math.random().toString(36).slice(2,9) + '.ong';
  }

  window.attachFormHandlers = function(){
    // Testimonial
    const tform = document.getElementById('testimonial-form');
    if(tform && !tform._attached){
      tform._attached = true;
      tform.addEventListener('submit', function(e){
        e.preventDefault();
        const name = tform.tnome.value.trim();
        const text = tform.ttexto.value.trim();
        const role = tform.trole.value.trim();
        if(name.length<3 || text.length<6){ showToast('Preencha nome (min 3) e depoimento (min 6).'); return; }
        const arr = JSON.parse(localStorage.getItem('depoimentos') || '[]');
        arr.unshift({ author: name, text: text, role: role, when: new Date().toISOString() });
        localStorage.setItem('depoimentos', JSON.stringify(arr));
        showToast('Depoimento enviado — obrigado!');
        tform.reset();
        // re-render depoimentos (se estiver na página)
        if(typeof renderTestimonials === 'function'){
          document.getElementById('testimonials-grid').innerHTML = '';
          const newHtml = JSON.parse(localStorage.getItem('depoimentos') || '[]').map(d => {
            return `<div class="testimonial" role="article" aria-label="Depoimento de ${d.author}"><strong>${d.author}</strong><div class="small">${d.role||''}</div><p>${d.text}</p></div>`;
          }).join('');
          document.getElementById('testimonials-grid').innerHTML = newHtml || '<p class="small">Nenhum depoimento ainda.</p>';
        }
      });
    }

    // Donation
    const dform = document.getElementById('donation-form');
    if(dform && !dform._attached){
      dform._attached = true;
      dform.addEventListener('submit', function(e){
        e.preventDefault();
        const nome = dform.dnome.value.trim();
        const val = parseFloat((dform.dvalor.value||'').replace(',','.')) || 0;
        const tipo = dform.dtipo.value;
        if(!nome || val<=0){ showToast('Preencha nome e valor válido.'); return; }
        const chave = generatePixKey();
        const arr = JSON.parse(localStorage.getItem('doacoes') || '[]');
        arr.push({ nome, valor: val, tipo, pix: chave, quando: new Date().toISOString() });
        localStorage.setItem('doacoes', JSON.stringify(arr));
        showModal(`<h3>Chave PIX gerada</h3><p><strong>Chave:</strong> <code>${chave}</code></p><p><strong>Valor:</strong> R$ ${val.toFixed(2)}</p>`);
        dform.reset();
      });
    }

    // Volunteer
    const vform = document.getElementById('volunteer-form');
    if(vform && !vform._attached){
      vform._attached = true;
      vform.addEventListener('submit', function(e){
        e.preventDefault();
        const nome = vform.nome.value.trim();
        const email = vform.email.value.trim();
        const mensagem = vform.mensagem.value.trim();
        if(nome.length<3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || mensagem.length<6){
          showToast('Preencha nome, email válido e mensagem (min 6).'); return;
        }
        const arr = JSON.parse(localStorage.getItem('cadastros_voluntarios') || '[]');
        arr.push({ nome, email, telefone: vform.telefone?vform.telefone.value.trim():'', interesse: vform.interesse?vform.interesse.value:'', mensagem, criadoEm: new Date().toISOString() });
        localStorage.setItem('cadastros_voluntarios', JSON.stringify(arr));
        showToast('Cadastro recebido. Obrigado!');
        vform.reset();
      });
    }

    // Contact form
    const cform = document.getElementById('contact-form');
    if(cform && !cform._attached){
      cform._attached = true;
      cform.addEventListener('submit', function(e){
        e.preventDefault();
        const name = cform.cname.value.trim();
        const email = cform.cemail.value.trim();
        const msg = cform.cmsg.value.trim();
        if(name.length<3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || msg.length<6){ showToast('Preencha nome, email válido e mensagem (min 6).'); return; }
        const arr = JSON.parse(localStorage.getItem('contatos') || '[]');
        arr.push({ name,email,msg,when: new Date().toISOString() });
        localStorage.setItem('contatos', JSON.stringify(arr));
        showToast('Mensagem enviada! (demo)');
        cform.reset();
      });
    }
  };

  // Modal (used for PIX)
  function showModal(html){
    const overlay = document.createElement('div');
    overlay.style.position='fixed'; overlay.style.left=0; overlay.style.top=0; overlay.style.right=0; overlay.style.bottom=0;
    overlay.style.background='rgba(0,0,0,0.35)'; overlay.style.display='flex'; overlay.style.alignItems='center'; overlay.style.justifyContent='center';
    overlay.style.zIndex=10000;
    const card = document.createElement('div');
    card.style.background='white'; card.style.padding='20px'; card.style.borderRadius='12px'; card.style.maxWidth='480px'; card.style.width='90%';
    card.innerHTML = html + '<div style="text-align:right;margin-top:12px"><button class="btn btn-primary" id="closeModal">Fechar</button></div>';
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    document.getElementById('closeModal').focus();
    document.getElementById('closeModal').addEventListener('click', ()=> overlay.remove());
  }

  // expose attachFormHandlers globally (spa.js calls it)
  window.attachFormHandlers = window.attachFormHandlers || window.attachFormHandlers;
})();
