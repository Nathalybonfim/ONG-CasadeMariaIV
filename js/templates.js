/* templates.js - conteúdo das páginas (usado pelo SPA) */

function renderIndex() {
  return `
    <section class="hero" aria-labelledby="heroTitle">
      <div class="hero-left">
        <h2 id="heroTitle">Transformando vidas com amor e solidariedade</h2>
        <p class="lead">A Casa de Maria apoia famílias com cestas básicas, arrecadação de roupas e projetos comunitários. Sua participação faz a diferença.</p>
        <div class="mt-6">
          <a href="#" data-link="projetos" class="btn btn-primary">Conheça nossos projetos</a>
          <a href="#" data-link="cadastro" class="btn btn-outline">Quero ajudar</a>
        </div>
      </div>
      <div class="hero-right">
        <img src="imagens/familias.jpeg" alt="Voluntários entregando cestas básicas" />
      </div>
    </section>

    <section aria-labelledby="quemTitle">
      <h3 id="quemTitle">Quem somos</h3>
      <p class="small">Projeto com mais de 15 anos de atuação local, promovendo ações sociais, coleta solidária e apoio a crianças e mulheres.</p>
    </section>

    <section aria-labelledby="destaquesTitle">
      <h3 id="destaquesTitle">Nossos Destaques</h3>
      <div class="cards-grid" role="list">
        <article class="card" role="listitem">
          <img src="imagens/familias.jpeg" alt="Cesta básica sendo entregue">
          <h3>Projeto Esperança</h3>
          <p>Distribuição mensal de cestas básicas para famílias em vulnerabilidade.</p>
        </article>

        <article class="card" role="listitem">
          <img src="imagens/tampinhas.png" alt="Tampinhas arrecadadas">
          <h3>Tampinhas que Curam</h3>
          <p>Arrecadação de tampinhas para financiar tratamentos e apoio a crianças com câncer.</p>
        </article>

        <article class="card" role="listitem">
          <img src="imagens/lar.png" alt="Visita ao lar vicentino">
          <h3>Visitas ao Lar</h3>
          <p>Visitas mensais e arrecadação de roupas para instituições parceiras.</p>
        </article>
      </div>
    </section>
  `;
}

function renderProjects() {
  return `
    <section aria-labelledby="projectsTitle">
      <h2 id="projectsTitle">Projetos</h2>
      <div class="cards-grid">
        <article class="card">
          <img src="imagens/familias.jpeg" alt="Famílias recebendo doações">
          <h3>Projeto Esperança</h3>
          <p>Distribuição de cestas, acompanhamento familiar e orientação social.</p>
        </article>

        <article class="card">
          <img src="imagens/psi.png" alt="Apoio psicossocial">
          <h3>Projeto Cuidar</h3>
          <p>Atendimento psicossocial e apoio a crianças e mães.</p>
        </article>

        <article class="card">
          <img src="imagens/tampinhas.png" alt="Tampinhas para campanha">
          <h3>Tampinhas que Curam</h3>
          <p>Coleta e reciclagem para arrecadação de fundos a pacientes infantis.</p>
        </article>
      </div>
    </section>
  `;
}

function renderTestimonials() {
  const depoimentos = JSON.parse(localStorage.getItem('depoimentos') || '[]');
  const list = depoimentos.length ? depoimentos.map(d => `
    <div class="testimonial" role="article" aria-label="Depoimento de ${escapeHtml(d.author)}">
      <strong>${escapeHtml(d.author)}</strong>
      <div class="small">${escapeHtml(d.role || '')}</div>
      <p>${escapeHtml(d.text)}</p>
    </div>
  `).join('') : `<p class="small">Nenhum depoimento ainda — seja o primeiro a contar sua experiência.</p>`;

  return `
    <section aria-labelledby="depoTitle">
      <h2 id="depoTitle">Depoimentos</h2>
      <div class="mt-6">
        <form id="testimonial-form" class="form-card" aria-label="Formulário de depoimentos">
          <div class="form-row">
            <div class="field">
              <label for="tnome">Seu nome</label>
              <input id="tnome" name="tnome" type="text" required>
            </div>
            <div class="field">
              <label for="trole">Função</label>
              <input id="trole" name="trole" type="text" placeholder="ex: voluntário, mãe beneficiada">
            </div>
          </div>
          <label for="ttexto">Depoimento</label>
          <textarea id="ttexto" name="ttexto" required></textarea>
          <div style="margin-top:12px">
            <button class="btn btn-primary" type="submit">Enviar depoimento</button>
          </div>
        </form>
      </div>

      <div id="testimonials-grid" class="mt-6" role="region" aria-live="polite">
        ${list}
      </div>
    </section>
  `;
}

function renderDonations() {
  return `
    <section aria-labelledby="doaTitle">
      <h2 id="doaTitle">Doações</h2>
      <p class="small">Sua doação sustenta nossos projetos e alimenta famílias. Abaixo você pode registrar uma doação (demo).</p>

      <div class="form-card mt-6">
        <form id="donation-form" aria-label="Formulário de doações">
          <div class="form-row">
            <div class="field">
              <label for="dnome">Seu nome</label>
              <input id="dnome" name="dnome" type="text" required>
            </div>
            <div class="field">
              <label for="dvalor">Valor (R$)</label>
              <input id="dvalor" name="dvalor" type="number" step="0.01" min="1" required>
            </div>
          </div>

          <label for="dtipo">Tipo de doação</label>
          <select id="dtipo" name="dtipo">
            <option value="alimento">Alimento</option>
            <option value="roupa">Roupas</option>
            <option value="financeira">Financeira (PIX)</option>
          </select>

          <label for="dmensagem">Observações (opcional)</label>
          <textarea id="dmensagem" name="dmensagem"></textarea>

          <div style="margin-top:12px">
            <button class="btn btn-primary" type="submit">Gerar chave PIX / Registrar doação</button>
          </div>
        </form>
      </div>
    </section>
  `;
}

function renderVolunteer() {
  return `
    <section aria-labelledby="volTitle">
      <h2 id="volTitle">Seja um Voluntário</h2>
      <p class="small">Participe das nossas ações: visitas, arrecadações e eventos — inscreva-se abaixo.</p>

      <div class="form-card mt-6">
        <form id="volunteer-form" novalidate aria-label="Formulário de voluntariado">
          <div class="form-row">
            <div class="field">
              <label for="nome">Nome completo</label>
              <input type="text" id="nome" name="nome" required>
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
          </div>

          <div class="form-row mt-6">
            <div class="field">
              <label for="telefone">Telefone (opcional)</label>
              <input type="text" id="telefone" name="telefone">
            </div>
            <div class="field">
              <label for="interesse">Área de interesse</label>
              <select id="interesse" name="interesse">
                <option value="visitas">Visitas ao Lar</option>
                <option value="arrecadacao">Arrecadação de roupas</option>
                <option value="eventos">Eventos e palestras</option>
              </select>
            </div>
          </div>

          <label for="mensagem">Por que quer participar?</label>
          <textarea id="mensagem" name="mensagem" placeholder="Conte-nos..." required></textarea>

          <div style="margin-top:12px">
            <button class="btn btn-primary" type="submit">Enviar cadastro</button>
          </div>
        </form>

        <div class="mt-6 small"><strong>Observação:</strong> Dados armazenados localmente (demo). Em produção, envie para servidor seguro.</div>
      </div>
    </section>
  `;
}

function renderGallery() {
  return `
    <section aria-labelledby="galTitle">
      <h2 id="galTitle">Galeria</h2>
      <p class="small">Fotos das ações e eventos.</p>
      <div class="gallery mt-6" role="list">
        <img src="imagens/familias.jpeg" alt="Famílias apoiadas" role="listitem">
        <img src="imagens/voluntarios.jpg" alt="Voluntários" role="listitem">
        <img src="imagens/tampinhas.png" alt="Tampinhas que Curam" role="listitem">
        <img src="imagens/lar.png" alt="Lar Vicentino" role="listitem">
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section aria-labelledby="contatoTitle">
      <h2 id="contatoTitle">Contato</h2>
      <p class="small">WhatsApp: <strong>(11) 97766-1218</strong> — Endereço: Vila Curuçá Velha - SP</p>

      <div class="mt-6 form-card">
        <form id="contact-form" aria-label="Formulário de contato">
          <label for="cname">Nome</label>
          <input id="cname" name="cname" type="text" required>

          <label for="cemail" style="margin-top:8px">Email</label>
          <input id="cemail" name="cemail" type="email" required>

          <label for="cmsg" style="margin-top:8px">Mensagem</label>
          <textarea id="cmsg" name="cmsg" required></textarea>

          <div style="margin-top:10px">
            <button class="btn btn-primary" type="submit">Enviar mensagem</button>
          </div>
        </form>
      </div>
    </section>
  `;
}

/* helper */
function escapeHtml(str){ return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
