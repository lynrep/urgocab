<template>
  <div id="app">
    <NavBar />
    <Footer/>
  
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
    Footer,
  },
};
</script>
