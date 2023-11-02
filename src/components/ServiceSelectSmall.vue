<template>
  <section>
    <div id="serviceSelectSmall">
      <div class="relative w-full rounded-2xl bg-white h-20 text-xl font-bold">
        <!--main features-->

        <div class="flex justify-between p-2">
          <div class="text-xs text-center text-gray-900 mt-2">
            {{ text }}
          </div>
          <div class="mt-3 mr-1">
            <img :width="55" src="/Img/Journey.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
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
