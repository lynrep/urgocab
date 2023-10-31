<template>
  <div>
    <NavBar />
    <RouterView/>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import DirectionsView from './Views/DirectionsView.vue';


export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    DirectionsView,
  },
};
</script>

