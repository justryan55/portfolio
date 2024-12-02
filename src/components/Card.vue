<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {
    image: String,
    title: String,
    desc: String,
    demo: String,
    github: String,
  },
  data() {
    return {}
  },
  methods: {
    handleClick(itemPath) {
      // this.$router.push(itemPath)
      window.location.href = itemPath
    },
  },
})
</script>

<template>
  <div class="card">
    <a :href="demo" target="_blank"><img :src="image" style="border-radius: 20px" /></a>
    <p class="title">{{ title }}</p>
    <p class="desc">{{ desc }}</p>
    <div class="btn-container">
      <p class="btn" @click="handleClick(demo)">Demo</p>
      <a class="btn" :href="github" target="_blank">Github</a>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-rows: 60% 15% 15% 10%;
  flex-direction: column;
  align-items: center;
  /* width: 300px; */
  width: 33%;
  height: 500px;
  margin-top: 150px;
  border: 1px white solid;
  background-color: #2a2a2a;
  /* overflow: hidden; */
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

.title {
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
}

.desc {
  font-size: 1rem;
  margin: 10px 15px;
  text-align: center;
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
}

.btn-container {
  display: flex;
  justify-content: space-around;

  width: 100%;
  padding: 10px 0;
}

.btn {
  cursor: pointer;
  color: black;
  padding: 5px 15px;
  background-color: #42b883;
  border-radius: 10px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  font-weight: 500;
}

.btn:hover {
  cursor: pointer;
  background-color: #42b883;
  border: 0px;
  /* color: white; */
  font-weight: 600;
  transform: translateY(-2px);
}

a {
  text-decoration: none;
  color: white;
  padding: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;

  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

p {
  color: white;
}
</style>
