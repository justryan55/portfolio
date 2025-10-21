<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      startYear: 2024,
    }
  },
  computed: {
    yearsOfExperience() {
      const months = (this.currentYear - this.startYear) * 12 + (new Date().getMonth() + 1)
      return months >= 12 ? `${Math.floor(months / 12)}+` : `${months}m`
    },
  },
  methods: {
    handleClick(page: string) {
      this.$router.push(page)
    },
  },
})
</script>

<template>
  <main class="home-container">
    <section class="hero-section">
      <vue-particles
        id="tsparticles"
        :options="{
          background: { color: { value: '#181818' } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'grab' },
            },
            modes: {
              push: { quantity: 4 },
              grab: { distance: 150, links: { opacity: 1 } },
            },
          },
          particles: {
            color: { value: '#42b883' },
            links: {
              color: '#42b883',
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }"
      />

      <div class="hero-gradient" />

      <div class="hero-content">
        <div class="hero-text">
          <div class="hero-greeting">
            <span class="greeting-text">Hello, I'm Ryan Irani</span>
          </div>
          <h1 class="hero-title">
            Freelance developer. I work on <span class="highlight">production websites</span> for
            clients.
          </h1>
          <p class="hero-description">
            12 months of agency experience delivering Shopify custom builds, Webflow redesigns,
            WordPress maintenance, and live site improvements. I also develop and launch my own
            projects on the side.
          </p>
        </div>

        <div class="hero-cta">
          <button class="btn btn-primary" @click="handleClick('/projects')">
            <span>View My Projects</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button class="btn btn-secondary" @click="handleClick('/contact')">
            <span>Get In Touch</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-container {
  width: 100%;
}

.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: 8rem 2rem 4rem;
  overflow: hidden;
}

#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(66, 184, 131, 0.08) 0%, transparent 60%);
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: 900px;
  text-align: center;
  animation: fadeInUp 0.8s ease-out;
}

.hero-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #42b883 0%, #3aa86f 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  color: white;
  box-shadow: 0 12px 40px rgba(66, 184, 131, 0.3);
  animation: float 3s ease-in-out infinite;
}

.avatar-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(66, 184, 131, 0.1);
  border: 1px solid rgba(66, 184, 131, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #42b883;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
}

.hero-greeting {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.greeting-emoji {
  font-size: 1.5rem;
  animation: wave 2s ease-in-out infinite;
}

.greeting-text {
  background: linear-gradient(135deg, #42b883, #3aa86f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: white;
  letter-spacing: -0.5px;
  margin: 0;
  line-height: 1.2;
}

.highlight {
  background: linear-gradient(135deg, #42b883 0%, #3aa86f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.15rem;
  line-height: 1.8;
  margin: 0;
  max-width: 700px;
  color: white;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  text-decoration: none;
  letter-spacing: 0.5px;
}

.btn-primary {
  background: linear-gradient(135deg, #42b883 0%, #3aa86f 100%);
  color: #181818;
  box-shadow: 0 8px 24px rgba(66, 184, 131, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(66, 184, 131, 0.4);
}

.btn-secondary {
  background: rgba(66, 184, 131, 0.1);
  color: #42b883;
  border: 1.5px solid rgba(66, 184, 131, 0.4);
}

.btn-secondary:hover {
  background: rgba(66, 184, 131, 0.15);
  border-color: #42b883;
  transform: translateY(-3px);
}

.btn svg {
  transition: transform 0.3s ease;
}

.btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 6rem 1.5rem 3rem;
  }

  .avatar-circle {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .btn {
    width: 100%;
  }

  .hero-cta {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 5rem 1rem 2rem;
  }
}
</style>
