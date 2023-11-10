<template>
  <header class="w-full text-sm">
    <div class="top-0 left-0 h-16 w-full bg-indigo-500">
      <div
        class="flex justify-between flex-nowrap h-full border-b border-solid bg-indigo-500 px-10 mx-auto"
      >
        <!--Company Name-->
        <router-link
          :to="{ name: 'home' }"
          class="flex h-full items-center font-extrabold text-sky-100 text-xl"
          >{{ company }}
          <img class="w-14 h-14" src="Img/logo.png" alt="logo" />
        </router-link>

        <!--Register items-->
        <div class="flex h-full font-extrabold text-xl text-sky-100 space-x-4">
          <router-link
            :to="{ name: 'register' }"
            text="Register"
            @click="registerUser"
            class="py-4"
          ></router-link>

          <router-link
            :to="{ name: 'login' }"
            text="Log In"
            @click="loginUser"
            class="py-4"
          ></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HomeView from "../Views/HomeView.vue";
import LogInView from "../Views/LogInView.vue";
import RegisterView from "../Views/RegisterView.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "NavBar",
  components: {
    LogInView,
    ProfileImage,
    RegisterView,
    HomeView,
  },
  data() {
    return {
      company: "UrTravelApp",
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
