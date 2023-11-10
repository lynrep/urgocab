<template>
  <div id="mapView" class="flex flex-col h-screen">
    <div id="map"></div>
    <div id="carType" class="w-full">
      <div class="w-full text-center border-t-2 p-1 text-m font-semibold">
        <div class="flex justify-between">
          <GoogleAddressAutocomplete
            v-model="origin"
            class="bg-indigo-500 py-2 px-2 rounded-lg w-full m-4 text-indigo-50"
            placeholder="Enter origin"
          />

          <GoogleAddressAutocomplete
            v-model="destination"
            class="bg-indigo-500 py-4 px-4 rounded-lg w-full m-4 text-indigo-50"
            placeholder="Enter destination"
          />

          <button
            @click="findPlace"
            class="bg-indigo-500 py-4 px-4 rounded-lg m-4 text-indigo-50"
          >
            Search
          </button>
          <button
            @click="clearMap"
            class="bg-indigo-500 py-4 px-4 rounded-lg m-4 text-indigo-50"
          >
            Clear
          </button>
        </div>
      </div>

      <div class="chooseCar">
        <div class="bg-indigo-200">
          <div class="flex items-center px-4 py-2">
            <img width="75" src="/Img/2seater.png" alt="2 seater car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-lg text-indigo-800">2-Seater</div>
                <div class="text-indigo-800">€55</div>
              </div>
              <div class="text-indigo-400 text-sm">8 hours</div>
            </div>
          </div>
        </div>

        <div class="bg-indigo-50">
          <div class="flex items-center px-4 py-5">
            <img width="75" src="/Img/4seater.png" alt="4 seater car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-lg text-indigo-800">4-Seater</div>
                <div class="text-indigo-800">€75</div>
              </div>
              <div class="text-indigo-400 text-sm">8 hours</div>
            </div>
          </div>
        </div>

        <div class="bg-indigo-50">
          <div class="flex items-center px-4 py-5">
            <img width="75" src="/Img/6seater.png" alt="6 seater car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-lg text-indigo-800">6-Seater</div>
                <div class="text-indigo-800">€100</div>
              </div>
              <div class="text-indigo-400 text-sm">8 hours</div>
            </div>
          </div>
        </div>

        <div class="bg-indigo-50">
          <div class="flex items-center px-4 py-5">
            <img width="75" src="/Img/12seater.png" alt="12 seater car" />
            <div class="w-full ml-3">
              <div class="flex items-center justify-between">
                <div class="text-lg text-indigo-800">12-Seater</div>
                <div class="text-indigo-800">€150</div>
              </div>
              <div class="text-indigo-400 text-sm">8 hours</div>
            </div>
          </div>
        </div>

        <div
          class="flex items-center justify-center bg-white py-6 px-4 w-full bottom-0 shadow-inner"
        >
          <button
            @click="orderRide"
            class="bg-indigo-500 text-xl text-white py-4 px-4 rounded-lg w-full"
          >
            Order Ride
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import GoogleAddressAutocomplete from "vue3-google-address-autocomplete";

onMounted(() => {
  setTimeout(() => {
    initMap();
  }, 50);
});

const initMap = () => {
  const map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  console.log(map);
};
</script>

<style>
#mapView {
  #map {
    width: 100%;
    height: 45vh;
    top: 0px;
    left: 0px;
  }
}

#carType {
  .chooseCar {
    height: calc(50vh - 120px);
    position: absolute;
    overflow-y: auto;
    width: 100%;
  }
}
</style>
