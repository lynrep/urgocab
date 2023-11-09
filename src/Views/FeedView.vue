<template>
  <ProfileImage />
  <div id="feed" class="h-screen bg-indigo-500">
    <button @click="handleSignOut">Sign out</button>
  </div>
</template>

<script>
import ProfileImage from "/src/components/ProfileImage.vue";
import HomeView from "../Views/HomeView.vue";

export default {
  name: "FeedView",
  components: {
    ProfileImage,
    HomeView,
  },
};
</script>
