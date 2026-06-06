<template>
  <div class="portfolio">
    <div class="apresentacao">
      <apresentacao></apresentacao>
    </div>
    <div class="jornada">
      <jornada></jornada>
    </div>
    <div class="tecnologias">
      <skills></skills>
    </div>
    <footer>
      <p>&copy; 2024 Sntgrazi. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import Apresentacao from "./components/Apresentacao.vue";
import Jornada from "./components/Jornada.vue";
import Skills from "./components/Skills.vue";
</script>

<style>
footer {
  background-color: #000000;
  padding: 40px;
  text-align: center;
  color: white;
}
</style>
