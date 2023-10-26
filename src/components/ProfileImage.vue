<template>
  <img
    :src="imageLink"
    alt="profile image"
    class="rounded-3xl h-8 w-8 object-contain mt-4"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://png.pngtree.com/png-clipart/20201208/original/pngtree-cute-taxi-character-cartoon-style-png-image_5511468.jpg",
    };
  },
};
</script>
