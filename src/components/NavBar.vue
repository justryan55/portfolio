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
  <nav class="navbar">
    <a class="navbar-brand" @click="handleClick('/')">
      <div class="brand-icon">RI</div>
      <span>Ryan Irani</span>
    </a>

    <ul class="navbar-menu">
      <li>
        <a :class="['nav-link', { active: isCurrentRoute('/') }]" @click="handleClick('/')">
          <span class="link-text">Home</span>
          <span class="link-dot"></span>
        </a>
      </li>
      <li>
        <a
          :class="['nav-link', { active: isCurrentRoute('/about') }]"
          @click="handleClick('/about')"
        >
          <span class="link-text">About</span>
          <span class="link-dot"></span>
        </a>
      </li>
      <li>
        <a
          :class="['nav-link', { active: isCurrentRoute('/projects') }]"
          @click="handleClick('/projects')"
        >
          <span class="link-text">Projects</span>
          <span class="link-dot"></span>
        </a>
      </li>
      <li>
        <a
          :class="['nav-link', { active: isCurrentRoute('/contact') }]"
          @click="handleClick('/contact')"
        >
          <span class="link-text">Contact</span>
          <span class="link-dot"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(24, 24, 24, 0.98) 0%, rgba(24, 24, 24, 0.92) 100%);
  backdrop-filter: blur(12px);
  border-bottom: 1.5px solid rgba(66, 184, 131, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  box-shadow: 0 8px 32px rgba(66, 184, 131, 0.08);
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 800;
  color: white;
  letter-spacing: 0.5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.brand-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #42b883 0%, #3aa86f 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.navbar-brand:hover .brand-icon {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(66, 184, 131, 0.4);
}

.navbar-brand:hover {
  color: #42b883;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
  flex-grow: 1;
  justify-content: center;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.25px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  position: relative;
  border: 1.5px solid transparent;
}

.link-text {
  transition: color 0.3s ease;
}

.link-dot {
  width: 6px;
  height: 6px;
  background: #42b883;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.nav-link:hover {
  color: #42b883;
  background: rgba(66, 184, 131, 0.1);
}

.nav-link:hover .link-dot {
  opacity: 1;
  transform: scale(1);
}

.nav-link.active {
  color: white;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.2) 0%, rgba(66, 184, 131, 0.08) 100%);
  border: 1.5px solid rgba(66, 184, 131, 0.4);
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.1);
}

.nav-link.active .link-dot {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 768px) {
  .navbar {
    padding: 0.75rem 1.5rem;
    gap: 1.5rem;
  }

  .navbar-brand span {
    display: none;
  }

  .brand-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .navbar-menu {
    gap: 0.25rem;
  }

  .nav-link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .link-text {
    display: none;
  }

  .link-dot {
    display: none;
  }
}
</style>
