<template>
  <div id="home" class="flex flex-col h-screen bg-indigo-800">
    <div class="m-3 mb-auto">
      <!--2 Large Grids-->
      <div class="grid grid-cols-2 gap-3 my-3">
        <RouterLink :to="{ name: 'googlemap' }">
          <ServiceSelectLarge
            text="Journey"
            imageWidth="74"
            image="journey_new"
          />
        </RouterLink>

        <RouterLink :to="{ name: 'food' }">
          <ServiceSelectLarge text="Food" imageWidth="74" image="burger" />
        </RouterLink>
      </div>
      <!--4 Small Grids-->
      <div class="grid grid-cols-4 gap-3 my-3">
        <RouterLink :to="{ name: 'weather' }">
          <ServiceSelectSmall
            text="Weather"
            imageWidth="50"
            image="weather-news"
          />
        </RouterLink>

        <RouterLink :to="{ name: 'map' }"
          ><ServiceSelectSmall text="Ride" imageWidth="64" image="ride"
        /></RouterLink>

        <RouterLink :to="{ name: 'planner' }">
          <ServiceSelectSmall
            text="Planner"
            imageWidth="54"
            image="reservation"
          />
        </RouterLink>
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
import HomeIcon from "vue-material-design-icons/Home.vue";
import MapMarkerIcon from "vue-material-design-icons/MapMarker.vue";
import WeatherView from "/src/Views/WeatherView.vue";
import FoodView from "/src/Views/FoodView.vue";
import MapView from "/src/Views/MapView.vue";

export default {
  name: "HomeView",
  components: {
    ServiceSelectLarge,
    ServiceSelectSmall,
    WeatherView,
    MagnifyIcon,
    FoodView,
    HomeIcon,
    MapMarkerIcon,
    MapView,
  },
};
</script>
