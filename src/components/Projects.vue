<script lang="ts">
import { defineComponent } from 'vue'

interface Project {
  id: number
  title: string
  img: string
  technologies: string[]
  desc: string
  longDesc?: string
  features: string[]
  demo: string
  github: string
}

export default defineComponent({
  name: 'Projects',
  data() {
    return {
      selectedProject: null as Project | null,
      items: [
        {
          id: 1,
          title: 'Momentum',
          img: 'momentum.png',
          technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Supabase', 'Capacitor'],
          desc: 'A modern fitness tracking web app that empowers users to log workouts, visualize progress, and stay motivated with friends.',
          longDesc:
            'Momentum is a powerful and intuitive workout tracking platform built with Next.js and TypeScript. It allows users to log exercises, sets, reps, and weights; visualize performance trends; and stay accountable through social fitness features. Designed for lifters and athletes who want flexible, data-driven workout tracking without the clutter.',
          features: [
            'Effortless workout logging with sets, reps, RPE, and notes',
            'Progress visualization with interactive charts and analytics',
            'Social features — connect, challenge, and share workouts with friends',
            'Powerful training tools including warm-up and plate calculators',
            'Custom exercise library and workout templates',
            'Responsive, mobile-friendly design for web and mobile users',
          ],
          demo: 'https://momentumfithub.com/',
        },
        {
          id: 2,
          title: 'O10p',
          img: 'o10pic.png',
          technologies: [
            'Next.js',
            'TypeScript',
            'React',
            'Tailwind CSS',
            'Supabase',
            'Cloudflare',
            'Capacitor',
          ],
          desc: 'A minimalist photo library app that helps users focus on what matters most by curating only 10 meaningful photos per memory.',
          longDesc:
            'O10p is a mindful photo library app built with Next.js, designed to help users declutter their photo collections and preserve what truly matters. Instead of saving hundreds of photos, users select only 10 per month, trip, or person—encouraging reflection and intentional memory-keeping. With a clean interface and simple structure, O10p transforms how we capture, organize, and revisit memories.',
          features: [
            'Minimalist photo organization focused on meaningful memories',
            'Limit of 10 photos per event, trip, or person to encourage reflection',
            'Smart categorization by date, place, or people',
            'Clean, distraction-free interface for mindful browsing',
            'Optimized for mobile',
          ],
          demo: 'https://unreal-assumptions-114281.framer.app/',
        },
        {
          id: 3,
          title: 'Tamagotchi',
          img: 'tamagotchi.png',
          technologies: ['Next.js', 'React Three Fiber', 'three.js', 'TypeScript'],
          desc: 'A 3D virtual pet simulation game where users can nurture their digital companion through daily interactions.',
          longDesc:
            'An immersive 3D virtual pet experience built with modern web technologies. Users can feed, play with, and care for their digital companion while watching it grow and evolve. The game integrates real weather data to create dynamic gameplay scenarios.',
          features: [
            'Interactive 3D graphics rendered with React Three Fiber and three.js',
            'Real-time weather API integration',
            'Persistent state management across sessions',
            'Responsive design across all devices',
            'Smooth animations and particle effects',
          ],
          demo: 'https://tamagotchi-xi.vercel.app/home',
          github: 'https://github.com/justryan55/tamagotchi',
        },
        {
          id: 4,
          title: 'GlobeTrotter',
          img: 'globetrotter.png',
          technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'TypeScript'],
          desc: 'A full-stack travel social platform enabling users to document, share, and discover journeys worldwide.',
          longDesc:
            'A comprehensive travel social network where adventurers can share their experiences, connect with fellow travelers, and discover new destinations. Features include real-time messaging, photo uploads, and location-based discovery.',
          features: [
            'RESTful API with comprehensive user authentication and authorization',
            'In-app messaging system for direct user communication',
            'User profiles with travel history and achievements',
            'Discovery feed with filtering and search capabilities',
          ],
          demo: 'https://travel-project-eight-phi.vercel.app/',
          github: 'https://github.com/justryan55/travel-project',
        },
        {
          id: 5,
          title: 'UmbrellaTalk',
          img: 'umbrella-talk.png',
          technologies: ['Node.js', 'Express', 'React', 'MongoDB', 'TypeScript'],
          desc: 'A real-time messaging application with robust user management, message editing, and profile customization.',
          longDesc:
            'A feature-rich messaging where users can engage in real-time conversations with message editing capabilities, profile customization, and full message history management.',
          features: [
            'MongoDB integration for scalable data persistence',
            'JWT-based authentication with secure session management',
            'Real-time message updates with edit and delete functionality',
            'Message search and conversation filters',
          ],
          demo: 'https://umbrella-talk-api-zeta.vercel.app/',
          github: 'https://github.com/justryan55/umbrella-talk',
        },
        {
          id: 6,
          title: 'Prompter',
          img: 'prompter.png',
          technologies: ['Node.js', 'Express', 'Vue.js', 'TypeScript'],
          desc: 'A daily prompt application designed to encourage meaningful communication between family and friends.',
          longDesc:
            'An innovative app that sends users daily conversation prompts to strengthen relationships and encourage meaningful interactions with loved ones. Perfect for long-distance relationships and busy lifestyles.',
          features: [
            'Automated daily prompt generation and delivery',
            'Backend APIs built with Express for prompt management',
            'Vue.js frontend with responsive, engaging user interface',
            'Email notification system for daily reminders',
            'Prompt history and response tracking',
          ],
          demo: 'https://prompter-git-deployment-ryans-projects-20a8834f.vercel.app/',
          github: 'https://github.com/justryan55/prompter-app',
        },
      ],
    }
  },
  methods: {
    openModal(project: Project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.selectedProject = null
      document.body.style.overflow = 'unset'
    },
    handleBackdropClick(e: MouseEvent) {
      if (e.target === e.currentTarget) {
        this.closeModal()
      }
    },
  },
  beforeUnmount() {
    document.body.style.overflow = 'unset'
  },
})
</script>

<template>
  <div class="projects-container">
    <div class="projects-header">
      <h1 class="projects-title">Featured Projects</h1>
      <p class="projects-subtitle">A selection of my recent work and passion projects</p>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in items"
        :key="project.id"
        class="project-card"
        @click="openModal(project)"
      >
        <div class="card-image-wrapper">
          <img :src="project.img" :alt="project.title" class="card-image" />
          <div class="card-overlay">
            <div class="overlay-badge">View Project</div>
          </div>
        </div>

        <div class="card-body">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-description">{{ project.desc }}</p>

          <div class="card-tech-stack">
            <span
              v-for="tech in project.technologies.slice(0, 2)"
              :key="tech"
              class="card-tech-badge"
            >
              {{ tech }}
            </span>
            <span v-if="project.technologies.length > 2" class="card-tech-badge more-badge">
              +{{ project.technologies.length - 2 }} more
            </span>
          </div>

          <div class="card-arrow">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <transition name="modal-fade">
      <div v-if="selectedProject" class="modal-overlay" @click="handleBackdropClick">
        <div class="modal-window">
          <button class="modal-close-btn" @click="closeModal">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div class="modal-scroll-wrapper">
            <div class="modal-content-single-column">
              <h2 class="modal-title">{{ selectedProject.title }}</h2>

              <div class="modal-tech-section">
                <span class="tech-label">Technologies</span>
                <div class="modal-tech-stack">
                  <span
                    v-for="tech in selectedProject.technologies"
                    :key="tech"
                    class="modal-tech-badge"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="modal-image-section">
                <div class="modal-image-frame">
                  <img
                    :src="selectedProject.img"
                    :alt="selectedProject.title"
                    class="modal-image"
                  />
                </div>
              </div>

              <p class="modal-description">
                {{ selectedProject.longDesc || selectedProject.desc }}
              </p>

              <div v-if="selectedProject.features" class="modal-features-section">
                <h3 class="features-heading">Key Features</h3>
                <ul class="features-list">
                  <li
                    v-for="(feature, index) in selectedProject.features"
                    :key="index"
                    class="feature-item"
                  >
                    <span class="feature-check">✓</span>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>

              <div class="modal-actions">
                <a
                  class="action-btn primary-btn"
                  :href="selectedProject.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>Live Demo</span>
                </a>
                <a
                  v-if="selectedProject.github"
                  class="action-btn secondary-btn"
                  :href="selectedProject.github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    />
                  </svg>
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 2rem;
}

.projects-header {
  text-align: center;
  margin-bottom: 5rem;
  animation: fadeInDown 0.6s ease-out;
}

.projects-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  color: white;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.projects-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.project-card {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.08) 0%, rgba(66, 184, 131, 0.02) 100%);
  border: 1.5px solid rgba(66, 184, 131, 0.25);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  backdrop-filter: blur(8px);
}

.project-card:hover {
  transform: translateY(-12px);
  border-color: rgba(66, 184, 131, 0.6);
  box-shadow:
    0 25px 50px rgba(66, 184, 131, 0.2),
    0 0 0 1px rgba(66, 184, 131, 0.1);
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.15) 0%, rgba(66, 184, 131, 0.05) 100%);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 11;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(24, 24, 24, 0.9), rgba(66, 184, 131, 0.05));
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.project-card:hover .card-image {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(24, 24, 24, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  backdrop-filter: blur(2px);
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.overlay-badge {
  background: rgba(66, 184, 131, 0.95);
  color: #181818;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.card-body {
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  position: relative;
}

.card-title {
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.25px;
}

.card-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

.card-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.5rem;
}

.card-tech-badge {
  background: rgba(66, 184, 131, 0.2);
  color: #42b883;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(66, 184, 131, 0.35);
}

.card-tech-badge.more-badge {
  background: rgba(66, 184, 131, 0.1);
}

.card-arrow {
  color: #42b883;
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: 0.5rem;
}

.project-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(24, 24, 24, 0.95);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
  overflow-y: auto;
}

.modal-window {
  position: relative;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.1) 0%, rgba(24, 24, 24, 0.6) 100%);
  border: 1.5px solid rgba(66, 184, 131, 0.3);
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow:
    0 50px 100px rgba(66, 184, 131, 0.2),
    0 0 0 1px rgba(66, 184, 131, 0.1);
  animation: modalPopIn 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.modal-window::-webkit-scrollbar {
  width: 10px;
}

.modal-window::-webkit-scrollbar-track {
  background: transparent;
}

.modal-window::-webkit-scrollbar-thumb {
  background: rgba(66, 184, 131, 0.5);
  border-radius: 5px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.modal-window::-webkit-scrollbar-thumb:hover {
  background: rgba(66, 184, 131, 0.8);
  background-clip: padding-box;
}

.modal-window {
  scrollbar-color: rgba(66, 184, 131, 0.5) transparent;
  scrollbar-width: thin;
}

.modal-scroll-wrapper {
  width: 100%;
  padding: 3rem;
}

.modal-close-btn {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1010;
  background: rgba(66, 184, 131, 0.15);
  border: 1.5px solid rgba(66, 184, 131, 0.4);
  color: #42b883;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}

.modal-close-btn:hover {
  background: rgba(66, 184, 131, 0.25);
  border-color: #42b883;
  transform: rotate(90deg);
}

.modal-content-single-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.modal-image-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.modal-image-frame {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: black;
  border: 1px solid rgba(66, 184, 131, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 100%;
  display: block;
}

.modal-content-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.modal-title {
  font-size: 2.75rem;
  color: white;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.5px;
}

.modal-tech-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-label {
  font-size: 0.85rem;
  color: #42b883;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.modal-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.modal-tech-badge {
  background: rgba(66, 184, 131, 0.15);
  color: #42b883;
  padding: 0.7rem 1.1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1.5px solid rgba(66, 184, 131, 0.4);
  transition: all 0.3s ease;
}

.modal-tech-badge:hover {
  background: rgba(66, 184, 131, 0.25);
  border-color: #42b883;
  transform: translateY(-2px);
}

.modal-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin: 0;
  letter-spacing: 0.3px;
}

.modal-features-section {
  padding: 1.5rem;
  background: rgba(66, 184, 131, 0.05);
  border: 1px solid rgba(66, 184, 131, 0.2);
  border-radius: 12px;
}

.features-heading {
  font-size: 0.9rem;
  color: #42b883;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 1.25rem 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.6;
}

.feature-check {
  color: #42b883;
  font-weight: 800;
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.75rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  border: none;
  cursor: pointer;
  letter-spacing: 0.3px;
}

.primary-btn {
  background: linear-gradient(135deg, #42b883 0%, #3aa86f 100%);
  color: #181818;
  box-shadow: 0 8px 24px rgba(66, 184, 131, 0.25);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(66, 184, 131, 0.35);
}

.secondary-btn {
  background: transparent;
  color: #42b883;
  border: 2px solid #42b883;
}

.secondary-btn:hover {
  background: rgba(66, 184, 131, 0.1);
  transform: translateY(-3px);
  border-color: #3aa86f;
  color: #3aa86f;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes modalPopIn {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .projects-container {
    padding: 3rem 1.5rem;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  .modal-scroll-wrapper {
    padding: 2.5rem;
  }

  .modal-content-single-column {
    gap: 2rem;
  }

  .modal-title {
    font-size: 2rem;
  }

  .modal-close-btn {
    top: 1.5rem;
    right: 1.5rem;
  }
}

@media (max-width: 768px) {
  .projects-container {
    padding: 2rem 1rem;
  }

  .projects-header {
    margin-bottom: 3rem;
  }

  .projects-title {
    font-size: 2rem;
  }

  .projects-subtitle {
    font-size: 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card {
    border-radius: 12px;
  }

  .card-body {
    padding: 1.5rem;
  }

  .modal-overlay {
    padding: 1rem;
  }

  .modal-scroll-wrapper {
    padding: 2rem;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-description {
    font-size: 1rem;
  }

  .action-btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }

  .modal-close-btn {
    width: 40px;
    height: 40px;
    top: 1rem;
    right: 1rem;
  }

  .modal-close-btn svg {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 640px) {
  .projects-title {
    font-size: 1.65rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-description {
    font-size: 0.9rem;
  }

  .modal-features-section {
    display: none;
  }

  .modal-actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .action-btn {
    width: 100%;
  }

  .modal-tech-stack {
    gap: 0.5rem;
  }

  .modal-tech-badge {
    font-size: 0.75rem;
    padding: 0.4rem 0.75rem;
  }

  .modal-features {
    display: none;
  }

  .modal-links {
    gap: 0.75rem;
  }

  .modal-link {
    flex: 1;
    justify-content: center;
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
  }

  .modal-link svg {
    display: none;
  }
}
</style>
