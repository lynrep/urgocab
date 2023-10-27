<template>
  <div id="app">
    <NavBar />
    <div class="flex flex-col h-screen">
      <div class="m-3 mb-auto">
        <div class="grid grid-cols-2 gap-3 my-3">
          <ServiceSelectLarge />
          <ServiceSelectLarge />
          <ServiceSelectLarge />
          <ServiceSelectLarge />
          <ServiceSelectLarge />
          <ServiceSelectLarge />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import ServiceSelectLarge from "./components/ServiceSelectLarge.vue";

export default {
  name: "App",
  components: {
    NavBar,
    ServiceSelectLarge,
    Footer,
  },
};
</script>

<style></style>
