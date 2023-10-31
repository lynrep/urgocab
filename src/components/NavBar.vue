<template>
  <header class="w-full text-sm">  
    <div class="top-0 left-0 h-16 w-full bg-gray-700">
      <div
        class="flex justify-between flex-nowrap h-full border-b border-solid border-gray-400 px-10 mx-auto"
      >
        <!--Company Name-->
        <a
          class="flex h-full items-center font-extrabold text-teal-200 text-2xl"
          >{{ company }} <i class="fa-solid fa-taxi" style="text-teal-200"></i
        ></a>

        <!--LogIn items-->
        <div
          class="flex h-full font-bold text-lg text-teal-200 space-x-6 ml-10"
        >
          <ProfileImage v-if="isLoggedIn" />
          <LogIn v-else text="Sign In" @click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LogIn from "./LogIn.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "NavBar",
  components: {
    LogIn,
    ProfileImage,
  },
  data() {
    return {
      company: "UrGoCab",
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
