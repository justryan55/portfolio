<script lang="ts">
import { defineComponent } from 'vue'
import emailjs from '@emailjs/browser'

export default defineComponent({
  name: 'Contact',
  data() {
    return {
      sent: false,
      isSubmitting: false,
      formData: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    handleSubmit(e: Event) {
      e.preventDefault()
      this.sendEmail()
    },

    sendEmail() {
      this.isSubmitting = true
      emailjs
        .sendForm('service_mp96p5t', 'template_8gg2uao', this.$refs.form as HTMLFormElement, {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            this.sent = true
            this.isSubmitting = false
            this.formData = { name: '', email: '', message: '' }
            setTimeout(() => {
              this.sent = false
            }, 5000)
          },
          (error) => {
            console.log('FAILED...', error.text)
            this.isSubmitting = false
          },
        )
    },
  },
})
</script>

<template>
  <main class="contact-container">
    <div class="contact-header">
      <h1 class="contact-title">Get In Touch</h1>
      <p class="contact-subtitle">Let's discuss your project or just say hello</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <h2 class="info-title">I'd Love to Hear From You</h2>
        <p class="info-text">
          Whether you have a question about a project, want to collaborate, or just want to chat
          about web development, feel free to reach out. I'll get back to you as soon as possible.
        </p>

        <div class="contact-details">
          <div class="detail-item">
            <div class="detail-icon">
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
            </div>
            <div>
              <p class="detail-label">Email</p>
              <p class="detail-value">Get in touch via email</p>
            </div>
          </div>

          <div class="detail-item">
            <div class="detail-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="1" />
                <path
                  d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m2.12-2.12l4.24-4.24"
                />
              </svg>
            </div>
            <div>
              <p class="detail-label">Available</p>
              <p class="detail-value">Open to new opportunities</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-form-wrapper">
        <form ref="form" @submit="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name" class="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="formData.name"
              class="form-input"
              placeholder="John Doe"
              required
              pattern="[A-Za-z ]+"
              title="Only letters and spaces are allowed"
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="formData.email"
              class="form-input"
              placeholder="john@example.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              v-model="formData.message"
              class="form-textarea"
              placeholder="Tell me about your project..."
              required
              minlength="10"
              rows="6"
            />
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>

          <transition name="fade-in">
            <div v-if="sent" class="success-message">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contact-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 2rem;
  min-height: 100vh;
}

.contact-header {
  text-align: center;
  margin-bottom: 5rem;
  animation: fadeInDown 0.6s ease-out;
}

.contact-title {
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  color: white;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.contact-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.65);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  animation: fadeInLeft 0.6s ease-out 0.2s both;
}

.info-title {
  font-size: 2rem;
  color: white;
  font-weight: 800;
  margin: 0 0 1rem 0;
  letter-spacing: -0.25px;
}

.info-text {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0 0 2.5rem 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.08) 0%, rgba(66, 184, 131, 0.02) 100%);
  border: 1.5px solid rgba(66, 184, 131, 0.25);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.detail-item:hover {
  border-color: rgba(66, 184, 131, 0.5);
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.12) 0%, rgba(66, 184, 131, 0.04) 100%);
  transform: translateX(4px);
}

.detail-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.2) 0%, rgba(66, 184, 131, 0.1) 100%);
  border: 1.5px solid rgba(66, 184, 131, 0.4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.detail-item:hover .detail-icon {
  transform: scale(1.1);
}

.detail-label {
  font-size: 0.85rem;
  color: #42b883;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.detail-value {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0.25rem 0 0 0;
}

.contact-form-wrapper {
  animation: fadeInRight 0.6s ease-out 0.2s both;
}

.contact-form {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.08) 0%, rgba(66, 184, 131, 0.02) 100%);
  border: 1.5px solid rgba(66, 184, 131, 0.25);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.contact-form:hover {
  border-color: rgba(66, 184, 131, 0.4);
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.1) 0%, rgba(66, 184, 131, 0.03) 100%);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.form-label {
  font-size: 0.95rem;
  color: #42b883;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.form-input,
.form-textarea {
  background: rgba(24, 24, 24, 0.6);
  border: 1.5px solid rgba(66, 184, 131, 0.2);
  border-radius: 10px;
  padding: 0.875rem 1rem;
  color: white;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:focus,
.form-textarea:focus {
  background: rgba(24, 24, 24, 0.8);
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 1rem 1.75rem;
  background: linear-gradient(135deg, #42b883 0%, #3aa86f 100%);
  color: #181818;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 8px 24px rgba(66, 184, 131, 0.25);
  text-transform: uppercase;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(66, 184, 131, 0.35);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(66, 184, 131, 0.15);
  border: 1.5px solid #42b883;
  border-radius: 10px;
  color: #42b883;
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 1rem;
}

.success-message svg {
  flex-shrink: 0;
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.3s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .contact-container {
    padding: 3rem 1.5rem;
  }

  .contact-header {
    margin-bottom: 3rem;
  }

  .contact-title {
    font-size: 2.5rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .info-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .contact-container {
    padding: 2rem 1rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-subtitle {
    font-size: 1rem;
  }

  .info-text {
    font-size: 1rem;
  }

  .contact-details {
    gap: 1rem;
  }

  .detail-item {
    padding: 1.25rem;
  }

  .contact-form {
    padding: 1.75rem;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  .form-textarea {
    min-height: 100px;
  }
}

@media (max-width: 640px) {
  .contact-container {
    padding: 1.5rem;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .contact-subtitle {
    font-size: 0.95rem;
  }

  .info-title {
    font-size: 1.25rem;
  }

  .info-text {
    font-size: 0.9rem;
  }

  .detail-item {
    padding: 1rem;
    gap: 1rem;
  }

  .detail-icon {
    width: 40px;
    height: 40px;
  }

  .detail-label {
    font-size: 0.8rem;
  }

  .detail-value {
    font-size: 0.9rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .form-input,
  .form-textarea {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }

  .submit-btn {
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }

  .success-message {
    font-size: 0.9rem;
    gap: 0.5rem;
  }
}
</style>
