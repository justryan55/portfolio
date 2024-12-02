<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Archives',
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'RitzyThreads',
          img: '/store.png',
          desc: 'An online clothes store to demonstrate the use of state.',
          demo: 'https://ritzythreads.netlify.app/',
          github: 'https://github.com/justryan55/shopping-cart',
        },
        {
          id: 2,
          title: 'To Do List',
          img: '/to-do-list.jpeg',
          desc: 'A Javascript-powered to-do list application that allows users to create individual projects with separate to-do items.',
          demo: '/to-do-list/index.html',
          github: 'https://github.com/justryan55/to-do-list',
        },
        {
          id: 3,
          title: 'Book Library',
          img: '/book-library.png',
          desc: 'A Javascript-powered book library that allows users to explore and manage their book collection.',
          demo: '/library/index.html',
          github: 'https://github.com/justryan55/book-library',
        },
        {
          id: 4,
          title: 'Etch-A-Sketch',
          img: '/etch-a-sketch.png',
          desc: 'A Javascript-powered sketchpad that features the ability to delete, undo, save and load work.',
          demo: '/etch-a-sketch/index.html',
          github: 'https://github.com/justryan55/etch-a-sketch',
        },
        {
          id: 4,
          title: 'Old Portfolio',
          img: '/old-portfolio.png',
          desc: 'A React-built portfolio that is no longer in use.',
          demo: 'https://ryanirani.netlify.app/',
          github: 'https://github.com/justryan55/portfolio',
        },
      ],
    }
  },
  methods: {
    intersectionObserver() {
      const sections = document.querySelectorAll('.section')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slide-in')
            } else {
              entry.target.classList.remove('slide-in')
            }
          })
        },
        { threshold: 0.2 },
      )
      sections.forEach((section) => {
        section.classList.add('hidden')
        observer.observe(section)
      })
    },
  },
  mounted() {
    this.intersectionObserver()
  },
})
</script>

<template>
  <div class="container">
    <div v-for="item in items" :key="item.id">
      <section class="section">
        <div class="image-container">
          <a :href="item.demo" target="_blank"> <img :src="item.img" class="image" /></a>
        </div>
        <div class="information">
          <p class="header">{{ item.title }}</p>
          <p class="text">{{ item.desc }}</p>
          <div v-if="item.id !== 5" class="btn-container">
            <a class="btn" :href="item.demo" target="_blank">Demo</a>
            <a class="btn" :href="item.github" target="_blank">Github</a>
          </div>
          <div v-else class="btn-container">
            <p class="btn" @click="this.$router.push('/projects/archives')">Explore</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.container {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.section {
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  height: 100vh;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* animation: slideIn 0.75s ease-in-out; */
}

.image {
  max-width: 50vw;
  max-height: 75vh;
  padding: 50px;
  border-radius: 70px;
  transition: transform 0.3s ease;
}

.image:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.information {
  display: grid;
  grid-template-rows: 1fr 1.5fr 0.5fr;
  /* animation: slideIn 1s ease-in-out; */
}

.btn-container {
  display: flex;
}

.btn {
  padding: 20px;
  /* border: 1px solid white; */
  border-radius: 10px;
  background-color: #42b883;
  color: black;
  font-weight: 500;
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
  /* color: white; */
  font-weight: 600;
  transform: translateY(-2px);
}

.header {
  font-size: 4rem;
  color: white;
  /* color: #42b883; */
  font-weight: 600;
  /* letter-spacing: 5px; */
}

.text {
  font-size: 2rem;
  color: white;
  margin-top: 20px;
}

.hidden {
  opacity: 0;
  visibility: hidden;
  animation: slideIn;
  transition:
    opacity 0.75s ease,
    transform 0.75s ease;
}

.slide-in {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* @keyframes slideIn {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
} */

@media (max-width: 768px) {
  .section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  .image {
    max-width: 90vw;
    max-height: 90vh;
    padding: 0px;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  .image-container {
    padding: 0;
    margin: 0;
  }

  .information {
    padding: 0px 50px;
  }

  .btn-container {
    justify-content: space-around;
    padding-top: 20px;
  }

  .btn {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
  }

  .text {
    margin: 0;
  }
}
</style>
