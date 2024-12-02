<script lang="ts">
import { defineComponent } from 'vue'
import Card from '../components/Card.vue'
import { Carousel, Slide } from 'vue3-carousel'

export default defineComponent({
  name: 'Archives',
  components: { Card, Carousel, Slide },
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
          itemsToShow: 10,
          itemsToScroll: 1,
        },
      },
    }
  },
})
</script>

<template>
  <main class="container">
    <div class="header">The Archives</div>
    <div class="card-container">
      <Card
        v-for="item in items"
        :key="item.id"
        :image="item.img"
        :title="item.title"
        :desc="item.desc"
        :demo="item.demo"
        :github="item.github"
      />
      <!-- <carousel
        :transition="1000"
        :wrap-around="true"
        :mouse-drag="true"
        :breakpoints="breakpoints"
      >
        <slide v-for="(item, index) in items" :key="item.id">
          <Card :image="item.img" :title="item.title" :desc="item.desc" />
        </slide>
      </carousel> -->
    </div>
  </main>
</template>

<style scoped>
.header {
  position: relative;
  top: 100px;
  letter-spacing: 2px;
  color: white;
  font-size: 2.5rem;
  width: 100vw;
  text-align: center;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
