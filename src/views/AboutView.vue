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
        { id: 7, imageUrl: 'typescript-original.svg' },
        { id: 8, imageUrl: 'threejs-original-wordmark.svg' },
      ],
      breakpoints: {
        640: {
          itemsToShow: 1,
          itemsToScroll: 1,
        },
        1024: {
          itemsToShow: 3,
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
      <h1 class="header">About</h1>
      <div class="content">
        <div class="text">
          <p class="column">
            Hi, I’m Ryan! I’m a Full-Stack Web Developer driven by a passion for creating and
            building things. I hold a Master’s degree in Physiotherapy Practice from Australia and
            have worked as a physiotherapist for over five years. However, my curiosity and drive to
            explore new challenges led me to pursue a career in coding.
          </p>

          <p class="column">
            Over the past 12 months, I’ve dedicated myself to learning web development, with the
            guidance of a mentor who has shared his expertise with me over the last eight months. To
            gain hands-on experience, I also completed a 10-week internship at Lynx Digital, where I
            honed my skills in real-world projects. When I’m not coding or working as a
            physiotherapist, I enjoy spending my time traveling, with family and friends, at the gym
            or running.
          </p>
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
  text-align: left;
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

@media (max-width: 1024px) {
  .main {
    background: linear-gradient(135deg, rgba(66, 184, 131, 0.1), rgba(24, 24, 24, 0.3));
    height: 100vh;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin: 0;
    font-size: 1.25rem;
    margin: 0;
    animation: showText 0.5s ease-in-out;
  }

  .column {
    flex: auto;
    padding: 0px 30px;
  }

  .text .column:first-child {
    margin-bottom: 50px;
  }
}

@media (max-width: 768px) {
  .text {
    display: flex;
    flex-direction: column;
    margin: 0;

    font-size: 1.25rem;
    margin: 0;
    animation: showText 0.5s ease-in-out;
  }

  .column {
    flex: auto;
    padding: 0px 30px;
  }

  .text .column:first-child {
    margin-bottom: 50px;
  }

  .slide-image {
    margin: 50px 0px 150px 0px;
  }
}
</style>
