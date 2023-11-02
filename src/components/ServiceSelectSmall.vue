<template>
  <div id="serviceSelectSmall">
    <div class="relative w-full rounded-2xl bg-white h-20 text-xl font-bold">
      <!--main features-->

      <div
        class="absolute top-1/3 left-1/3 transform -translate-x-1/4 -translate-y-1/4 mt-0.5"
      >
        <img :width="55" src="/Img/Journey.png" alt="" />
      </div>
    </div>
    <div class="text-m text-center text-gray-900 mt-2">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceSelectSmall",
  props: ["text", "imageWidth"],
  data() {
    return {};
  },
};
</script>
