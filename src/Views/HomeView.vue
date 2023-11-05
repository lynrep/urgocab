<template>
  <div id="home" class="flex flex-col h-screen bg-indigo-800">
    <div class="m-3 mb-auto">
      <!--2 Large Grids-->
      <div class="grid grid-cols-2 gap-3 my-3">
        <ServiceSelectLarge
          text="Journey"
          imageWidth="74"
          image="journey_new"
        />
        <ServiceSelectLarge text="Food" imageWidth="74" image="burger" />
      </div>
      <!--4 Small Grids-->
      <div class="grid grid-cols-4 gap-3 my-3">
        <ServiceSelectSmall
          text="Weather"
          imageWidth="50"
          image="weather-news"
        />
        <ServiceSelectSmall text="Transit" imageWidth="64" image="transit" />
        <ServiceSelectSmall
          text="Reservation"
          imageWidth="54"
          image="reservation"
        />
        <ServiceSelectSmall text="Travel" imageWidth="54" image="travel" />
      </div>

      <div class="mt-6 w-full bg-white h-14 rounded-full flex items-center p-3">
        <MagnifyIcon :size="40" class="text-indigo-200" />
        <div class="ml-3 text-indigo-200 text-lg">Pick-up point...</div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSelectLarge from "/src/components/ServiceSelectLarge.vue";
import ServiceSelectSmall from "/src/components/ServiceSelectSmall.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import WeatherView from "/src/Views/WeatherView.vue";

export default {
  name: "HomeView",
  components: {
    ServiceSelectLarge,
    ServiceSelectSmall,
    WeatherView,
    MagnifyIcon,
  },
  data() {
    return {
      serviceSelectText: "My Journey",
      serviceSelectImg: "",
    };
  },
};
</script>
