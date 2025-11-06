function renderIndex(){
  return `
  <section class="hero">
    <h2>Bem-vindo à Casa de Maria</h2>
    <p>Transformando vidas com amor, fé e solidariedade.</p>
    <a href="#" data-link="projetos" class="btn">Conheça nossos projetos</a>
  </section>
  `;
}

function renderProjects(){
  return `
  <section class="projects">
    <h2>Projetos</h2>
    <div class="grid">
      <div class="card">
        <img src="./imagens/cuidar.jpg" alt="Projeto Cuidar">
        <h3>Projeto Cuidar</h3>
        <p>Oferece apoio a famílias em situação de vulnerabilidade social, com doações e acolhimento.</p>
      </div>
      <div class="card">
        <img src="./imagens/tampinhas.png" alt="Projeto Tampinhas que Curam">
        <h3>Projeto Tampinhas que Curam</h3>
        <p>Rcebemos e juntamos tampinhas de garrafa PET para trocar por cadeiras de roda, para idosos com dificuldade na mobilidade e também deficientes físicos em vulnerabilidade social.</p>
      </div>
      <div class="card">
        <img src="./imagens/psi.png" alt="Projeto Educar">
        <h3>Projeto Educar</h3>
        <p>Promove oficinas de reforço escolar e desenvolvimento pessoal para crianças e adolescentes.</p>
      </div>
    </div>
  </section>
  `;
}

function renderTestimonials(){
  return `
  <section class="testimonials">
    <h2>Depoimentos</h2>
    <blockquote>"A Casa de Maria mudou minha vida. Gratidão eterna!"</blockquote>
    <cite>— Ana Paula, beneficiária</cite>
  </section>
  `;
}

function renderDonations(){
  return `
  <section class="donations">
    <h2>Doações</h2>
    <p>Sua ajuda faz toda a diferença. Contribua com qualquer valor e ajude-nos a continuar nossos projetos.</p>
    <a href="https://www.picpay.com" target="_blank" class="btn">Doar Agora</a>
  </section>
  `;
}

function renderVolunteer(){
  return `
  <section class="volunteer">
    <h2>Seja um Voluntário</h2>
    <form id="volunteerForm">
      <label>Nome:<input type="text" name="nome" required></label>
      <label>Email:<input type="email" name="email" required></label>
      <label>Telefone:<input type="tel" name="telefone" required></label>
      <label>Área de Interesse:
        <select name="area" required>
          <option value="">Selecione...</option>
          <option value="Educação">Educação</option>
          <option value="Alimentação">Alimentação</option>
          <option value="Acolhimento">Acolhimento</option>
        </select>
      </label>
      <button type="submit" class="btn">Enviar</button>
    </form>
  </section>
  `;
}

function renderGallery(){
  return `
  <section class="gallery">
    <h2>Galeria</h2>
    <div class="grid">
      <img src="./imagens/voluntarios.jpg" alt="Ação solidária 1">
      <img src="./imagens/lar.png" alt="Ação solidária 2">
      <img src="./imagens/tampinhas.png" alt="Ação solidária 3">
    </div>
  </section>
  `;
}

function renderContact(){
  return `
  <section class="contact">
    <h2>Contato</h2>
    <p>📍 Rua Esperança, 123 — Vila Curuçá Velha, SP</p>
    <p>📞 (11) 99999-9999</p>
    <p>✉️ contato@casademaria.org</p>
  </section>
  `;
}





