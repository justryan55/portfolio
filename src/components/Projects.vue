<script lang="ts">
import { defineComponent } from 'vue'
import BouncingArrow from './BouncingArrow.vue'

export default defineComponent({
  name: 'Projects',
  components: {
    BouncingArrow,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'GlobeTrotter',
          img: 'GlobeTrotter001.png',
          desc: 'A travel social media platform designed for travellers who want to document and share their journeys.',
          demo: 'https://travel-project-eight-phi.vercel.app/',
          github: 'https://github.com/justryan55/travel-project',
        },
        {
          id: 2,
          title: 'UmbrellaTalk',
          img: 'UmbrellaTalk000.png',
          desc: 'A messaging platform where users can chat, edit messages, update profiles, and manage their data.',
          demo: 'https://umbrella-talk-api-zeta.vercel.app/',
          github: 'https://github.com/justryan55/umbrella-talk',
        },
        {
          id: 3,
          title: 'Prompter',
          img: 'Prompter000.png',
          desc: 'An application that encourages users to send daily messages to their family and friends by providing a new prompt each day.',
          demo: 'https://prompter-git-deployment-ryans-projects-20a8834f.vercel.app/',
          github: 'https://github.com/justryan55/prompter-app',
        },
        {
          id: 4,
          title: 'Active Horizons',
          img: 'ActiveHorizons001.png',
          desc: 'Active Horizons Health Group is business website designed for a physiotherapy telehealth provider.',
          demo: 'https://activehorizons.com.au',
          github: 'https://github.com/justryan55/active-horizons',
        },
        {
          id: 5,
          title: 'The Archives',
          img: 'Folder.svg',
          desc: 'The below projects showcase a range of work from my earlier stages of development. While these projects may not represent my current level of expertise, they serve as important milestones that have contributed to my growth.',
        },
        {
          id: 6,
          title: 'RitzyThreads',
          img: '/store.png',
          desc: 'A non-responsive clothes store to demonstrate the use of state.',
          demo: 'https://ritzythreads.netlify.app/',
          github: 'https://github.com/justryan55/shopping-cart',
        },
        {
          id: 7,
          title: 'To Do List',
          img: '/to-do-list.jpeg',
          desc: 'A non-responsive Javascript-powered to-do list application that allows users to create individual projects with separate to-do items.',
          demo: '/to-do-list/index.html',
          github: 'https://github.com/justryan55/to-do-list',
        },
        {
          id: 8,
          title: 'Book Library',
          img: '/book-library.png',
          desc: 'A non-responsive Javascript-powered book library that allows users to explore and manage their book collection.',
          demo: '/library/index.html',
          github: 'https://github.com/justryan55/book-library',
        },
        {
          id: 9,
          title: 'Etch-A-Sketch',
          img: '/etch-a-sketch.png',
          desc: 'A non-responsive Javascript-powered sketchpad that features the ability to delete, undo, save and load work.',
          demo: '/etch-a-sketch/index.html',
          github: 'https://github.com/justryan55/etch-a-sketch',
        },
        {
          id: 10,
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
          <h1 class="header">{{ item.title }}</h1>
          <p class="text">{{ item.desc }}</p>
          <div v-if="item.id !== 5" class="btn-container">
            <a class="btn" :href="item.demo" target="_blank">Demo</a>
            <a class="btn" :href="item.github" target="_blank">Github</a>
          </div>
          <div v-else class="archives-btn-container">
            <!-- <p class="btn" @click="this.$router.push('/projects/archives')">Explore</p> -->
          </div>
        </div>
        <div v-if="item.id !== 10" class="arrow-container">
          <BouncingArrow />
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
  min-height: 100vh;
}

.section {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  height: 100vh;
  padding: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  max-width: 100%;
  max-height: 70vh;
  border-radius: 70px;
  padding: 50px;
  transition: transform 0.3s ease;
}

.image:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.information {
  display: grid;
  grid-template-rows: 0.5fr 1.5fr 0.5fr;
  align-items: center;

  /* animation: slideIn 1s ease-in-out; */
}

.btn-container {
  display: flex;
  max-width: 520px;
  max-height: 64px;
}

.archives-btn-container {
  display: flex;
  max-width: 520px;
  max-height: 64px;
  margin-top: 10px;
}

.btn {
  padding: 12px 20px;
  border-radius: 10px;
  background-color: #42b883;
  color: black;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  font-size: 1rem;
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
  font-size: 3rem;
  color: white;
  /* color: #42b883; */
  font-weight: 600;
  /* letter-spacing: 5px; */
}

.text {
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
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

.arrow-container {
  position: fixed;
  bottom: 80px;
  left: 50%;
}
/* 
@media (max-width: 1200px) {
  .header {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    font-size: 2rem;
  }

  .text {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
  }

  .information {
    display: grid;
    grid-template-rows: 0.5fr 1.5fr 0.5fr;
  }

  .btn-container {
    justify-content: space-around;
    padding-top: 0px;
  }

  .archives-btn-container {
    justify-content: space-around;
  }

  .image {
    max-width: 80vw;
    max-height: 50vh;
  }

  .btn {
    padding: 10px;
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
  }
} */

@media (max-width: 1024px) {
  .section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 100px;
    margin: 0;
    gap: 30px;
  }

  .header {
    font-size: 1.5rem;
  }

  .text {
    font-size: 1rem;
    margin: 15px 0px;
  }

  .image {
    max-width: 90vw;
    max-height: 45vh;
    padding: 0px;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }

  .image-container {
    padding: 0;
    margin: 0;
  }

  .information {
    padding: 0px 5px;
  }

  .btn-container {
    justify-content: space-around;
    padding-top: 0px;
  }

  .btn {
    padding: 10px;
    margin-top: 0px;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
  }

  .arrow-container {
    display: none;
  }
}

@media (max-width: 500px) {
  .image {
    max-width: 90vw;
    max-height: 70vh;
    padding: 0px;
    border-radius: 10px;
  }
}
</style>
