<template>
  <div id="home" class="flex flex-col h-screen bg-indigo-800">
    <div class="m-3 mb-auto">
      <!--2 Large Grids-->
      <div class="grid grid-cols-2 gap-3 my-3">
        <RouterLink :to="{ name: 'directions' }">
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

    <div
      class="
        w-full
        z-50
        flex
        justify-around
        p-1
        mb-2
        border-t-2
        border-t-gray-200
        border-b-2
      "
    >
      <div class="grid place-items-center">
      <HomeIcon :size="30" fillColor="#1f1e1e"/>
        <div class="w-full -mt-1 text-xs text-center text-gray-800 font-semibold">
          Home
        </div>
      </div>
      <div class="grid place-items-center">
      <MapMarkerIcon :size="30" fillColor="#1f1e1e"/>
        <div class="w-full -mt-1 text-xs text-center text-gray-800 font-semibold">
          Destination
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSelectLarge from "/src/components/ServiceSelectLarge.vue";
import ServiceSelectSmall from "/src/components/ServiceSelectSmall.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import HomeIcon from "vue-material-design-icons/Home.vue";
import MapMarkerIcon from "vue-material-design-icons/MapMarker.vue"
import WeatherView from "/src/Views/WeatherView.vue";
import FoodView from "/src/Views/FoodView.vue";

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
  },
};
</script>
