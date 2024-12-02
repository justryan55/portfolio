<script lang="ts">
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default defineComponent({
  name: 'AboutView',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slides: [
        { id: 1, imageUrl: 'css3-original.svg' },
        { id: 2, imageUrl: 'html5-original.svg' },
        { id: 3, imageUrl: 'javascript-original.svg' },
        { id: 4, imageUrl: 'nodejs-original-wordmark.svg' },
        { id: 5, imageUrl: 'react-original.svg' },
        { id: 6, imageUrl: 'vue.svg' },
      ],
      breakpoints: {
        640: {
          itemsToShow: 1,
          itemsToScroll: 1,
        },
        1024: {
          itemsToShow: 2,
          itemsToScroll: 1,
        },
        1440: {
          itemsToShow: 3,
          itemsToScroll: 1,
        },
      },
    }
  },
})
</script>

<template>
  <main class="main">
    <div class="container">
      <p class="header">About</p>
      <div class="content">
        <div class="text">
          <div class="column">
            Hi, I’m Ryan! I’m a self-taught full-stack web developer driven by a passion for
            creating and building things. I hold a Master’s degree in Physiotherapy Practice from
            Australia and have worked as a physiotherapist for over five years. However, my
            curiosity and drive to explore new challenges led me to pursue a career in coding.
          </div>

          <div class="column">
            Over the past 12 months, I’ve dedicated myself to learning web development, with the
            guidance of a mentor who has shared his expertise with me over the last eight months. To
            gain hands-on experience, I also completed a 10-week internship at Lynx Digital, where I
            honed my skills in real-world projects. When I’m not coding or working as a
            physiotherapist, I enjoy spending my time traveling, with family and friends, at the gym
            or running.
          </div>
        </div>
        <carousel
          :autoplay="1500"
          :transition="1000"
          :wrap-around="true"
          :mouse-drag="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in slides" :key="slide.id">
            <img :src="slide.imageUrl" :alt="'Slide ' + slide.id" class="slide-image" />
          </slide>
        </carousel>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  width: 100vw;
}

.header {
  position: relative;
  top: 100px;
  letter-spacing: 2px;
  color: white;
  font-size: 2.5rem;
  width: 100vw;
  text-align: center;
  animation: showText 0.5s ease-in-out;
}

.content {
  display: flex;
  flex-direction: column;
  margin-top: 125px;
}

.text {
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
  align-items: stretch;
  text-align: justify;
  font-size: 1.5rem;
  margin: 0px 100px;
  animation: showText 0.5s ease-in-out;
}

.column {
  flex: 1;
  padding: 0 80px;
}

@keyframes showText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.slide-image {
  height: 10rem;
}

.carousel {
  margin: 50px;
}

@media (max-width: 768px) {
  .text {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .text .column:first-child {
    margin-bottom: 50px;
  }

  .slide-image {
    margin: 50px 0px 150px 0px;
  }
}
</style>
