<template>
  <div class="projeto">
    <div class="titulo">
      <h2>Projetos</h2>
    </div>

    <div class="container">
      <div class="slider-wrapper">
        <button id="prev-slide" class="slide-button material-symbols-rounded">
          chevron_left
        </button>
        <ul class="image-list">
          <li>
            <div class="box">
              <span></span>
              <div class="box">
                <img
                  class="image-item"
                   src="../assets/img/projeto1.png"
                  alt="image.alt"
                />
                <p class="image-text"><a href="https://docs.google.com/presentation/d/1kKqY1Jewsa8Kd9q642Ip4ACgo8JdbuFEgLkpACS4wfY/edit" target="_blank">Mindhub</a></p>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <span></span>
              <div class="box">
                <img
                  class="image-item"
                   src="../assets/img/projeto2.png"
                  alt="image.alt"
                />
                <p class="image-text"><a href="https://docs.google.com/presentation/d/1XlIff3afECB7TxXuo7FdvKC5349ukA56xDqbKSPYoZU/edit" target="_blank">Penguin’s BarberShop</a></p>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <span></span>
              <div class="box">
                <img
                  class="image-item"
                   src="../assets/img/projeto3.png"
                  alt="image.alt"
                />
                <p class="image-text"><a href="https://coursera-assessments.s3.amazonaws.com/assessments/1696260830705/c975a846-5236-409f-adc1-10510fa89039/slide%20-%20pesquisa.pdf" target="_blank">TrackPack</a></p>
              </div>
            </div>
          </li>
        </ul>
        <button id="next-slide" class="slide-button material-symbols-rounded">
          chevron_right
        </button>
      </div>
      <div class="slider-scrollbar">
        <div class="scrollbar-track">
          <div class="scrollbar-thumb"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startX: 0,
      thumbPosition: 0,
      maxThumbPosition: 0,
      maxScrollLeft: 0,
      imageList: null,
      slideButtons: null,
      sliderScrollbar: null,
      scrollbarThumb: null,
    };
  },
  methods: {
    initSlider() {
      this.imageList = this.$el.querySelector(".image-list");
      this.slideButtons = this.$el.querySelectorAll(".slide-button");
      this.sliderScrollbar = this.$el.querySelector(".slider-scrollbar");
      this.scrollbarThumb =
        this.sliderScrollbar.querySelector(".scrollbar-thumb");
      this.maxScrollLeft =
        this.imageList.scrollWidth - this.imageList.clientWidth;

      this.scrollbarThumb.addEventListener("mousedown", this.handleMouseDown);
      this.slideButtons.forEach((button) => {
        button.addEventListener("click", this.handleButtonClick);
      });
      this.imageList.addEventListener("scroll", this.handleScroll);
    },
    handleMouseDown(e) {
      this.startX = e.clientX;
      this.thumbPosition = this.scrollbarThumb.offsetLeft;
      this.maxThumbPosition =
        this.sliderScrollbar.getBoundingClientRect().width -
        this.scrollbarThumb.offsetWidth;

      const handleMouseMove = (e) => {
        const deltaX = e.clientX - this.startX;
        const newThumbPosition = this.thumbPosition + deltaX;
        const boundedPosition = Math.max(
          0,
          Math.min(this.maxThumbPosition, newThumbPosition)
        );
        const scrollPosition =
          (boundedPosition / this.maxThumbPosition) * this.maxScrollLeft;

        this.scrollbarThumb.style.left = `${boundedPosition}px`;
        this.imageList.scrollLeft = scrollPosition;
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    handleButtonClick(e) {
      const direction = e.target.id === "prev-slide" ? -1 : 1;
      const scrollAmount = this.imageList.clientWidth * direction;
      this.imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    },
    handleScroll() {
      this.updateScrollThumbPosition();
      this.handleSlideButtons();
    },
    handleSlideButtons() {
      this.slideButtons[0].style.display =
        this.imageList.scrollLeft <= 0 ? "none" : "flex";
      this.slideButtons[1].style.display =
        this.imageList.scrollLeft >= this.maxScrollLeft ? "none" : "flex";
    },
    updateScrollThumbPosition() {
      const scrollPosition = this.imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / this.maxScrollLeft) *
        (this.sliderScrollbar.clientWidth - this.scrollbarThumb.offsetWidth);
      this.scrollbarThumb.style.left = `${thumbPosition}px`;
    },
  },
  mounted() {
    this.initSlider();
    window.addEventListener("resize", this.initSlider);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.initSlider);
  },
};
</script>

<style>
.box {
  position: relative;
  width: 300px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #fff;
}

.box::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: conic-gradient(
    transparent,
    transparent,
    transparent,
    #4bdbff
  );
  animation: animate 4s linear infinite;
}

.box::after {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  background-image: conic-gradient(
    transparent,
    transparent,
    transparent,
    #033eff
  );
  animation: animate 4s linear infinite;
  animation-delay: -2s;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.box span {
  position: absolute;
  inset: 5px;
  border-radius: 16px;
  background: #0c1022;
  z-index: 1;
}

.box img {
  width: 290px;
  height: 290px;
  position: absolute;
  top: 5px;
  left: 20;
  border-radius: 17px 17px 0px 0px;
  z-index: 3;

}

.image-text {
  text-align: center;
  background-color: #ffffff;
  position: absolute;
  height: 50px;
  width: 290px;
  bottom: 5px;
  left: 5px;
  color: rgb(0, 0, 0);
  z-index: 3;
  font-size: 20px;
  border-radius: 0px 0px 17px 17px;
  padding: 5px 15px;
}

.image-text a {
  color: #000;
  
}

.projeto {
  background-color: var(--color-black);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 55px 0px;
  color: var(--color-white);
}

.projeto > .titulo {
  font-size: 1.3em;
}

.container {
  margin-top: 50px;
  max-width: 1500px;
  width: 95%;
}

.slider-wrapper {
  position: relative;
}

.slider-wrapper .slide-button {
  position: absolute;
  top: 50%;
  outline: none;
  border: none;
  height: 50px;
  width: 50px;
  z-index: 5;
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 2.2rem;
  background: #000;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transform: translateY(-50%);
}

.slider-wrapper .slide-button:hover {
  background: #404040;
}

.slider-wrapper .slide-button#prev-slide {
  left: -25px;
  display: none;
}

.slider-wrapper .slide-button#next-slide {
  right: -25px;
}

.slider-wrapper .image-list {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 30px;
  font-size: 0;
  list-style: none;
  margin-bottom: 30px;
  overflow-x: auto;
  scrollbar-width: none;
}

.slider-wrapper .image-list::-webkit-scrollbar {
  display: none;
}

.container .slider-scrollbar {
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}

.slider-scrollbar .scrollbar-track {
  background: #ccc;
  width: 100%;
  height: 2px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  position: relative;
}

.slider-scrollbar:hover .scrollbar-track {
  height: 4px;
}

.slider-scrollbar .scrollbar-thumb {
  position: absolute;
  background: #000;
  top: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  cursor: grab;
  border-radius: inherit;
}

.slider-scrollbar .scrollbar-thumb:active {
  cursor: grabbing;
  height: 8px;
  top: -2px;
}

.slider-scrollbar .scrollbar-thumb::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  bottom: -10px;
}

/* Styles for mobile and tablets */
@media only screen and (max-width: 1023px) {
  .slider-wrapper .slide-button {
    display: none !important;
  }
  .slider-wrapper .image-list {
    gap: 10px;
    margin-bottom: 15px;
    scroll-snap-type: x mandatory;
  }
  .slider-wrapper .image-list .image-item {
    width: 290px;
    height: 290px;
  }
  .slider-scrollbar .scrollbar-thumb {
    width: 20%;
  }
}
</style>