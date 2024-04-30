<template>
  <div class="tecnologia">
    <div class="titulo">
      <h2>Skills</h2>
    </div>
    <div class="icones">
      <div class="icone-wrapper">
        <img class="cor-icon" src="../assets/icone/html5.svg" alt="HTML5" />
        <span>HTML5</span>
      </div>
      <div class="icone-wrapper">
        <img class="cor-icon" src="../assets/icone/css3.svg" alt="CSS3" />
        <span>CSS3</span>
      </div>
      <div class="icone-wrapper">
        <img
          class="cor-icon"
          src="../assets/icone/javascript.svg"
          alt="JavaScript"
        />
        <span>JavaScript</span>
      </div>
      <div class="icone-wrapper">
        <img class="cor-icon" src="../assets/icone/vue.svg" alt="vuejs" />
        <span>Vue</span>
      </div>
      <div class="icone-wrapper">
        <img class="cor-icon" src="../assets/icone/angular.svg" alt="angular" />
        <span>Angular</span>
      </div>
      <div class="icone-wrapper">
        <img class="cor-icon" src="../assets/icone/php.svg" alt="php" />
        <span>Php</span>
      </div>
      <div class="icone-wrapper">
        <img class="cor-icon" src="../assets/icone/laravel.svg" alt="laravel" />
        <span>Laravel</span>
      </div>
      <div class="icone-wrapper">
        <img class="cor-icon" src="../assets/icone/java.svg" alt="java" />
        <span>Java</span>
      </div>
      <div class="icone-wrapper">
        <img class="cor-icon" src="../assets/icone/spring.svg" alt="spring" />
        <span>Spring Boot</span>
      </div>
      <div class="icone-wrapper">
        <img class="cor-icon" src="../assets/icone/mysql.svg" alt="mysql" />
        <span>Mysql</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script> 

<style>
.tecnologia {
  background-color: var(--color-black);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
}

.tecnologia > .titulo {
  font-size: 1.3em;
}

.icones {
  margin-top: 50px;
  widows: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;
}

.icone-wrapper {
  margin-right: 20px;
  margin-bottom: 20px;
  text-align: center;
}

.icone-wrapper span {
  display: block;
}

.icones img {
  width: 110px;
  height: 110px;
}

@media (max-width: 768px) {
  .icones {
    grid-template-columns: repeat(3, 1fr);
    padding: 25px;
  }
}

@media (max-width: 480px) {
  .icones {
    grid-template-columns: repeat(2, 1fr);
    padding: 25px;
  }
}
</style>
