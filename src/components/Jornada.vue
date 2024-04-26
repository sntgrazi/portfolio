<template>
  <div class="jornada">
    <div class="titulo">
      <h2>Minha Jornada</h2>
    </div>
    <div class="timeline">
      <ul>
        <li>
          <div class="content">
            <h3>Curso de desenvolvimento Web</h3>
            <p>
              Iniciei na programação por meio de um curso que ganhei no SENAC
              com duração de 4 meses, nele tive meus primeiro contato com a
              programação web e conheci as tecnologias html, css e o php
            </p>
          </div>
          <div class="time">
            <h4>Agosto 2021</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Técnico em desenvolvimento de sistemas</h3>
            <p>
              No inicio de 2022, consegui uma bolsa no SENAI para fazer o curso
              técnico, nele aprofundei mais em sobre a programação aprendendo
              sobre metodologias ágeis, padrões de projetos e etc.
            </p>
          </div>
          <div class="time">
            <h4>Janeiro 2022</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Freelancer como Desenvolvedora Fullstack</h3>
            <p>
              No final de junho, consegui meu primeiro freela que durou 3 meses
              na empresa Legulas soluções em TI em que eu implementava novas
              funcionalidades em alguns sistema, alteração de layouts em ouros
              entre outras coisas. As tecnologias que mais tive contato durante
              essa experiência foram o php, mysql, html, css e o javascript.
            </p>
          </div>
          <div class="time">
            <h4>Junho 2023</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Tecnólogo em analise e desenvolvimento de sistemas</h3>
            <p>
              Ao concluir o curso no SENAI, tive a oportunidade de começar a
              cursar ADS na UNIFAN. Estou aprendendo mais sobre arquitetura de
              software, segurança da informação, e desenvolvimento de aplicações
              web e móveis.
            </p>
          </div>
          <div class="time">
            <h4>Junho 2023</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Atualmente</h3>
            <p>
              Estou aprofundando minhas habilidades através do meu curso
              tecnólogo, envolvendo-me em projetos práticos e eventos da área.
              Estou buscando oportunidades para aplicar meus conhecimentos em
              projetos inovadores, enquanto cresço profissionalmente em um
              ambiente que valoriza a inovação e o aprendizado contínuo.
            </p>
          </div>
          <div class="time">
            <h4>Junho 2023</h4>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.jornada {
  background-color: var(--color-black);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
}

.jornada > .titulo {
  font-size: 1.2em;
}

.jornada > .titulo > h2 {
  color: var(--color-white);
}

.timeline {
  position: relative;
  margin: 50px auto;
  width: 1000px;
  padding: 40px 0;
}

.timeline:before {
  content: "";
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: var(--color-white);
}

.timeline ul {
  margin: 0;
  padding: 0;
}

.timeline > ul > li {
  list-style: none;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
}

.timeline > ul > li:nth-child(odd) {
  float: left;
  text-align: right;
  clear: both;
}

.timeline > ul > li:nth-child(even) {
  float: right;
  text-align: left;
  clear: both;
}

.content {
  padding-bottom: 60px;
}

.timeline > ul > li:nth-child(odd):before {
  content: "";
  position: absolute;
  top: 24px;
  right: -9px;
  width: 15px;
  height: 15px;
  background-color: var(--color-white);
  border-radius: 50%;
  box-shadow: 0 0 0 3px #272727;
}

.timeline > ul > li:nth-child(even):before {
  content: "";
  position: absolute;
  top: 24px;
  left: -6px;
  width: 15px;
  height: 15px;
  background-color: var(--color-white);
  border-radius: 50%;
  box-shadow: 0 0 0 3px #272727;
}

.timeline > ul > li > .content > h3 {
  color: #b350ec;
}

.timeline > ul > li > .content > p {
  margin-top: 30px;
  color: var(--color-white);
}

.timeline > ul > li > p {
  margin: 10px 0 0;
  padding: 0;
}

.timeline > ul > li .time > h4 {
  margin: 0;
  padding: 0;
  font-size: 14px;
}

.timeline > ul > li:nth-child(odd) .time {
  position: absolute;
  top: 12px;
  right: -165px;
  margin: 0;
  padding: 8px 16px;
  color: var(--color-black);
  background-color: var(--color-white);
  border-radius: 15px;
}

.timeline > ul > li:nth-child(even) .time {
  position: absolute;
  top: 12px;
  left: -165px;
  margin: 0;
  padding: 8px 16px;
  color: var(--color-black);
  background-color: var(--color-white);
  border-radius: 15px;
}

@media (max-width: 1000px) {
  .timeline {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .timeline {
    width: 100%;
    padding-bottom: 0;
  }

  .h2 {
    text-align: center;
    font-size: 40px;
  }

  .content {
    padding-top: 60px;
  }

  .timeline > ul > li > .content > h3 {
    padding-top: 20px;
  }

  .timeline:before {
    left: 20px;
  }

  .timeline > ul > li:nth-child(odd),
  .timeline > ul > li:nth-child(even) {
    width: 100%;
    text-align: left;
    padding-left: 50px;
    padding-bottom: 50px;
  }

  .timeline > ul > li:nth-child(odd):before,
  .timeline > ul > li:nth-child(even):before {
    top: 26px;
    left: 14px;
  }

  .timeline > ul > li:nth-child(odd) .time,
  .timeline > ul > li:nth-child(even) .time {
    top: 10px;
    left: 50px;
    right: inherit;
  }
}
</style>