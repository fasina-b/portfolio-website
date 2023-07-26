<template>
  <div>
    <!-- Navigation Links -->
    <button @click="goToHome">Home</button>
    <button @click="goToAbout">About</button>

    <!-- Render the current page content -->
    <div v-if="currentPage === 'home'">
      <Home />
    </div>
    <div v-else-if="currentPage === 'about'">
      <About />
    </div>
    <div v-else>
      <HelloWorld />
    </div>
  </div>
</template>

<script>
// Import the required components
import Home from './views/Home.vue';
import About from './views/About.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    Home,
    About,
    HelloWorld, // Include HelloWorld component
  },
  data() {
    return {
      currentPage: 'home', // Set the default page
    };
  },
  methods: {
    goToHome() {
      this.currentPage = 'home'; // Change the currentPage to show Home
    },
    goToAbout() {
      this.currentPage = 'about'; // Change the currentPage to show About
    },
    // Add methods for other pages as needed
  },
};
</script>