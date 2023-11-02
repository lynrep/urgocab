<template>
  <div id="serviceSelectSmall">
    <div
      class="relative w-full rounded-2xl bg-white h-20 text-xl font-bold mt-2"
    >
      <!--main features-->

      <div
        class="absolute top-1/3 left-1/3 transform -translate-x-1/4 -translate-y-1/4 mt-0.5"
      >
        <img :width="imageWidth" :src="'Img/' + image + '.png'" />
      </div>
    </div>
    <div class="hover:text-teal-200 text-lg text-center text-white mt-2">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSelectSmall",
  props: ["text", "imageWidth", "image"],
  data() {
    return {};
  },
};
</script>
