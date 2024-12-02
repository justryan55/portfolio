<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Projects',
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
          img: 'UmbrellaTalk001.png',
          desc: 'A messaging platform where users can chat, edit messages, update profiles, and manage their data.',
          demo: 'https://umbrella-talk-api-zeta.vercel.app/',
          github: 'https://github.com/justryan55/umbrella-talk',
        },
        {
          id: 3,
          title: 'Prompter',
          img: 'Prompter001.png',
          desc: 'An application that encourages users to send daily messages to their family and friends by providing a new prompt each day.',
          demo: '',
          github: '',
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
          desc: 'Discover and explore previous projects, showcasing a range of work and highlighting my development over time.',
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

@media (max-width: 768px) {
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
