<script lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import MobileNavBar from './components/MobileNavBar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { RouterView, NavBar, MobileNavBar },
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    isMobile(): boolean {
      return this.windowWidth <= 768
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  },
  methods: {
    handleWindowSizeChange() {
      this.windowWidth = window.innerWidth
    },
  },
})
</script>

<template>
  <MobileNavBar v-if="isMobile" />
  <NavBar v-else />
  <RouterView />
</template>

<style scoped></style>
