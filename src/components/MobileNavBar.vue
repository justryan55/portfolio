<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MobileNavBar',
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
  <nav class="mobile-navbar">
    <ul class="mobile-nav-menu">
      <li>
        <a
          class="mobile-nav-link"
          :class="{ active: isCurrentRoute('/') }"
          @click="handleClick('/')"
          title="Home"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M3 12h2l8-9l8 9h2M5 10v11a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-11" />
          </svg>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a
          class="mobile-nav-link"
          :class="{ active: isCurrentRoute('/about') }"
          @click="handleClick('/about')"
          title="About"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
          </svg>
          <span>About</span>
        </a>
      </li>
      <li>
        <a
          class="mobile-nav-link"
          :class="{ active: isCurrentRoute('/projects') }"
          @click="handleClick('/projects')"
          title="Projects"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 3l-4 4-4-4" />
          </svg>
          <span>Projects</span>
        </a>
      </li>
      <li>
        <a
          class="mobile-nav-link"
          :class="{ active: isCurrentRoute('/contact') }"
          @click="handleClick('/contact')"
          title="Contact"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          <span>Contact</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.mobile-navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: linear-gradient(180deg, rgba(24, 24, 24, 0.85) 0%, rgba(24, 24, 24, 0.95) 100%);
  backdrop-filter: blur(8px);
  border-top: 1.5px solid rgba(66, 184, 131, 0.15);
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
  display: none;
}

.mobile-nav-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.mobile-nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  border-radius: 12px;
}

.mobile-nav-link svg {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
}

.mobile-nav-link:active {
  transform: scale(0.95);
}

.mobile-nav-link.active {
  color: #42b883;
  background: rgba(66, 184, 131, 0.15);
}

.mobile-nav-link.active svg {
  filter: drop-shadow(0 0 4px rgba(66, 184, 131, 0.5));
}

@media (max-width: 768px) {
  .mobile-navbar {
    display: block;
  }
}
</style>
