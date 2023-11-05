<template>
  <section>
    <div id="serviceSelectLarge">
      <div class="w-full rounded-2xl bg-white h-28 text-2xl font-bold">
        <!--main features-->

        <div class="flex justify-between p-2">
          <div
            class="text-2xl ml-2 text-indigo-800 mt-14 hover:text-indigo-400"
          >
            {{ text }}
          </div>
          <div class="mt-3 mr-1">
            <img :width="imageWidth" :src="'Img/' + image + '.png'" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceSelectLarge",
  props: ["text", "imageWidth", "image"],
  data() {
    return {};
  },
};
</script>
