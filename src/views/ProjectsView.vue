<script setup lang="ts">
import Projects from '@/components/Projects.vue'
</script>

<template>
  <main class="container">
    <h1 class="header"></h1>
    <div>
      <Projects />
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

@media (max-width: 1024px) {
  .header {
    visibility: hidden;
  }
}

@media (max-width: 768px) {
  .header {
    display: none;

    top: 50px;
    background-color: #181818;
  }
}
</style>
