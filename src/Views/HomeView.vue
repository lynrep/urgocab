<template>
  <div id="home" class="flex flex-col h-screen bg-gray-300">
    <div class="m-3 mb-auto">
      <!--2 Large Grids-->
      <div class="grid grid-cols-2 gap-3 my-3">
        <ServiceSelectLarge
          :text="serviceSelectText"
          :imageWidth="serviceSelectImg"
        />
        <ServiceSelectLarge
          :text="serviceSelectText"
          :imageWidth="serviceSelectImg"
        />
      </div>
      <!--4 Small Grids-->
      <div class="grid grid-cols-4 gap-3 my-3">
        <ServiceSelectSmall
          :text="serviceSelectText"
          :imageWidth="serviceSelectImg"
        />
        <ServiceSelectSmall
          :text="serviceSelectText"
          :imageWidth="serviceSelectImg"
        />
        <ServiceSelectSmall
          :text="serviceSelectText"
          :imageWidth="serviceSelectImg"
        />
        <ServiceSelectSmall
          :text="serviceSelectText"
          :imageWidth="serviceSelectImg"
        />
      </div>

      <div class="w-full bg-white h-14 rounded-full flex items-center p-3">
        <MagnifyIcon :size="40" class="text-gray-700" />
        <div class="ml-3 text-xs font-semibold text-gray-700">
          Pick-up point
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSelectLarge from "/src/components/ServiceSelectLarge.vue";
import ServiceSelectSmall from "/src/components/ServiceSelectSmall.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";

export default {
  name: "HomeView",
  components: {
    ServiceSelectLarge,
    ServiceSelectSmall,
    MagnifyIcon,
  },
  data() {
    return {
      serviceSelectText: "My Journey",
      serviceSelectImg: 74,
    };
  },
};
</script>
