<template>
  <div id="feed" class="py-40 h-screen"></div>
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
