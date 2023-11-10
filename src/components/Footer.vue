<template>
  <footer class="mx-auto h-full w-full">
    <div class="flex flex-col items-center p-4 bg-indigo-600">
      <div class="flex space-x-4 text-lg">
        <router-link
          :to="{ name: 'home' }"
          class="text-indigo-50 hover:text-indigo-400"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'googlemap' }"
          class="text-indigo-50 hover:text-indigo-400"
          >My Journey</router-link
        >
        <router-link
          :to="{ name: 'about' }"
          class="text-indigo-50 hover:text-indigo-400"
          >About</router-link
        >
        <router-link
          :to="{ name: 'contact' }"
          class="text-indigo-50 hover:text-indigo-400"
          >Contact</router-link
        >
      </div>
      <p class="mt-4 text-indigo-200 text-xs">
        <i class="fa-regular fa-copyright"></i>2023 UrTravelApp. All rights
        reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import HomeView from "../Views/HomeView.vue";
import AboutView from "../Views/AboutView.vue";
import ContactView from "../Views/ContactView.vue";
import GoogleMap from "../Views/GoogleMap.vue";

export default {
  name: "Footer",
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
