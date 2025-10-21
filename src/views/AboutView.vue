<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'AboutView',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      itemsToShow: 5,
      timeline: [
        {
          year: '2019-2024',
          title: 'Physiotherapist',
          description:
            'Spent 5+ years in clinical practice, developing strong diagnostic skills, patient communication, and systematic problem-solving approaches.',
          highlights: ['Clinical Assessment', 'Patient Care', 'Evidence-Based Practice'],
        },
        {
          year: '2024',
          title: 'Career Transition',
          description:
            'Made the leap into software development, applying healthcare experience to build better user-focused applications.',
          highlights: ['Self-Taught', 'Intensive Learning', 'Career Pivot'],
        },
        {
          year: '2024-Present',
          title: 'Freelance Web Developer',
          description:
            'Working on production client projects: Shopify customizations, Webflow rebuilds, WordPress development, and custom code. Built and shipped 2 applications to the app store.',
          highlights: ['Client Work', 'Custom Code', '2 Apps Shipped'],
        },
      ],
      technologies: [
        { name: 'JavaScript', icon: 'javascript-original.svg', category: 'Core' },
        { name: 'TypeScript', icon: 'typescript-original.svg', category: 'Core' },
        { name: 'React', icon: 'react-original.svg', category: 'Frontend' },
        { name: 'Vue.js', icon: 'vue.svg', category: 'Frontend' },
        { name: 'HTML5', icon: 'html5-original.svg', category: 'Frontend' },
        { name: 'CSS3', icon: 'css3-original.svg', category: 'Frontend' },
        { name: 'Node.js', icon: 'nodejs-original-wordmark.svg', category: 'Backend' },
        { name: 'Supabase', icon: 'supabase-original.svg', category: 'Backend' },
        { name: 'Three.js', icon: 'threejs-original-wordmark.svg', category: '3D Graphics' },
        { name: 'Next', icon: 'nextjs-original.svg', category: 'Frontend' },
        { name: 'Capacitor', icon: 'capacitor-original.svg', category: 'Mobile' },
      ],
    }
  },
  methods: {
    handleResize() {
      if (typeof window === 'undefined') return

      if (window.innerWidth <= 640) {
        this.itemsToShow = 2
      } else if (window.innerWidth <= 768) {
        this.itemsToShow = 3
      } else if (window.innerWidth <= 1024) {
        this.itemsToShow = 4
      } else {
        this.itemsToShow = 5
      }
    },
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
})
</script>

<template>
  <main class="about-container">
    <div class="about-header">
      <h1 class="about-title">Web Developer</h1>
      <p class="about-subtitle">12 months building and shipping client projects and applications</p>
    </div>

    <section class="timeline-section">
      <h2 class="section-title">My Development Journey</h2>
      <div class="timeline">
        <div
          v-for="(item, index) in timeline"
          :key="index"
          class="timeline-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
            <div class="timeline-line" v-if="index < timeline.length - 1"></div>
          </div>
          <div class="timeline-content">
            <span class="timeline-year">{{ item.year }}</span>
            <h3 class="timeline-title">{{ item.title }}</h3>
            <p class="timeline-description">{{ item.description }}</p>
            <div class="timeline-highlights">
              <span
                v-for="(highlight, hIndex) in item.highlights"
                :key="hIndex"
                class="highlight-tag"
              >
                {{ highlight }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tech-section">
      <h2 class="section-title">Technologies I Use</h2>
      <p class="section-description">
        Tools I use to build modern, scalable, and maintainable applications
      </p>

      <div class="carousel-container">
        <Carousel
          :items-to-show="itemsToShow"
          :wrap-around="true"
          :autoplay="3000"
          :transition="500"
          :mouse-drag="true"
        >
          <Slide v-for="tech in technologies" :key="tech.name" class="carousel-slide">
            <div class="tech-item">
              <div class="tech-image-container">
                <img :src="tech.icon" :alt="tech.name" class="tech-image" />
              </div>
              <span class="tech-name">{{ tech.name }}</span>
              <span class="tech-category">{{ tech.category }}</span>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 8rem 2rem 3rem;
  min-height: 100vh;
}

.about-header {
  text-align: center;
  margin-bottom: 5rem;
  animation: fadeInDown 0.6s ease-out;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(66, 184, 131, 0.1);
  border: 1px solid rgba(66, 184, 131, 0.3);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #42b883;
  margin-bottom: 1.5rem;
}

.about-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: white;
  font-weight: 800;
  margin: 0 0 1rem 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.about-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.why-section {
  margin-bottom: 6rem;
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: white;
  font-weight: 800;
  margin: 0 0 1rem 0;
  text-align: center;
  letter-spacing: -0.5px;
}

.section-description {
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 3rem 0;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.why-card {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.08) 0%, rgba(66, 184, 131, 0.02) 100%);
  border: 1.5px solid rgba(66, 184, 131, 0.25);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.why-card:hover {
  transform: translateY(-8px);
  border-color: rgba(66, 184, 131, 0.6);
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.15) 0%, rgba(66, 184, 131, 0.05) 100%);
  box-shadow: 0 25px 50px rgba(66, 184, 131, 0.2);
}

.why-card h3 {
  font-size: 1.35rem;
  color: white;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.why-card p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin: 0;
}

.timeline-section {
  margin-bottom: 6rem;
}

.timeline {
  max-width: 900px;
  margin: 3rem auto 0;
  position: relative;
}

.timeline-item {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  animation: fadeInLeft 0.6s ease-out both;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #42b883 0%, #3aa86f 100%);
  border-radius: 50%;
  box-shadow: 0 0 0 8px rgba(66, 184, 131, 0.15);
  flex-shrink: 0;
}

.timeline-line {
  width: 2px;
  flex-grow: 1;
  background: linear-gradient(180deg, rgba(66, 184, 131, 0.5) 0%, rgba(66, 184, 131, 0.1) 100%);
  margin-top: 1rem;
}

.timeline-content {
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.08) 0%, rgba(66, 184, 131, 0.02) 100%);
  border: 1.5px solid rgba(66, 184, 131, 0.25);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  transition: all 0.4s ease;
}

.timeline-content:hover {
  border-color: rgba(66, 184, 131, 0.5);
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.12) 0%, rgba(66, 184, 131, 0.04) 100%);
}

.timeline-year {
  display: inline-block;
  font-size: 0.85rem;
  color: #42b883;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.5rem;
  color: white;
  font-weight: 700;
  margin: 0.5rem 0;
}

.timeline-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin: 0.75rem 0 1rem 0;
}

.timeline-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.highlight-tag {
  padding: 0.4rem 0.9rem;
  background: rgba(66, 184, 131, 0.15);
  border: 1px solid rgba(66, 184, 131, 0.3);
  border-radius: 8px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.tech-section {
  margin-bottom: 6rem;
}
.carousel-container {
  margin-top: 3rem;
}

.carousel-slide {
  padding: 0.75rem;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem 3rem;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.08) 0%, rgba(66, 184, 131, 0.02) 100%);
  border: 1.5px solid rgba(66, 184, 131, 0.25);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  height: 220px;
  width: 100%;
  justify-content: center;
}

.tech-item:hover {
  transform: translateY(-6px);
  border-color: rgba(66, 184, 131, 0.6);
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.15) 0%, rgba(66, 184, 131, 0.05) 100%);
  box-shadow: 0 15px 40px rgba(66, 184, 131, 0.15);
}

.tech-image-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: brightness(0.9) contrast(1.1);
  transition: all 0.4s ease;
}

.tech-item:hover .tech-image {
  filter: brightness(1) contrast(1.2);
  transform: scale(1.1);
}

.tech-name {
  font-size: 0.9rem;
  color: white;
  font-weight: 600;
  text-align: center;
}

.tech-category {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background: rgba(66, 184, 131, 0.1);
  border: 1.5px solid rgba(66, 184, 131, 0.3);
  border-radius: 12px;
  color: #42b883;
  width: 48px;
  height: 48px;
  transition: all 0.3s ease;
  display: none;
}

:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background: rgba(66, 184, 131, 0.2);
  border-color: rgba(66, 184, 131, 0.6);
}

:deep(.carousel__prev:active),
:deep(.carousel__next:active) {
  transform: scale(0.95);
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 1024px) {
  .about-container {
    padding: 6rem 1.5rem 2rem;
  }

  .tech-item {
    height: 200px;
    padding: 1.75rem 2.5rem;
  }
}

@media (max-width: 768px) {
  .about-container {
    padding: 5rem 1rem 6rem;
  }

  .tech-item {
    height: 180px;
    padding: 1.5rem 2rem;
    gap: 0.6rem;
  }

  .tech-image-container {
    width: 50px;
    height: 50px;
  }

  .tech-name {
    font-size: 0.85rem;
  }

  .tech-category {
    font-size: 0.65rem;
  }

  .carousel-slide {
    padding: 0.15rem;
  }
}

@media (max-width: 640px) {
  .about-container {
    padding: 4rem 1rem 6rem;
  }

  .tech-item {
    height: 160px;
    padding: 1.25rem 1.5rem;
    gap: 0.5rem;
  }

  .tech-image-container {
    width: 45px;
    height: 45px;
  }

  .tech-name {
    font-size: 0.8rem;
  }

  .tech-category {
    font-size: 0.6rem;
  }

  .carousel-slide {
    padding: 0.5rem;
  }

  .timeline-item {
    grid-template-columns: 40px 1fr;
    padding: 0 5px;
  }
}
</style>
