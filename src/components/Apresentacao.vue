<template>
  <div class="apresentacao">
    <div class="topo">
      <div class="nome">
        <h2>Sntgrazi</h2>
        <img src="@/assets/img/coracao.png" alt="" />
      </div>
      <div class="menuIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -7 24 24"
          width="28"
          fill="currentColor"
        >
          <path
            d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="info">
      <div class="img-container">
        <img src="@/assets/img/avatar.png" alt="Avatar" />
      </div>
      <div class="texto-apresentacao">
        <p class="intro">
          Olá, sou a <span class="highlight">sntgrazi</span>, ou melhor dizendo,
        </p>
        <h1>Grazielle Santana</h1>
        <p>
          Desenvolvedora web, dedicada a transformar conceitos criativos em
          soluções digitais inovadoras. Explore meu portfólio para conhecer os
          projetos que marcaram minha trajetória e evidenciam minha profunda
          paixão pela tecnologia
        </p>
        <div class="icons">
          <a href="https://github.com/sntgrazi" target="_blank">
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sntgrazi" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:sntgrazi22@gmail.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.apresentacao {
  background-color: var(--color-black);
  width: 100%;
  height: 100%;
  color: #fff;
  padding-bottom: 30px;
}

.topo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.nome {
  display: flex;
  align-items: center;
  font-size: 1.2em;
}

.menuIcon > svg {
  width: 55px;
}

.info {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16%;
}

.img-container > img {
  width: 100%;
  max-width: 400px;
}

.icons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 45px;
}

.icons a {
  color: inherit;
  text-decoration: none;
}

.icons a:hover {
  color: #b3b2b2;
}

.texto-apresentacao {
  max-width: 700px;
  margin: auto;
  text-align: center;
  font-size: 1.2em;
}

.texto-apresentacao h1 {
  color: #7fdbff;
  margin: 0.5em 0;
}

.highlight {
  font-weight: bold;
}

@media (max-width: 768px) {
  .info {
    flex-direction: column-reverse;
    align-items: center;
  }

  .img {
    margin-top: 20px;
  }
}
</style>