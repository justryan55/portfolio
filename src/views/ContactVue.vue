<script lang="ts">
import { defineComponent } from 'vue'
import emailjs from '@emailjs/browser'

export default defineComponent({
  name: 'Contact',
  data() {
    return {
      sent: false,
    }
  },
  methods: {
    handleSubmit(e: Event) {
      e.preventDefault()
      this.sendEmail()
    },

    sendEmail() {
      emailjs
        .sendForm('service_mp96p5t', 'template_8gg2uao', this.$refs.form as HTMLFormElement, {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        })
        .then(
          () => {
            this.sent = true

            console.log('SUCCESS!')
          },
          (error) => {
            console.log('FAILED...', error.text)
          },
        )
    },
  },
  mounted() {
    const svg = document.querySelector('.svg-container svg') as HTMLElement
    const contactForm = document.getElementById('contact-form') as HTMLElement

    if (svg && contactForm) {
      svg.addEventListener('animationend', () => {
        svg.style.display = 'none'

        contactForm.classList.remove('hidden')
        contactForm.classList.add('visible')
      })
    }
  },
})
</script>

<template>
  <main class="container">
    <h1 class="header">Let's Work Together</h1>
    <div class="svg-container">
      <svg
        fill="none"
        stroke="#42b883"
        stroke-width="2"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="600px"
        height="600px"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
        xml:space="preserve"
      >
        <path
          class="draw"
          d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
	c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
        />
        <path
          class="draw"
          d="M256,176H128v160h128h128V176H256z M256,192h89.719L256,255.75L166.281,192H256z M144,196.531l54.5,36.859L144,292.812
	V196.531z M256,320h-92.406l45.562-79.422L256,272.25l46.844-31.672L348.406,320H256z M368,292.812l-54.5-59.422l54.5-36.859
	V292.812z"
        />
      </svg>
    </div>
    <div class="contact-form hidden" id="contact-form">
      <h2 class="contact-header">Contact</h2>
      <p class="contact-text">
        Have a question or want to work together? Leave your details and I'll get back to you as
        soon as possible.
      </p>
      <form ref="form" @submit="handleSubmit">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            pattern="[A-Za-z ]+"
            title="Only letters and spaces are allowed."
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            class="input-email"
            placeholder="Email"
            required
          />
        </label>
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            class="input-message"
            placeholder="Message"
            required
            minlength="10"
          />
        </label>
        <button type="submit" class="btn">Submit</button>
      </form>
      <p v-if="sent" class="sent-message">Message has been sent</p>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.header {
  position: fixed;
  top: 100px;
  letter-spacing: 2px;
  color: white;
  font-size: 2.5rem;
  width: 100vw;
  text-align: center;
}

.contact-form {
  position: absolute;
  color: white;
  text-align: center;
  padding: 50px;
  font-size: 2em;
  background-color: rgb(0, 0, 0, 30%);
  border-radius: 20px;
  margin-top: 50px;
}

.contact-header {
  font-size: 1.75rem;
}

.contact-text {
  margin: 0 auto;
  font-size: 0.5em;
  padding-top: 15px;
  padding-bottom: 10px;
}

input {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

textarea {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  display: inline-block;
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  box-sizing: border-box;
  resize: none;
  margin-top: 12px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  padding: 10px 20px;
  border: none;
  background-color: #42b883;
  color: black;
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;

  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.btn:hover {
  cursor: pointer;
  background-color: #42b883;
  border: 0px;
  /* color: white; */
  font-weight: 600;
  transform: translateY(-2px);
}

.sent-message {
  margin-top: 10px;
  font-size: 20px;
}

.hidden {
  display: none;
}

.visible {
  display: block;
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.svg-container {
  top: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

svg .draw {
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: draw 1.5s linear forwards;
}

@keyframes draw {
  from {
    stroke-dasharray: 0, 500;
    stroke-dashoffset: 500;
  }
  to {
    stroke-dasharray: 500, 0;
    stroke-dashoffset: 0;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .container {
    background: linear-gradient(135deg, rgba(66, 184, 131, 0.1), rgba(24, 24, 24, 0.3));
  }
}

@media (max-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
  }

  .header {
    /* letter-spacing: 0px; */
    /* padding: 0px 15px; */
    /* background-color: #181818; */
    z-index: 1000;
  }

  .contact-header {
    margin-top: 150px;
  }

  .contact-form {
    position: fixed;
    color: white;
    text-align: center;
    padding: 50px;
    font-size: 2em;
    background-color: transparent;
  }

  input {
    width: 90vw;
  }

  .svg-container {
    top: 50px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50vw;
  }
}
</style>
