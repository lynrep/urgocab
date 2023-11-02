<template>
  <footer class="mx-auto h-full w-full">
    <div class="flex flex-col items-center p-4 bg-indigo-800">
      <div class="flex space-x-4">
        <router-link
          :to="{ name: 'home' }"
          class="text-indigo-50 hover:text-indigo-400"
          >Home</router-link
        >
        <a href="#" class="text-indigo-50 hover:text-indigo-400">About</a>
        <a href="#" class="text-indigo-50 hover:text-indigo-400">Contact</a>
      </div>
      <p class="mt-4 text-indigo-200">
        <i class="fa-regular fa-copyright"></i>2023 UrGoCab. All rights
        reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import HomeView from "../Views/HomeView.vue";
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
