<template>
  <p class="flex h-full items-center py-2.5 text-indigo-500">Welcome User</p>
  <img
    :src="imageLink"
    alt="profile image"
    class="rounded-3xl h-10 w-10 object-contain mt-3"
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
