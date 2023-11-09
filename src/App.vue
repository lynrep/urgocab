<template>
  <div>
    <ProfileImage v-if="isLoggedIn" />
    <NavBar v-else="!isLoggedIn" />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import ProfileImage from "./components/ProfileImage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    ProfileImage,
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
