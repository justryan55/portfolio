<script lang="ts">
export default {
  data() {
    return {
      arrowOpacity: 1,
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop
      this.arrowOpacity = scrollTop > 200 ? 0 : 1
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<template>
  <div class="arrow" :style="{ opacity: arrowOpacity }">
    <img src="/arrow-down.svg" alt="arrow" class="arrow" />
  </div>
</template>

<style scoped>
.arrow {
  animation: bouncing 1s infinite ease-in-out;
  display: block;
  height: 50px;
  position: absolute;
  opacity: 1;
  transition:
    opacity 0.5s ease,
    visibility 0.5s ease,
    bottom 0.5s ease;
}

@keyframes bouncing {
  0% {
    bottom: 0;
  }
  50% {
    bottom: 20px;
  }
  100% {
    bottom: 0;
  }
}
</style>
