<template>
  <div>
    <NavBar />
    <HomeView />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import HomeView from "./Views/HomeView.vue";


export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    HomeView,
  },
};
</script>

