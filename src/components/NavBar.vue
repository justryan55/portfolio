<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'NavigationBar',
  methods: {
    handleClick(page: string) {
      this.$router.push(page)
    },
    isCurrentRoute(page: string) {
      const route = useRoute()
      return route.path === page
    },
  },
})
</script>

<template>
  <nav class="container">
    <p class="header">Ryan Irani</p>
    <div>
      <p :class="isCurrentRoute('/') ? 'active' : 'item'" @click="handleClick('/')">Home</p>
      <p :class="isCurrentRoute('/about') ? 'active' : 'item'" @click="handleClick('/about')">
        About
      </p>
      <p :class="isCurrentRoute('/projects') ? 'active' : 'item'" @click="handleClick('/projects')">
        Projects
      </p>
      <p :class="isCurrentRoute('/contact') ? 'active' : 'item'" @click="handleClick('/contact')">
        Contact
      </p>
    </div>
  </nav>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px 30px;
  width: 100%;
  color: #42b883;
  background-color: #2a2a2a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: linear-gradient(145deg, #333333, #2a2a2a);
  z-index: 1000;
}

.header {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 0.3s ease;
}

.header:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.container > div {
  display: flex;
  gap: 40px;
}

.item {
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.item:hover {
  cursor: pointer;
  background-color: #42b883;
  transform: translateY(-2px);
}

.active {
  font-size: 1.1rem;
  font-weight: 400;
  color: #42b883;
  padding: 8px 16px;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.active:hover {
  cursor: pointer;
  background-color: #42b883;
  color: white;
  transform: translateY(-2px);
}
</style>
