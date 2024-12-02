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
  <nav class="container">
    <div class="nav-icons">
      <div title="Home">
        <svg
          @click="handleClick('/')"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 22L2 22"
            :stroke="isCurrentRoute('/') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M2 11L10.1259 4.49931C11.2216 3.62279 12.7784 3.62279 13.8741 4.49931L22 11"
            :stroke="isCurrentRoute('/') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
            :stroke="isCurrentRoute('/') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M4 22V9.5"
            :stroke="isCurrentRoute('/') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M20 22V9.5"
            :stroke="isCurrentRoute('/') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393C9 14.8787 9 15.5858 9 17V22"
            :stroke="isCurrentRoute('/') ? '#42b883' : 'white'"
            stroke-width="1.5"
          />
          <path
            d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
            :stroke="isCurrentRoute('/') ? '#42b883' : 'white'"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <div title="About">
        <svg
          @click="handleClick('/about')"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 13H16M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V13M8 13C5.2421 12.3871 3.06717 10.2687 2.38197 7.52787L2 6M16 13C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5"
            :stroke="isCurrentRoute('/about') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <circle
            cx="12"
            cy="6"
            r="4"
            :stroke="isCurrentRoute('/about') ? '#42b883' : 'white'"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <div title="Projects">
        <svg
          @click="handleClick('/projects')"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 10L13 10"
            :stroke="isCurrentRoute('/projects') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M10 3H16.5C16.9644 3 17.1966 3 17.3916 3.02567C18.7378 3.2029 19.7971 4.26222 19.9743 5.60842C20 5.80337 20 6.03558 20 6.5"
            :stroke="isCurrentRoute('/projects') ? '#42b883' : 'white'"
            stroke-width="1.5"
          />
          <path
            d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
            :stroke="isCurrentRoute('/projects') ? '#42b883' : 'white'"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <div title="Contact">
        <svg
          @click="handleClick('/contact')"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
            :stroke="isCurrentRoute('/contact') ? '#42b883' : 'white'"
            stroke-width="1.5"
          />
          <path
            d="M12 16V8"
            :stroke="isCurrentRoute('/contact') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M8 14V10"
            :stroke="isCurrentRoute('/contact') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M16 14V10"
            :stroke="isCurrentRoute('/contact') ? '#42b883' : 'white'"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 15px 24px;
  width: 100%;
  color: #42b883;
  background-color: #2a2a2a;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: linear-gradient(145deg, #333333, #2a2a2a);
  z-index: 1000;
}

.container > div {
  display: flex;
  justify-content: space-around;
}

.nav-icons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

svg {
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

svg:hover {
  cursor: pointer;
  transform: translateY(-2px);
}
</style>
