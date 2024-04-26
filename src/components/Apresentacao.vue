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
      <div class="img">
        <img src="@/assets/img/avatar.png" alt="" />
      </div>
      <div class="texto-apresentacao">
        <h2 class="mb-3">
          Olá, sou a sntgrazi, ou melhor dizendo, <br />
          Grazielle Santana.
        </h2>
        <h3 class="mb-4">
          Desenvolvedora web apaixonada por transformar <br />
          ideias em realidades digitais. Descubra projetos <br />
          que demonstram minha jornada e paixão pela <br />
          tecnologia.
        </h3>
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
  color: #5c8fee;
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
}

.menuIcon > svg {
  width: 55px;
}

.info {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
}

.img > img {
  width: 100%;
  max-width: 400px;
}

.texto-apresentacao {
  text-align: center;
}

.texto-apresentacao > h2 {
  font-size: 1.65em;
  margin-bottom: 15px;
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