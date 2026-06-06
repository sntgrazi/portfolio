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
              com duração de 4 meses. Nele tive meu primeiro contato com a
              programação web e conheci tecnologias como HTML, CSS e PHP.
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
              No início de 2022, consegui uma bolsa no SENAI para fazer o curso
              técnico. Nele aprofundei ainda mais meus conhecimentos em
              programação, aprendendo sobre metodologias ágeis, padrões de
              projeto e outras boas práticas.
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
              No final de junho, consegui meu primeiro freela, que durou 3
              meses na empresa Legulas Soluções em TI. Nessa experiência,
              implementei novas funcionalidades em alguns sistemas, fiz
              alterações de layout e participei de outras demandas do dia a
              dia. As tecnologias que mais utilizei foram PHP, MySQL, HTML,
              CSS e JavaScript.
            </p>
          </div>
          <div class="time">
            <h4>Junho 2023</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Tecnóloga em análise e desenvolvimento de sistemas</h3>
            <p>
              Ao concluir o curso no SENAI, tive a oportunidade de começar a
              cursar ADS na UNIFAN. Estou aprendendo mais sobre arquitetura de
              software, segurança da informação e desenvolvimento de aplicações
              web e móveis.
            </p>
          </div>
          <div class="time">
            <h4>Junho 2023</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Projetos práticos e evolução profissional</h3>
            <p>
              Em 2024, continuei aprofundando minhas habilidades com projetos
              práticos, estudos e participação em iniciativas da área. Esse
              período ajudou a fortalecer minha base técnica e a me preparar
              para desafios maiores no mercado.
            </p>
          </div>
          <div class="time">
            <h4>2024</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Desenvolvedora Fullstack na Wemind</h3>
            <p>
              De 06/2024 até 10/2025, atuei na Wemind desenvolvendo projetos
              end to end, do back ao front, com modelagem de banco de dados.
              Trabalhei em soluções como um chat em tempo real com WebSocket,
              tendo o Symfony como principal tecnologia, além de realizar
              manutenções em outros projetos da empresa e criar dashboards de
              avaliações e outras melhorias contínuas.
            </p>
          </div>
          <div class="time">
            <h4>06/2024 - 10/2025</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Desenvolvedora Backend Júnior 2</h3>
            <p>
              Desde 10/2025, atuo na minha empresa atual como Desenvolvedora
              Backend Júnior 2, seguindo com Symfony no dia a dia. Meu trabalho
              envolve a resolução de bugs, criação de endpoints, documentação e
              apoio na evolução contínua das APIs e serviços da empresa.
            </p>
          </div>
          <div class="time">
            <h4>10/2025 - Atual</h4>
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
  color: #7fdbff;
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
