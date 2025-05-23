<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  methods: {
    handleClick(page: string) {
      this.$router.push(page)
    },
  },
})
</script>

<template>
  <main class="main">
    <vue-particles
      id="tsparticles"
      :options="{
        background: {
          color: { value: '#181818' },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'grab' },
          },
          modes: {
            push: { quantity: 4 },
            grab: {
              distance: 150,
              links: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: { value: '#42b883' },
          links: {
            color: '#42b883',
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 160,
          },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }"
    />

    <div class="empty-div"></div>

    <div>
      <div class="container">
        <h1 class="header">Ryan Irani</h1>
        <h2 class="text">
          Full Stack <br />
          Web Developer
        </h2>
      </div>
      <div class="btn-container">
        <a class="btn" @click="handleClick('/projects')">Latest Works</a>
        <a class="btn" @click="handleClick('/contact')">Contact Me</a>
      </div>
    </div>
    <div class="image-container">
      <img :src="'file.png'" class="image" />
    </div>
  </main>
</template>

<style scoped>
body,
html {
  overflow: hidden;
}

.main {
  display: grid;
  grid-template-columns: 0.4fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  animation: slideInText 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

.header {
  font-size: 2rem;
  letter-spacing: 10px;
  color: #42b883;
  opacity: 0;
  animation: fadeInText 1.2s ease-in-out forwards 0.3s;
  margin-bottom: 30px;
}

.text {
  font-size: 5.5rem;
  color: white;
  opacity: 0;
  line-height: 100px;
  animation: fadeInText 1.2s ease-in-out forwards 0.5s;
  white-space: nowrap;
}

.btn-container {
  margin-top: 65px;
  gap: 10px;
  animation:
    fadeInBtn 2s ease-in,
    transformBtn 0.8s ease-in;
}

.btn {
  padding: 20px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-weight: 300;
  margin-right: 20px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.btn:hover {
  cursor: pointer;
  background-color: #42b883;
  border: 0px;
  color: white;
  transform: translateY(-2px);
}

.image {
  position: absolute;
  max-height: 85vh;
  bottom: 0;
  animation: showImage 0.9s ease-in;
}

.empty-div {
  display: none;
}

#tsparticles {
  z-index: -1000;
  animation: showParticles 3s ease-in;
}

@keyframes slideInText {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes showImage {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes showParticles {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInText {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeInBtn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes transformBtn {
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .main {
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0;
    text-align: center;
    background: linear-gradient(135deg, rgba(66, 184, 131, 0.1), rgba(24, 24, 24, 0.3));
  }

  .header {
    font-size: 1.5rem;
  }

  .text {
    font-size: 3rem;
    padding: 15px;
    color: white;
    opacity: 0;
    animation: fadeInText 1.2s ease-in-out forwards 0.5s;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    padding: 0px 50px;
    gap: 20px;
  }

  .btn {
    width: 100%;
    margin-right: 0;
  }

  .image {
    display: none;
  }

  #tsparticles {
    display: none;
  }

  .empty-div {
    display: block;
  }
}
</style>
